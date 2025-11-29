# Quick Vercel Deployment Commands

## First Time Deployment
```bash
# Navigate to server directory
cd server

# Install Vercel CLI globally (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables to Set in Vercel Dashboard
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=your-email@gmail.com
FRONTEND_URL=https://portfolio-puce-phi-a8189zd8da.vercel.app
NODE_ENV=production
```

## After Deployment
1. Copy your backend URL from Vercel (e.g., `https://your-backend.vercel.app`)
2. Update frontend `.env` file:
   ```env
   VITE_API_URL=https://your-backend.vercel.app
   ```
3. Redeploy frontend if needed

## Test Your Backend
```bash
# Health check
curl https://your-backend.vercel.app/health

# Test contact endpoint (POST request)
curl -X POST https://your-backend.vercel.app/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

## Redeploy
```bash
cd server
vercel --prod
```

## View Logs
- Go to Vercel Dashboard
- Select your project
- Click on "Deployments"
- Click on latest deployment
- View "Function Logs"

## Important Notes
- Make sure to generate a Gmail App Password (not your regular password)
- Enable 2FA on your Gmail account first
- Create App Password: https://myaccount.google.com/apppasswords
- Update FRONTEND_URL to match your actual frontend Vercel URL
