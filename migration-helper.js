#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Components that need "use client" directive
const clientComponents = [
  'src/components/LanguageSwitch.tsx',
  'src/components/home/hooks.ts',
  'src/components/home/PortfolioSection.tsx',
  'src/components/home/ArticlesSection.tsx',
  'src/components/home/Header.tsx',
  'src/components/home/HeroSection.tsx',
  'src/components/home/SkillsSection.tsx',
  'src/components/home/BigTypeCTA.tsx',
  'src/components/home/ExperienceSection.tsx',
  'src/components/ui/sidebar.tsx',
  'src/components/home/FooterSection.tsx',
  'src/hooks/use-mobile.tsx',
  'src/components/SEO.tsx',
  'src/pages/PortfolioPPC.tsx',
  'src/pages/PortfolioDetail.tsx',
  'src/pages/NotFound.tsx',
  'src/pages/ArticleDetail.tsx',
  'src/pages/ArticlesList.tsx',
  'src/pages/PortfolioMartomSEO.tsx',
  'src/pages/PortfolioPPC.tsx',
  'src/pages/PortfolioMartomAnalytics.tsx',
  'src/pages/PortfolioDetail.tsx'
];

// Components that need react-router to Next.js Link conversion
const routerComponents = [
  'src/pages/NotFound.tsx',
  'src/pages/PortfolioMartomSEO.tsx',
  'src/pages/PortfolioPPC.tsx',
  'src/pages/PortfolioMartomAnalytics.tsx',
  'src/pages/ArticleDetail.tsx',
  'src/pages/ArticlesList.tsx',
  'src/pages/PortfolioDetail.tsx',
  'src/components/home/PortfolioSection.tsx',
  'src/components/home/ArticlesSection.tsx'
];

function addUseClientDirective(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if "use client" is already present
  if (content.includes('"use client"')) {
    console.log(`✓ ${filePath} already has "use client" directive`);
    return;
  }

  // Add "use client" at the top
  const updatedContent = '"use client";\n\n' + content;
  fs.writeFileSync(filePath, updatedContent);
  console.log(`✓ Added "use client" to ${filePath}`);
}

function convertReactRouterToNext(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Replace react-router imports
  if (content.includes('import { Link } from "react-router-dom"')) {
    content = content.replace(
      'import { Link } from "react-router-dom"',
      'import Link from "next/link"'
    );
    updated = true;
  }

  if (content.includes('import { useNavigate } from "react-router-dom"')) {
    content = content.replace(
      'import { useNavigate } from "react-router-dom"',
      'import { useRouter } from "next/navigation"'
    );
    updated = true;
  }

  if (content.includes('import { useLocation } from "react-router-dom"')) {
    content = content.replace(
      'import { useLocation } from "react-router-dom"',
      'import { usePathname } from "next/navigation"'
    );
    updated = true;
  }

  if (content.includes('import { useParams } from "react-router-dom"')) {
    content = content.replace(
      'import { useParams } from "react-router-dom"',
      'import { useParams } from "next/navigation"'
    );
    updated = true;
  }

  // Replace usage
  if (content.includes('useNavigate()')) {
    content = content.replace(/useNavigate\(\)/g, 'useRouter()');
    updated = true;
  }

  if (content.includes('useLocation()')) {
    content = content.replace(/useLocation\(\)/g, 'usePathname()');
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated react-router imports in ${filePath}`);
  }
}

console.log('🚀 Starting Next.js Migration Helper...\n');

console.log('📝 Adding "use client" directive to client-side components:');
clientComponents.forEach(addUseClientDirective);

console.log('\n🔄 Converting react-router to Next.js routing:');
routerComponents.forEach(convertReactRouterToNext);

console.log('\n✅ Migration helper completed!');
console.log('\n📋 Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Test all routes and functionality');
console.log('4. Check for any console errors');
console.log('5. Follow the MIGRATION_CHECKLIST.md for verification');
