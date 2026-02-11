# 🔗 Connect GitHub to Vercel - Step by Step Guide

## Quick Check: Is Your Repo Already Connected?

### ✅ Check #1: Visit Your Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. Sign in with your Vercel account
3. Look for a project named **"per-demo"** or **"love-puzzle"**
   - **If you see it**: You're connected! ✅
   - **If you don't see it**: Follow the setup below ⬇️

### ✅ Check #2: Check GitHub Deployments
1. Go to: https://github.com/anshalexander/per-demo
2. Click the **"Deployments"** section (right side)
   - **If you see deployments**: You're connected! ✅
   - **If empty**: Follow the setup below ⬇️

---

## 🚀 Setup: Connect Your Repository (5 Minutes)

### **Step 1: Go to Vercel Import Page**
Click this link: **[vercel.com/new](https://vercel.com/new)**

### **Step 2: Sign In**
- If not signed in, click **"Sign In"**
- **Use GitHub** for easiest setup (recommended)

### **Step 3: Import Your Repository**

You'll see a page titled **"Import Git Repository"**

#### Option A: If You See Your Repo
- Look for **`anshalexander/per-demo`** in the list
- Click **"Import"** next to it
- **Skip to Step 4**

#### Option B: If You DON'T See Your Repo
1. Click **"Adjust GitHub App Permissions"** or **"Configure GitHub App"**
2. A GitHub page will open
3. Find **"Repository access"** section
4. Either:
   - Select **"All repositories"** (easiest), OR
   - Select **"Only select repositories"** and add **`per-demo`**
5. Click **"Save"**
6. Go back to Vercel, refresh the page
7. You should now see **`anshalexander/per-demo`**
8. Click **"Import"**

### **Step 4: Configure Project (Don't Change Anything!)**

You'll see a configuration page:

```
PROJECT NAME: per-demo (or whatever you prefer)
FRAMEWORK PRESET: Other
ROOT DIRECTORY: ./
BUILD COMMAND: (leave empty)
OUTPUT DIRECTORY: (leave empty)
INSTALL COMMAND: (leave empty)
```

**Just click the big "Deploy" button!** 🚀

### **Step 5: Wait for Deployment**

- Vercel will deploy your app (takes 30-60 seconds)
- You'll see a success screen with confetti 🎉
- **Copy your live URL!** (something like `https://per-demo.vercel.app`)

---

## ✅ Verify Everything is Working

### Test 1: Check Your Live Site
1. Open your Vercel URL (from Step 5 above)
2. You should see:
   - ✅ The Love Puzzle title and hearts
   - ✅ Shuffled puzzle pieces with your photo
   - ✅ Timer and move counter
   - ✅ Peek and Shuffle buttons

### Test 2: Test Drag & Drop
1. Try dragging a puzzle piece
2. Drop it on another piece
3. They should swap positions

### Test 3: Verify Auto-Deployment
1. Make a small change to any file (e.g., README.md)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test auto-deploy"
   git push
   ```
3. Go to your Vercel dashboard
4. You should see a new deployment starting automatically!

---

## 🎯 What You Get After Setup:

✅ **Automatic Deployments**: Every `git push` to main = new deployment  
✅ **Live URL**: Shareable link like `https://per-demo.vercel.app`  
✅ **HTTPS**: Automatic SSL certificate  
✅ **Global CDN**: Fast loading worldwide  
✅ **Preview Deployments**: PRs get their own preview URLs  
✅ **Free Forever**: Vercel Hobby plan is completely free  

---

## 🔧 Troubleshooting

### Problem: "No repositories found"
**Solution**: 
1. Go to: https://github.com/settings/installations
2. Find "Vercel" in the list
3. Click "Configure"
4. Give access to `per-demo` repository

### Problem: "Build failed"
**Solution**: Don't worry! Your app is pure HTML/CSS/JS with no build step.
- In Vercel dashboard, go to Project Settings
- Clear any Build Command / Output Directory
- Redeploy

### Problem: "404 on assets"
**Solution**: Already fixed! We removed the `vercel.json` file.
- Just redeploy from Vercel dashboard

### Problem: "Deployment not triggering on git push"
**Solution**:
1. Check webhook: https://github.com/anshalexander/per-demo/settings/hooks
2. You should see a Vercel webhook
3. If not, reconnect via Vercel dashboard

---

## 📱 Share With Your Partner!

Once deployed, your URL will be something like:
```
https://per-demo.vercel.app
```

You can:
1. ✅ Share this URL directly
2. ✅ Set up a custom domain (optional)
3. ✅ Send it in a romantic message 💕

---

## 🎨 Optional: Custom Domain

Want something like `ourpuzzle.com`?

1. Buy a domain (from Namecheap, GoDaddy, etc.)
2. In Vercel dashboard:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow the DNS setup instructions
3. Done! Your puzzle will be on your custom domain

---

## 💡 Pro Tips

1. **Test before sharing**: Make sure everything works on the live URL
2. **Mobile test**: Open on your phone to check mobile experience
3. **Private mode**: Test in incognito to see what your partner will see
4. **Screenshot**: Take a screenshot of the completion message to save!

---

Need help? The deployment should work perfectly following these steps! 💕
