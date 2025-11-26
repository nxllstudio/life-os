# Quick Deployment Guide

Your app is built and ready to deploy! Here are the **fastest** options:

## ✅ Option 1: Netlify Drop (EASIEST - No CLI needed!)

1. **The app is already built** - the `dist` folder is ready
2. Go to: https://app.netlify.com/drop
3. **Drag and drop** the `dist` folder onto the page
4. Your app will be live in seconds! 🎉

**That's it!** You'll get a URL like `https://random-name-123.netlify.app`

---

## Option 2: Surge.sh (Free, Simple)

1. Open terminal in this directory
2. Run:
   ```bash
   cd dist
   surge
   ```
3. Enter your email and create a password (first time only)
4. Choose a domain name (or press Enter for a random one)
5. Done! Your app will be live at `your-app-name.surge.sh`

---

## Option 3: Vercel (Best for Production)

1. Run:
   ```bash
   vercel login
   ```
   (This will open a browser for authentication)

2. Then:
   ```bash
   vercel --prod
   ```

3. Add your Firebase environment variables in Vercel dashboard

---

## Option 4: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize (if not done):
   ```bash
   firebase init hosting
   ```
   - Select your project
   - Public directory: `dist`
   - Single-page app: Yes

4. Deploy:
   ```bash
   firebase deploy --only hosting
   ```

---

## 🎯 Recommended: Netlify Drop

**Just drag the `dist` folder to https://app.netlify.com/drop** - it's the fastest way to get your app online!

---

## Important: Environment Variables

After deployment, add these to your hosting platform:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

---

## View Locally

Your app is also running locally at: **http://localhost:5173**

To start the dev server:
```bash
npm run dev
```

