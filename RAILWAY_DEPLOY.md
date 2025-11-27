# Deploy to Railway.app

## Quick Setup

1. **Go to Railway.app**
   - Visit: https://railway.app
   - Sign in with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `kmoh-byte/3dscanner`

3. **Railway Auto-Configuration**
   Railway will automatically detect:
   - `package.json` (Node.js project)
   - `railway.toml` (configuration)
   - Will run `npm install` and `npm start`

4. **Environment Variables** (Optional)
   - None required! App works out of the box

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Railway will provide a public URL

6. **Access Your App**
   - Click "Settings" → "Generate Domain"
   - Your app will be live at: `https://[your-app].up.railway.app`

## Important Notes

- **HTTPS Required**: Camera access requires HTTPS (Railway provides this automatically)
- **Port**: App uses `process.env.PORT` which Railway sets automatically
- **Health Check**: Available at `/health` endpoint

## Troubleshooting

**If deployment fails:**
1. Check Railway logs in the dashboard
2. Ensure Node.js version is 18+
3. Verify all files pushed to GitHub

**If camera doesn't work:**
- Must access via HTTPS (not HTTP)
- Browser must support MediaPipe
- User must allow camera permissions

## Manual Configuration (if needed)

If Railway doesn't auto-detect, add these settings:

**Build Command:**
```
npm install
```

**Start Command:**
```
npm start
```

**Port:**
Railway automatically sets `PORT` environment variable.

## Test Locally First

```bash
npm install
npm start
```

Visit `http://localhost:3000`

---

Your app should be live in minutes! 🚀
