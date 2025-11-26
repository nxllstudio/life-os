# Deployment Guide

Your Life OS Pro app can be deployed to several platforms. Here are the easiest options:

## Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional, or use web interface):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Or visit [vercel.com](https://vercel.com) and import your Git repository.

3. **Environment Variables**:
   - Add your Firebase environment variables in Vercel dashboard:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`

## Option 2: Firebase Hosting

Since you're already using Firebase, this is a great option:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set public directory to `dist`
   - Configure as single-page app: Yes
   - Set up automatic builds: No (or Yes if you want)

4. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## Option 3: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

   Or visit [netlify.com](https://netlify.com) and drag & drop the `dist` folder.

3. **Add Environment Variables** in Netlify dashboard (same as Vercel).

## Option 4: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.ts**:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

## Local Development

The app is currently running locally. You can access it at:
- **Local**: http://localhost:5173 (or the port shown in terminal)

To start the dev server manually:
```bash
npm run dev
```

## Important Notes

- Make sure to add your Firebase environment variables to your hosting platform
- The app uses client-side routing, so all platforms need to be configured to serve `index.html` for all routes (already configured in the config files)
- After deployment, update your Firebase Auth authorized domains to include your deployment URL

