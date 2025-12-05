# BoldTribe - Your Vision. Our Code. Boldly Delivered.

A modern, high-performance web application built with React, TypeScript, and Vite.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Documentation

All project documentation is available in the [`docs/`](docs/) folder:

- [Quick Setup Guide](docs/QUICK_SETUP_CARD.md)
- [Google Sheets Integration](docs/GOOGLE_SHEETS_SETUP_STEPS.md)
- [Enquiry Form Setup](docs/ENQUIRY_SETUP_GUIDE.md)
- [WordPress Integration](docs/WORDPRESS_INTEGRATION.md)
- [Performance Optimizations](docs/PERFORMANCE_OPTIMIZATIONS.md)
- [Recent Fixes & Troubleshooting](docs/FIX_APPLIED.md)

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v7
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

## 📁 Project Structure

```
BoldTribe-Web/
├── docs/              # Documentation
├── public/            # Static assets
│   ├── team/         # Team member images
│   └── sw.js         # Service worker (production only)
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── contexts/     # React contexts
│   ├── hooks/        # Custom hooks
│   ├── services/     # API services
│   └── App.tsx       # Main app component
└── dist/             # Production build output
```

## 🌐 Deployment

This project is configured for deployment on Vercel. The configuration is in `vercel.json`.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite and deploy

## 🔧 Development

- **Port**: Development server runs on `http://localhost:5173`
- **Hot Reload**: Enabled with Vite HMR
- **Service Worker**: Automatically disabled in development mode

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

If you encounter issues:

1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear Vite cache: `rm -rf .vite`
3. For service worker issues in dev, visit: `http://localhost:5173/unregister-sw.html`

See [docs/FIX_APPLIED.md](docs/FIX_APPLIED.md) for recent fixes.

## 📄 License

Private - BoldTribe

## 🤝 Contributing

This is a private project. For questions or contributions, contact the BoldTribe team.
