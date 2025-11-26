#!/bin/bash

echo "🚀 Pushing Life OS Pro to GitHub..."
echo ""

# Check if remote exists
if ! git remote get-url origin &>/dev/null; then
    echo "❌ No remote repository configured."
    echo ""
    echo "📋 First, create a repository on GitHub:"
    echo "   1. Go to: https://github.com/new"
    echo "   2. Name it: life-os (or any name)"
    echo "   3. Make it PUBLIC (required for free hosting)"
    echo "   4. Click 'Create repository'"
    echo ""
    read -p "Enter your GitHub username: " GITHUB_USERNAME
    read -p "Enter your repository name (default: life-os): " REPO_NAME
    REPO_NAME=${REPO_NAME:-life-os}
    
    echo ""
    echo "Adding remote repository..."
    git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
    echo "✅ Remote added!"
fi

echo ""
echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Go to your repository on GitHub"
    echo "   2. Settings → Pages"
    echo "   3. Source: main branch"
    echo "   4. Save"
    echo ""
    echo "   Your app will be live at:"
    echo "   https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/"
else
    echo ""
    echo "❌ Push failed. Make sure:"
    echo "   - You have a GitHub account"
    echo "   - The repository exists on GitHub"
    echo "   - You have push permissions"
fi

