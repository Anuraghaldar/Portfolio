import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeHeroModel = ({ globeSize = 3.5 }) => {
  const containerRef = useRef();
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent double initialization (React StrictMode)
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    const container = containerRef.current;
    
    // Clear any existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Generate points using golden spiral
    const count = 180;
    const phi = Math.PI * (3 - Math.sqrt(5));
    const pts = [];

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      pts.push(new THREE.Vector3(
        Math.cos(theta) * r * globeSize,
        y * globeSize,
        Math.sin(theta) * r * globeSize
      ));
    }

    // Points
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(
      pts.flatMap(p => [p.x, p.y, p.z]), 3
    ));
    const pointsMat = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true
    });
    globeGroup.add(new THREE.Points(pointsGeo, pointsMat));

    // Lines
    const lns = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < globeSize * 0.55) {
          lns.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(lns, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2
    });
    globeGroup.add(new THREE.LineSegments(linesGeo, linesMat));

    // // Inner sphere
    // const sphereGeo = new THREE.SphereGeometry(globeSize * 0.88, 48, 48);
    // const sphereMat = new THREE.MeshBasicMaterial({
    //   color: 0x0a1628,
    //   transparent: true,
    //   opacity: 0.97
    // });
    // globeGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

    // Animation & interaction state
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let animId;

    const animate = () => {
      if (!isDragging) globeGroup.rotation.y += 0.003;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Mouse controls
    const canvas = renderer.domElement;
    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      globeGroup.rotation.y += (e.clientX - prevMouse.x) * 0.005;
      globeGroup.rotation.x += (e.clientY - prevMouse.y) * 0.005;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => { isDragging = false; };
    const onWheel = (e) => {
      e.preventDefault();
      camera.position.z = Math.max(6, Math.min(25, camera.position.z + e.deltaY * 0.01));
    };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    // Touch controls
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      globeGroup.rotation.y += (e.touches[0].clientX - prevMouse.x) * 0.005;
      globeGroup.rotation.x += (e.touches[0].clientY - prevMouse.y) * 0.005;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => { isDragging = false; };

    canvas.addEventListener('touchstart', onTouchStart);
    canvas.addEventListener('touchmove', onTouchMove);
    canvas.addEventListener('touchend', onTouchEnd);

    // Cleanup
    return () => {
      initialized.current = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mouseleave', onMouseUp);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [globeSize]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      style={{ minHeight: '400px', touchAction: 'none' }}
    />
  );
};

export default ThreeHeroModel;