#!/bin/bash

# 🚀 Personal Portfolio Website - GitHub Setup Script
# This script helps you set up your GitHub repository

echo "🚀 Setting up Personal Portfolio Website for GitHub..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_status "Initializing Git repository..."
    git init
    print_success "Git repository initialized"
else
    print_status "Git repository already exists"
fi

# Check if we have a remote origin
if ! git remote get-url origin &> /dev/null; then
    print_warning "No remote origin found. You'll need to add it manually."
    echo ""
    echo "To add your GitHub repository as remote origin, run:"
    echo "git remote add origin https://github.com/trugoJJJ/personal_website_en.git"
    echo ""
else
    print_success "Remote origin already configured"
fi

# Create initial commit if no commits exist
if ! git log --oneline -1 &> /dev/null; then
    print_status "Creating initial commit..."
    git add .
    git commit -m "feat: initial commit - personal portfolio website

- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS styling
- shadcn/ui components
- Framer Motion animations
- Dark/light theme toggle
- Multilingual support
- Portfolio sections
- Responsive design
- SEO optimization"
    print_success "Initial commit created"
else
    print_status "Repository already has commits"
fi

# Show current git status
echo ""
print_status "Current Git status:"
git status --short

echo ""
print_success "Setup complete! Here's what to do next:"
echo ""
    echo "1. Create a new repository on GitHub:"
    echo "   - Go to https://github.com/new"
    echo "   - Repository name: personal_website_en"
    echo "   - Description: Modern personal portfolio website built with Next.js 14"
echo "   - Make it Public or Private (your choice)"
echo "   - Don't initialize with README (we already have one)"
echo ""
    echo "2. Add the remote origin (if not already done):"
    echo "   git remote add origin https://github.com/trugoJJJ/personal_website_en.git"
echo ""
echo "3. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "4. Set up GitHub Pages or deploy to your preferred hosting:"
echo "   - Vercel (recommended for Next.js)"
echo "   - Netlify"
echo "   - Traditional hosting with FTP"
echo ""
echo "5. Configure GitHub Actions (optional):"
echo "   - The workflow file is already created in .github/workflows/"
echo "   - Set up your FTP credentials as GitHub secrets if using FTP deployment"
echo ""
echo "Happy coding! 🚀"
