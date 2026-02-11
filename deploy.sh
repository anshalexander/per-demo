#!/bin/bash

# Love Puzzle - Vercel Deployment Script
# This script will deploy your puzzle to Vercel

echo "💕 Love Puzzle - Vercel Deployment 💕"
echo "======================================"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "✅ Vercel CLI is ready"
echo ""

# Check if logged in
echo "🔑 Checking Vercel authentication..."
if ! vercel whoami &> /dev/null; then
    echo "Please login to Vercel (browser will open)..."
    vercel login
fi

echo ""
echo "🚀 Deploying to Vercel..."
echo ""

# Deploy to production
vercel --prod

echo ""
echo "✨ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Open the URL shown above"
echo "  2. Test the puzzle"
echo "  3. Share the link with your partner 💕"
echo ""
