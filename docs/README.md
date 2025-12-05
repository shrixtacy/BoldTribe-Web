# BoldTribe Documentation

Welcome to the BoldTribe project documentation. This folder contains all setup guides, integration docs, and troubleshooting information.

> 💡 **Quick Navigation**: See [INDEX.md](INDEX.md) for quick links or [DOCUMENTATION_STRUCTURE.md](DOCUMENTATION_STRUCTURE.md) for detailed organization.

## 📚 Documentation Index

### Setup Guides
- **[Quick Setup Card](QUICK_SETUP_CARD.md)** - Quick reference for project setup
- **[Google Sheets Setup](GOOGLE_SHEETS_SETUP_STEPS.md)** - Configure Google Sheets integration
- **[Enquiry Setup Guide](ENQUIRY_SETUP_GUIDE.md)** - Set up the contact form and enquiry system

### Integration Guides
- **[WordPress Integration](WORDPRESS_INTEGRATION.md)** - Integrate with WordPress sites
- **[Google Apps Script Template](../google-apps-script-template.js)** - Script template for Google Sheets

### Performance & Optimization
- **[Performance Optimizations](PERFORMANCE_OPTIMIZATIONS.md)** - Performance tips and best practices

### Troubleshooting
- **[Fix Applied](FIX_APPLIED.md)** - Recent fixes for blank page and service worker issues

## 🚀 Quick Start

1. Follow the [Quick Setup Card](QUICK_SETUP_CARD.md) for initial setup
2. Configure your [Google Sheets](GOOGLE_SHEETS_SETUP_STEPS.md) for form submissions
3. Review [Performance Optimizations](PERFORMANCE_OPTIMIZATIONS.md) for production deployment

## 🔧 Development

- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Lint**: `npm run lint`

## 📦 Project Structure

```
BoldTribe-Web/
├── docs/              # Documentation (you are here)
├── public/            # Static assets
├── src/               # Source code
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── hooks/         # Custom hooks
│   └── services/      # API services
└── dist/              # Production build
```

## 🌐 Deployment

The project is configured for Vercel deployment. See [vercel.json](../vercel.json) for configuration.

## 📝 Notes

- Service worker only runs in production mode
- All documentation is in Markdown format
- Check individual guides for detailed instructions
