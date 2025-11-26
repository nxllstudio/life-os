# 🚀 Deploy to GitHub Pages - Step by Step

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `life-os` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license
5. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd "/Users/lucasassis/Desktop/Life OS"

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/life-os.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password (use a Personal Access Token, not your password).

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 4: Configure GitHub Actions (Automatic Deployment)

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

## Step 5: Add Firebase Secrets (Optional but Recommended)

If you want Firebase to work, add your environment variables:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** for each:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

## Step 6: Trigger Deployment

1. Go to **Actions** tab in your repository
2. The workflow should run automatically after you push
3. Wait for it to complete (green checkmark)
4. Your app will be live at: `https://YOUR_USERNAME.github.io/life-os/`

## 🎉 Done!

Your app is now hosted on GitHub Pages and accessible from anywhere!

---

## Alternative: Quick Deploy with Netlify (Easier)

If GitHub Pages seems complicated, you can also:

1. Push your code to GitHub (Steps 1-2 above)
2. Go to https://app.netlify.com
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables (Firebase config)
7. Click **"Deploy site"**

Netlify gives you a custom domain and automatic HTTPS!

---

## Troubleshooting

### GitHub Pages shows 404?
- Make sure the repository is **Public**
- Check that GitHub Actions workflow completed successfully
- Wait a few minutes for DNS propagation

### Build fails?
- Check the Actions tab for error messages
- Make sure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Need help?
Check the Actions tab logs for detailed error messages.

