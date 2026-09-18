## Project Overview

**Local Network** is a dual-interface web application built for a modern local Internet Service Provider (ISP). Designed in **Figma** and developed using **React**, **TypeScript**, and **Vanilla CSS**, the platform combines a public-facing marketing interface with a private, feature-rich customer portal.

Having a dedicated web platform gives the business an established, professional online presence—making referrals seamless and transparent without relying on unverified phone numbers or word-of-mouth contact details.

---

## ⚡ Key Features

### 1. Public Landing Page (Pre-Authentication)
* **Brand & Marketing Presence:** Clean, modern UI designed to showcase network capabilities, reliability, and local infrastructure.
* **Interactive Hero Carousel:** Displays featured promotions, high-speed fiber banners, and business highlights.
* **Pricing & Fiber Packages:** Transparent package cards listing speeds, monthly rates, and subscription perks.
* **Coverage & Contact Info:** Interactive coverage checker and direct contact forms for new connection requests.
* **Authentication Portal:** Integrated Sign In / Log In entry points leading to the customer dashboard.

### 2. Interactive Customer Portal (Post-Authentication)
Once signed in, customers access a personalized, single-page portal designed for self-service and field support:

* **Real-time Network Dashboard:**
  * **Connected Devices:** View and monitor active devices currently connected to the home router.
  * **Active Plan Status:** Track current bandwidth speeds, subscription duration, and billing cycle countdowns.
  * **Billing & Payments:** Flexible payment methods for instant online renewals and tier upgrades.

* **Field Support & Smart Ticketing System:**
  * **Router Diagnostics & Visuals:** Attach photos of router indicator lights or cabling setups directly when submitting support tickets.
  * **Live GPS Location Sharing:** Embed precise location coordinates to eliminate the need for technicians to make repeated calls, search for house numbers, or trace physical fiber drops manually.



isp-customer-page/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Logos, icons, and static images
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation header with mobile toggle
│   │   ├── Footer.tsx       # Global footer container
│   │   └── ui/              # Reusable design system elements
│   │       ├── Button.tsx   # Configurable button (primary, outlined, pill)
│   │       └── Card.tsx     # Generic card wrapper component
│   ├── features/
│   │   └── landing/         # Landing page feature modules
│   │       ├── Carousel.tsx # Dynamic hero banner carousel
│   │       ├── Packages.tsx # Pricing plans and subscription cards
│   │       └── slidesData.json # Hero carousel content configuration
│   ├── styles/              # Vanilla CSS stylesheets
│   │   ├── Carousel.css
│   │   ├── Navbar.css
│   │   ├── Packages.css
│   │   └── index.css        # Global CSS reset and dark theme rules
│   ├── App.tsx              # Main application layout
│   └── main.tsx             # React DOM entry point
├── index.html               # Main HTML document template
├── package.json             # NPM dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration

# Create project using the React-TS template
npm create vite@latest 

# Navigate into project directory
Eslint
TypeScript + React Compiler

# Install dependencies
npm install

# To View
npm run dev

# Type-check and build production bundle
npm run build

# Preview production build locally
npm run preview