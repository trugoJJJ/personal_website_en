# 🤝 Contributing to Personal Portfolio Website

Thank you for your interest in contributing to this project! While this is primarily a personal portfolio website, I welcome suggestions, bug reports, and improvements.

## 🚀 How to Contribute

### 🐛 Reporting Bugs

1. **Check existing issues** - Search through existing issues to see if your bug has already been reported
2. **Create a new issue** - Use the bug report template and provide:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/device information
   - Screenshots if applicable

### 💡 Suggesting Features

1. **Check existing feature requests** - Search through existing issues
2. **Create a new issue** - Use the feature request template and describe:
   - What you'd like to see
   - Why this would be useful
   - Any mockups or examples

### 🔧 Code Contributions

1. **Fork the repository**
2. **Create a feature branch** - `git checkout -b feature/amazing-feature`
3. **Make your changes** - Follow the coding standards below
4. **Test your changes** - Ensure everything works as expected
5. **Commit your changes** - Use conventional commit messages
6. **Push to your branch** - `git push origin feature/amazing-feature`
7. **Open a Pull Request** - Provide clear description of changes

## 📋 Development Guidelines

### Code Style

- **TypeScript** - Use strict typing, avoid `any`
- **React** - Use functional components with hooks
- **CSS** - Use Tailwind CSS classes, avoid custom CSS when possible
- **Naming** - Use descriptive names for variables, functions, and components

### File Structure

- Keep components small and focused
- Use consistent file naming (PascalCase for components, camelCase for utilities)
- Group related components in appropriate directories
- Export components from index files for clean imports

### Performance

- Use React.memo() for expensive components
- Implement proper loading states
- Optimize images and assets
- Use Next.js Image component for images

### Accessibility

- Ensure proper semantic HTML
- Add ARIA labels where needed
- Maintain keyboard navigation
- Test with screen readers

## 🧪 Testing

Before submitting changes:

1. **Run the development server** - `npm run dev`
2. **Test on different devices** - Mobile, tablet, desktop
3. **Check browser compatibility** - Chrome, Firefox, Safari, Edge
4. **Validate accessibility** - Use browser dev tools
5. **Run linting** - `npm run lint`
6. **Build the project** - `npm run build`

## 📝 Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes
- `refactor` - Code refactoring
- `test` - Adding tests
- `chore` - Maintenance tasks

Examples:
```
feat(portfolio): add new project showcase section
fix(header): resolve mobile navigation menu issue
docs(readme): update installation instructions
```

## 🔒 Security

- Never commit sensitive information (API keys, passwords)
- Use environment variables for configuration
- Validate user inputs
- Keep dependencies updated

## 📞 Questions?

If you have questions about contributing:

1. **Check the documentation** - README.md and other docs
2. **Search existing issues** - Your question might already be answered
3. **Open a discussion** - Use GitHub Discussions for general questions
4. **Contact me directly** - For urgent or private matters

## 🙏 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributor hall of fame (if applicable)

Thank you for contributing to making this portfolio website better! 🎉
