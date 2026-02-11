# 🚀 Deploy to Vercel

This Love Puzzle app is ready to deploy on Vercel!

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free)
2. [Vercel CLI](https://vercel.com/docs/cli) installed (optional, or use web dashboard)

---

## Option 1: Deploy via Vercel CLI (Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy from the project directory
```bash
cd /Users/anshul.p/projects/personal/puzzle-app
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → love-puzzle (or any name you like)
- **Directory?** → . (current directory)
- **Override settings?** → No

### Step 4: Production deployment
```bash
vercel --prod
```

Your app will be live at: `https://love-puzzle.vercel.app` (or similar)

---

## Option 2: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to Git (GitHub, GitLab, or Bitbucket)

```bash
cd /Users/anshul.p/projects/personal/puzzle-app
git init
git add .
git commit -m "Initial commit - Love Puzzle app"
```

Then create a repository on GitHub and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/love-puzzle.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git repository
4. Click "Import"
5. Click "Deploy"

**That's it!** Vercel will automatically detect it's a static site and deploy it.

---

## Option 3: Deploy via Vercel Web (No Git Required)

### Drag and Drop Deployment:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Select "Browse" under "Or, deploy a new project from a template"
3. Drag and drop the `puzzle-app` folder
4. Click "Deploy"

---

## After Deployment

### Your live URL will be something like:
```
https://love-puzzle-abc123.vercel.app
```

### Custom Domain (Optional):
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain

### Environment Variables:
None needed - this is a pure frontend app!

---

## Files Deployed

✅ **Included in deployment:**
- `index.html` - Main game page
- `style.css` - Styling
- `script.js` - Game logic
- `sample-image.jpg` - Your couple's photo

❌ **Excluded from deployment** (via `.vercelignore`):
- Development/setup tools
- Original unprocessed images
- README files

---

## Testing Your Deployment

1. Visit your Vercel URL
2. You should see the shuffled puzzle immediately
3. Test drag & drop functionality
4. Test the Peek button
5. Complete the puzzle to see the romantic message!

---

## Updating Your Deployment

### If you used CLI:
```bash
vercel --prod
```

### If you used Git:
Just push to your repository:
```bash
git add .
git commit -m "Update puzzle"
git push
```
Vercel will automatically redeploy!

---

## Troubleshooting

**Issue: Image not showing**
- Make sure `sample-image.jpg` exists in the project
- Check browser console for errors

**Issue: 404 errors**
- Ensure all file paths are relative (no absolute paths)
- Check `vercel.json` configuration

**Issue: Slow loading**
- Image is already optimized at 500x500px
- Vercel CDN should make it fast globally

---

## 💡 Pro Tips

1. **Share the URL** with your partner via a romantic message
2. **Set up a custom domain** for extra points (e.g., `ourpuzzle.com`)
3. **Keep the Vercel URL secret** until you're ready to share
4. **Test on mobile** - the app is responsive!

---

## Cost

**FREE!** ✨
- Vercel's Hobby plan is free forever
- Includes:
  - Unlimited deployments
  - Automatic HTTPS
  - Global CDN
  - No credit card required

Enjoy your deployed puzzle! 💕
