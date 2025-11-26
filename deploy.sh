#!/bin/bash

echo "🚀 Deploying Life OS Pro..."
echo ""

# Build the app
echo "📦 Building production bundle..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "Choose deployment method:"
echo "1. Surge.sh (free, requires email/password)"
echo "2. Netlify Drop (drag & drop dist folder to netlify.com/drop)"
echo "3. Vercel (requires: vercel login)"
echo ""
echo "For Surge.sh, run:"
echo "  cd dist && surge"
echo ""
echo "For Netlify, visit: https://app.netlify.com/drop"
echo "  Then drag the 'dist' folder to the page"
echo ""
echo "For Vercel, run:"
echo "  vercel login"
echo "  vercel --prod"
echo ""

