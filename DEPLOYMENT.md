# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

1. **GitHub Account** - Make sure you have a GitHub account
2. **Git** - Install Git on your local machine
3. **Portfolio Files** - All your HTML, CSS, and image files are ready

## 🔧 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `portfolio` (or your preferred name)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Upload Your Portfolio Files

#### Option A: Using GitHub Desktop (Recommended for beginners)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Clone your repository to your local machine
3. Copy all your portfolio files into the repository folder
4. Commit and push the changes

#### Option B: Using Command Line

```bash
# Navigate to your portfolio directory
cd /path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The GitHub Actions workflow will automatically deploy your site

### Step 4: Configure Custom Domain (Optional)

If you want to use a custom domain (e.g., `yourname.com`):

1. In the Pages settings, enter your domain in the **Custom domain** field
2. Click **Save**
3. Add a `CNAME` file to your repository with your domain name
4. Configure your DNS provider to point to GitHub Pages

## 🌐 Your Portfolio URL

Your portfolio will be available at:
- `https://YOUR_USERNAME.github.io/portfolio/`

## 🔄 Updating Your Portfolio

### Using GitHub Desktop:
1. Make changes to your files
2. Commit and push the changes
3. GitHub Actions will automatically redeploy

### Using Command Line:
```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update portfolio content"
git push
```

## 🧪 Local Development

Before pushing changes, test locally:

```bash
# Using Python (recommended)
python dev-server.py

# Or using Python's built-in server
python -m http.server 8000

# Or using Node.js (if you have it installed)
npx serve .
```

## 📁 File Structure for GitHub Pages

Your repository should look like this:
```
portfolio/
├── index.html
├── about.html
├── projects.html
├── blog.html
├── blog-ubuntu-cis-hardening.html
├── blog-linux-patching.html
├── skills.html
├── Latesh Photo.jpg
├── Latesh Photo.-2jpg.jpg
├── .github/workflows/deploy.yml
├── README.md
├── .gitignore
├── dev-server.py
└── DEPLOYMENT.md
```

## 🔍 Troubleshooting

### Common Issues:

1. **Page not found (404)**
   - Make sure your main file is named `index.html`
   - Check that all file paths are correct
   - Ensure the repository is public

2. **Images not loading**
   - Check image file paths
   - Make sure image files are committed to the repository
   - Use relative paths (e.g., `./image.jpg`)

3. **Styling not working**
   - Check that CSS files are properly linked
   - Verify CDN links are accessible
   - Check browser console for errors

4. **GitHub Actions failing**
   - Check the Actions tab in your repository
   - Review the workflow logs for errors
   - Ensure the workflow file is in the correct location

### Getting Help:

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Community](https://github.community/)

## 🎉 Success!

Once deployed, your portfolio will be:
- ✅ Accessible worldwide
- ✅ Automatically updated when you push changes
- ✅ Free hosting
- ✅ Custom domain support (optional)
- ✅ SSL certificate included

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review GitHub Pages documentation
3. Check your repository's Actions tab for deployment logs
4. Contact GitHub support if needed

---

**Happy deploying! 🚀** 