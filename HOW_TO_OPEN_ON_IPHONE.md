# 📱 How to Open Life OS Pro on iPhone Safari

## Option 1: Access from Same WiFi Network (Recommended)

### Step 1: Make sure your iPhone and Mac are on the same WiFi network

### Step 2: Find your Mac's local IP address
Your Mac's local IP is: **10.1.10.127**

### Step 3: Open Safari on your iPhone
1. Open **Safari** app on your iPhone
2. In the address bar, type:
   ```
   http://10.1.10.127:5173
   ```
3. Tap **Go**

### Step 4: The app should load!
You should now see Life OS Pro running on your iPhone.

---

## Option 2: If the IP doesn't work

### Find your Mac's IP address manually:
1. On your Mac, open **System Settings** (or System Preferences)
2. Go to **Network**
3. Select your WiFi connection
4. Look for the **IP Address** (usually starts with 192.168.x.x or 10.x.x.x)
5. Use that IP in Safari: `http://YOUR_IP:5173`

---

## Option 3: Deploy to the Internet (Best for Testing)

If you want to access it from anywhere:

1. **Deploy to Netlify** (easiest):
   - Go to: https://app.netlify.com/drop
   - Drag the `dist` folder
   - Get a public URL like: `https://your-app.netlify.app`
   - Open that URL in Safari on iPhone

2. **Or use Vercel**:
   ```bash
   vercel login
   vercel --prod
   ```

---

## 🔧 Troubleshooting

### "Can't connect" error?
- Make sure both devices are on the **same WiFi network**
- Check that the dev server is running (should show in terminal)
- Try disabling firewall temporarily on your Mac
- Make sure port 5173 is not blocked

### "Site can't be reached"?
- Verify the IP address is correct
- Make sure you're using `http://` not `https://`
- Check that the dev server is running: `npm run dev`

### Dev server not running?
Run this in terminal:
```bash
cd "/Users/lucasassis/Desktop/Life OS"
npm run dev
```

You should see:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://10.1.10.127:5173/
```

Use the **Network** URL on your iPhone!

---

## 📲 Install as App on iPhone

Once the app is open in Safari:

1. Tap the **Share button** (square with arrow pointing up)
2. Scroll down and tap **"Add to Home Screen"**
3. Customize the name (optional)
4. Tap **"Add"**
5. The app icon will appear on your home screen!

Now you can open it like a native app! 🎉

---

## Quick Access

**Your app URL:** `http://10.1.10.127:5173`

Just type this in Safari on your iPhone (make sure you're on the same WiFi)!

