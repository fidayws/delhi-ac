---
description: Repository Information Overview
alwaysApply: true
---

# Delhi AC Services Website Information

## Summary
A React-based website for Delhi AC Services, built with Vite and React Router. The site showcases various home appliance services including AC, water, refrigerator, washing machine, and kitchen appliance services.

## Structure
- **public/**: Static assets and favicon
- **src/**: Source code for the React application
  - **assets/**: Images and other static resources
  - **components/**: Reusable UI components
  - **pages/**: Page components for different routes
    - **services/**: Service-specific page components
  - **App.jsx**: Main application component with routing
  - **main.jsx**: Application entry point

## Language & Runtime
**Language**: JavaScript (React)
**Version**: React 19.1.0
**Build System**: Vite 7.0.4
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react: ^19.1.0
- react-dom: ^19.1.0
- react-router-dom: ^7.7.1
- tailwindcss: ^4.1.11
- @tailwindcss/vite: ^4.1.11
- framer-motion: ^12.23.9
- react-icons: ^5.5.0

**Development Dependencies**:
- @vitejs/plugin-react: ^4.6.0
- eslint: ^9.30.1
- @eslint/js: ^9.30.1
- eslint-plugin-react-hooks: ^5.2.0
- eslint-plugin-react-refresh: ^0.4.20
- @types/react: ^19.1.8
- @types/react-dom: ^19.1.6

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Main Files & Resources
**Entry Point**: src/main.jsx
**Main Component**: src/App.jsx
**Routing**: React Router with routes defined in App.jsx
**Layout**: src/components/Layout.jsx (wrapper component for all pages)
**Key Pages**:
- Home: src/pages/Home.jsx
- About: src/pages/About.jsx
- Contact: src/pages/Contact.jsx
- Services: Multiple service pages in src/pages/services/