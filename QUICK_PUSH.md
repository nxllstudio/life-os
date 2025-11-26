# 🚀 Quick Push to GitHub - Copy & Paste These Commands

I can't directly access your GitHub account, but here are the **exact commands** to copy and paste:

## Step 1: Install GitHub CLI (if needed)

```bash
brew install gh
```

Or download from: https://cli.github.com/

## Step 2: Authenticate with GitHub

```bash
gh auth login
```

Follow the prompts:
- Choose "GitHub.com"
- Choose "HTTPS"
- Choose "Login with a web browser"
- Copy the code and press Enter
- Authorize in your browser

## Step 3: Create Repository and Push (I'll do this for you after auth)

Once authenticated, run:

```bash
cd "/Users/lucasassis/Desktop/Life OS"
gh repo create life-os --public --source=. --remote=origin --push
```

This will:
- ✅ Create the repository on GitHub
- ✅ Add it as remote
- ✅ Push all your code
- ✅ Set up everything automatically

## Step 4: Enable GitHub Pages

After pushing, run:

```bash
gh api repos/$(gh api user --jq .login)/life-os/pages -X POST -f source[branch]=main -f source[path]=/
```

Or manually:
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: main branch
4. Save

---

## Alternative: Manual Method (No CLI needed)

If you prefer not to use CLI:

1. **Create repo on GitHub:**
   - Go to: https://github.com/new
   - Name: `life-os`
   - Public
   - Create

2. **Push code:**
   ```bash
   cd "/Users/lucasassis/Desktop/Life OS"
   git remote add origin https://github.com/YOUR_USERNAME/life-os.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable Pages:**
   - Settings → Pages → main branch → Save

---

**Which method do you prefer?** I can guide you through either one!

