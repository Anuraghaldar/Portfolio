export const scrollToSection = (target = '', options = {}) => {
  const { extraOffset = 0, waitForLayout = false } = options;

  const normalizedId = target.startsWith('#') ? target.slice(1) : target;
  if (!normalizedId) return;

  const section = document.getElementById(normalizedId);
  if (!section) return;

  const performScroll = () => {
    const headerBar = document.querySelector('[data-nav-root="true"]');
    const navHeight = headerBar?.offsetHeight || 0;
    const additionalOffset = window.innerWidth < 768 ? 28 : 18;
    const finalOffset = navHeight + additionalOffset + extraOffset;
    const yPosition = section.getBoundingClientRect().top + window.pageYOffset - finalOffset;

    window.scrollTo({ top: Math.max(yPosition, 0), behavior: 'smooth' });
  };

  if (waitForLayout) {
    requestAnimationFrame(() => {
      requestAnimationFrame(performScroll);
    });
  } else {
    requestAnimationFrame(performScroll);
  }
};
