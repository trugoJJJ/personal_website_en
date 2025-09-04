# 🚀 Project Setup Guide

This guide will help you set up the Personal Portfolio Website project on your local machine and deploy it to production.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- **Code editor** (VS Code recommended)

### Installing Prerequisites

#### Node.js
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version (18.x or higher)
3. Run the installer and follow the setup wizard
4. Verify installation: `node --version` and `npm --version`

#### Git
1. Visit [git-scm.com](https://git-scm.com/)
2. Download for your operating system
3. Install with default settings
4. Verify installation: `git --version`

## 🏗️ Local Development Setup

### 1. Clone the Repository

   ```bash
   # Clone the repository
   git clone https://github.com/trugoJJJ/personal_website_en.git
   
   # Navigate to project directory
   cd personal_website_en
   ```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit the file with your configuration
nano .env.local
```

**Required Environment Variables:**
```env
# App Configuration
NEXT_PUBLIC_APP_NAME="Personal Portfolio"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID="your-google-analytics-id"
NEXT_PUBLIC_GTM_ID="your-google-tag-manager-id"

# Contact Form (Optional)
CONTACT_EMAIL="your-email@example.com"
```

### 4. Start Development Server

```bash
# Start development server
npm run dev

# Or using yarn
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 5. Build and Test

```bash
# Build the project
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🌐 Production Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name
   - Confirm deployment settings

4. **Automatic deployments** will occur on every push to main branch

### Option 2: Netlify

1. **Connect your GitHub repository** to Netlify
2. **Set build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`

3. **Deploy automatically** on every push

### Option 3: Traditional Hosting (FTP)

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload files** from the `out` directory to your web server
3. **Configure your web server** to serve the static files

### Option 4: Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

## 🔧 Configuration

### Next.js Configuration

Edit `next.config.js` for custom settings:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Tailwind CSS Configuration

Customize `tailwind.config.ts` for your design system:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
      fonts: {
        // Your custom fonts
      }
    },
  },
  plugins: [],
}

export default config
```

## 📱 Customization

### Content Updates

1. **Portfolio Projects**: Edit `src/data/portfolio.ts`
2. **Personal Information**: Update `src/components/home/AboutSection.tsx`
3. **Skills**: Modify `src/components/home/SkillsSection.tsx`
4. **Experience**: Edit `src/components/home/ExperienceSection.tsx`

### Styling Changes

1. **Colors**: Update `tailwind.config.ts`
2. **Components**: Modify files in `src/components/ui/`
3. **Global Styles**: Edit `src/app/globals.css`

### Adding New Sections

1. Create new component in appropriate directory
2. Add to main page in `src/app/page.tsx`
3. Update navigation if needed
4. Add responsive styles

## 🧪 Testing

### Manual Testing

1. **Cross-browser testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

2. **Responsive testing**
   - Desktop (1920x1080)
   - Tablet (768x1024)
   - Mobile (375x667)

3. **Performance testing**
   - Lighthouse audit
   - PageSpeed Insights
   - WebPageTest

### Automated Testing

```bash
# Run linting
npm run lint

# Check TypeScript types
npx tsc --noEmit

# Build test
npm run build
```

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Dependencies issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Check TypeScript errors
   npx tsc --noEmit
   
   # Clear Next.js cache
   rm -rf .next
   ```

### Performance Issues

1. **Large bundle size**
   - Use dynamic imports for heavy components
   - Optimize images with Next.js Image component
   - Implement code splitting

2. **Slow loading**
   - Enable compression on your server
   - Use CDN for static assets
   - Implement lazy loading

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Support

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/trugoJJJ/personal-portfolio/issues)
2. Search existing discussions
3. Create a new issue with detailed information
4. Contact the maintainer directly

---

**Happy coding! 🚀**
