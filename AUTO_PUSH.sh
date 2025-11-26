#!/bin/bash

echo "🚀 Auto-pushing Life OS Pro to GitHub..."
echo ""

# Check if authenticated
if ! gh auth status &>/dev/null; then
    echo "❌ Not authenticated with GitHub."
    echo ""
    echo "🔐 Starting authentication..."
    echo "   (A browser window will open)"
    echo ""
    gh auth login --web
    echo ""
fi

# Check authentication again
if gh auth status &>/dev/null; then
    echo "✅ Authenticated!"
    echo ""
    echo "📦 Creating repository and pushing code..."
    echo ""
    
    # Create repo and push
    gh repo create life-os --public --source=. --remote=origin --push
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Successfully pushed to GitHub!"
        echo ""
        
        # Get username
        USERNAME=$(gh api user --jq .login)
        
        echo "🌐 Your repository:"
        echo "   https://github.com/${USERNAME}/life-os"
        echo ""
        echo "📋 Next: Enable GitHub Pages"
        echo "   1. Go to: https://github.com/${USERNAME}/life-os/settings/pages"
        echo "   2. Source: main branch"
        echo "   3. Save"
        echo ""
        echo "   Your app will be live at:"
        echo "   https://${USERNAME}.github.io/life-os/"
        echo ""
        
        # Try to enable pages via API
        echo "🔧 Attempting to enable GitHub Pages automatically..."
        gh api repos/${USERNAME}/life-os/pages -X POST \
            -f source[branch]=main \
            -f source[path]=/ 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo "✅ GitHub Pages enabled!"
        else
            echo "⚠️  Please enable GitHub Pages manually (see above)"
        fi
    else
        echo "❌ Failed to create/push repository"
        exit 1
    fi
else
    echo "❌ Authentication failed. Please try again."
    exit 1
fi

