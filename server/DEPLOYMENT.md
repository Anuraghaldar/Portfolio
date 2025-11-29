# Backend Deployment Guide for Vercel

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Vercel CLI installed globally: `npm install -g vercel`

## Deployment Steps

### 1. Install Vercel CLI (if not already installed)
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Navigate to Server Directory
```bash
cd server
```

### 4. Deploy to Vercel
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time) or Yes (subsequent deployments)
- **Project name?** → portfolio-backend (or your preferred name)
- **Directory?** → ./
- **Override settings?** → No

### 5. Set Environment Variables

After deployment, set your environment variables in Vercel Dashboard:

1. Go to https://vercel.com/dashboard
2. Select your project → Settings → Environment Variables
3. Add the following variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=your-email@gmail.com
FRONTEND_URL=https://your-portfolio-domain.vercel.app
```

**Important:** For Gmail, you need to:
- Enable 2-Factor Authentication
- Generate an App Password: https://myaccount.google.com/apppasswords
- Use the App Password as `SMTP_PASS`

### 6. Deploy Production Version
```bash
vercel --prod
```

## Update Frontend API URL

After deployment, update your frontend to point to the Vercel backend:

1. In your frontend `.env` file:
```env
VITE_API_URL=https://your-backend-url.vercel.app
```

2. Or directly in your frontend code where you make API calls

## Vercel Dashboard

Your backend will be available at:
```
https://your-project-name.vercel.app
```

Health check endpoint:
```
https://your-project-name.vercel.app/health
```

API endpoint:
```
https://your-project-name.vercel.app/api/v1/contact
```

## Redeployment

For subsequent deployments:
```bash
cd server
vercel --prod
```

## Troubleshooting

### Issue: "Module not found" errors
- Make sure all dependencies are in `package.json`
- Run `npm install` before deploying

### Issue: CORS errors
- Update CORS configuration in `server.js` to allow your frontend domain
- Add your Vercel frontend URL to the allowed origins

### Issue: Environment variables not working
- Double-check spelling in Vercel Dashboard
- Redeploy after adding/updating environment variables

### Issue: Rate limiting not working
- Vercel serverless functions are stateless
- Consider using a Redis-based rate limiter for production

## Monitoring

- View logs: Vercel Dashboard → Your Project → Deployments → View Function Logs
- Monitor usage: Vercel Dashboard → Your Project → Analytics

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `FRONTEND_URL` environment variable

## Local Testing with Production Settings

Test Vercel deployment locally:
```bash
vercel dev
```

This runs your app in a Vercel-like environment locally.
