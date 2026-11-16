# Savoria Bistro & Lounge — Responsive React JS Web Application

> **Course:** React JS Web Development Project Assignment  
> **Institution:** New Horizon  
> **Final Submission Deadline:** 13 November 2026  
> **Submission Method:** Google Form  
> **Version Control:** Git & GitHub  
> **Deployment Platforms:** Vercel / Netlify / Render  

---

## 🍽️ 1. Project Overview

**Savoria Bistro & Lounge** is an elegant, modern, and fully responsive restaurant web application designed and built with **React JS**, **React Router v7**, and **Lucide React**.

The application models a premier culinary restaurant and online food ordering destination. It showcases the restaurant's identity, culinary philosophy, master chefs, an interactive seasonal menu with real-time search, category filtering, price sorting, a persistent shopping cart with live price calculations, and an interactive table reservation and guest inquiry system with rigorous validation.

---

## 🚀 2. Application Architecture & Pages

The application satisfies and exceeds all assignment requirements across the required pages and sections:

### A. Home Page (`/`)
* **Brand Identity & Welcome:** Introduces *Savoria Bistro & Lounge* with a hero banner, custom branding, and sensory culinary messaging.
* **Interactive Elements:**
  * **Chef's Daily Featured Specials Showcase:** Interactive dish cards allowing users to view daily highlights and add them directly to their order.
  * **Interactive Table Booking Launcher:** Quick modal trigger for instant party reservations.
  * **Customer Testimonials & Ratings:** Verified critic and diner reviews with 5-star rating badges.
  * **Live Gastronomy Stats Strip:** Highlights years of service, Michelin guide selections, delighted guests, and farm freshness.
* **Navigation:** Clear calls-to-action directing visitors seamlessly to the Menu, About, and Contact pages.

### B. About Page (`/about`)
* **Heritage & Story:** Narrative tracing the restaurant's beginnings in 2018 with milestone markers (2018, 2021, 2024).
* **Mission, Vision & Objectives:** Structured cards presenting Savoria’s culinary pillars: *Farm-to-Table Purity*, *Culinary Craftsmanship*, *Heartfelt Hospitality*, and *Eco-Conscious Ethics*.
* **Interactive 4 Pillars of Gastronomy Tabs:** Interactive tabbed component allowing guests to explore Sourcing, Kitchen Techniques, Wine Cellar, and Zero Waste commitments with dynamic state switching.
* **Executive Culinary Team Showcase:** Reusable `ChefCard` presentations for Executive Chef Marco Rossi, Pastry Chef Sophie Laurent, and Master Sommelier David Chen.

### C. Services & Menu Ordering Page (`/menu`)
* **Comprehensive Catalog:** Over 12 artisanal culinary creations spanning Appetizers & Starters, Main Courses, Chef's Specials, Artisan Desserts, and Drinks.
* **Descriptions, Pricing, and Imagery:** High-resolution food photography, dietary tags (Vegetarian, Gluten-Free, Seafood, Spicy), caloric info, and preparation times.
* **Reusable Component Architecture:** Built using modular `DishCard` components and array `.map()` iterations.
* **Advanced Interactive Features (Assignment Bonus Challenges):**
  * **Live Search:** Instant fuzzy search across dish names, ingredients, and dietary tags.
  * **Category Filtering:** Filter pills for *All Items*, *Appetizers*, *Mains*, *Chef's Specials*, *Desserts*, and *Beverages*.
  * **Sorting:** Dynamic sorting by Featured, Price (Low to High), Price (High to Low), and Rating.
  * **Shopping Cart Drawer:** Slide-out drawer displaying item quantity counters (`+` / `-`), item totals, subtotal, sales tax (8.875%), free delivery progress bar, and checkout simulation with an order tracking code (`SAV-XXXXXX`).
  * **Local Storage Persistence:** Cart data persists across browser reloads using `localStorage` and `useEffect`.

### D. Contact & Reservation Page (`/contact`)
* **Comprehensive Contact Details:** Physical address (*142 Artisan Boulevard, NY*), direct phone, reservation email, and service hours.
* **Interactive Location Card:** Styled interactive map preview with location perks and Google Maps link.
* **Controlled React Contact Form:**
  * Fields: Full Name, Email Address, Phone Number, Subject selection, and Message.
  * **Strict Validation:** Required field checks, regex email validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), and minimum length constraints.
  * **Live Feedback:** Real-time visual error cues beneath invalid fields.
  * **Submission State:** Simulated ticket generation card displaying ticket reference (`TKT-XXXXXX`), timestamp, and reset capability.
* **Interactive FAQ Accordion:** Expandable/collapsible answers for common reservation and dietary inquiries.

---

## 💻 3. React Concepts & Technical Implementation

| React Concept | Where & How It Is Implemented |
| :--- | :--- |
| **Functional Components** | Used 100% throughout the application with standard ES6 syntax and clean imports/exports. |
| **JSX** | Semantic HTML5 (`header`, `main`, `section`, `nav`, `footer`), JavaScript expressions `{...}`, and strict `className` conventions. |
| **Props** | Reusable components (`DishCard`, `CartDrawer`, `ReservationModal`) receive dish objects, callbacks, and configuration props from parents. |
| **`useState` Hook** | Manages cart drawer state, mobile menu toggle, active category filter, search query, sort order, controlled inputs, and validation errors. |
| **`useEffect` Hook** | Synchronizes cart items with `localStorage`, coordinates auto-dismissing toast notifications, and resets window scroll position on route change via `ScrollToTop`. |
| **`useContext` Hook** | Centralized `CartContext` providing global cart management and table reservation modal access without prop drilling. |
| **Array Methods** | Extensive use of `.map()` for rendering repeating cards, `.filter()` for search and categories, `.sort()` for pricing, and `.reduce()` for totals. |
| **Event Handling** | `onClick`, `onChange`, `onSubmit`, `onKeyDown`, and custom form handlers with `e.preventDefault()`. |
| **React Router v7** | Multi-page Single Page Application (SPA) routing with `BrowserRouter`, `Routes`, `Route`, `NavLink` with active states, and 404 fallback. |
| **Responsive CSS** | CSS custom properties (variables), Flexbox, CSS Grid layouts, media queries for mobile, tablet, and desktop without horizontal overflow. |

---

## 📁 4. Project Directory Structure

```text
savoria-restaurant-app/
├── public/                     # Static assets and favicon
├── src/
│   ├── assets/                 # Icons and media
│   ├── components/             # Reusable UI components
│   │   ├── CartDrawer.jsx      # Slide-out shopping cart & checkout simulation
│   │   ├── DishCard.jsx        # Reusable dish card with tags & add-to-order
│   │   ├── Footer.jsx          # Footer with hours, links & newsletter form
│   │   ├── Navbar.jsx          # Header with logo, nav links & cart counter
│   │   ├── ReservationModal.jsx# Interactive table booking modal & validation
│   │   ├── ScrollToTop.jsx     # Scrolls viewport to top on route change
│   │   └── Toast.jsx           # Floating notification toast for user feedback
│   ├── context/
│   │   └── CartContext.jsx     # Global cart state & localStorage sync
│   ├── data/
│   │   ├── menuData.js         # Menu catalog with 13 dishes & categories
│   │   └── restaurantData.js   # Bio, chefs, testimonials, hours & FAQs
│   ├── pages/
│   │   ├── AboutPage.jsx       # Story, mission, vision, tabs & chefs
│   │   ├── ContactPage.jsx     # Contact info, map, form & FAQ accordion
│   │   ├── HomePage.jsx        # Hero, specials, stats & testimonials
│   │   ├── MenuPage.jsx        # Menu catalog with search, filter & sort
│   │   └── NotFoundPage.jsx    # 404 error page
│   ├── App.jsx                 # Route definitions and layout assembly
│   ├── index.css               # Main CSS design system and responsive rules
│   └── main.jsx                # Application root with BrowserRouter
├── .gitignore                  # Excludes node_modules, dist, logs
├── index.html                  # HTML template with Google Fonts
├── package.json                # Project dependencies and npm scripts
└── README.md                   # Complete documentation
```

---

## 🛠️ 5. Local Installation & Setup Instructions

Follow these steps to run the application on your computer:

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (included with Node.js)

### Step 1: Clone or Download the Repository
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd savoria-restaurant-app
```

### Step 2: Install Project Dependencies
Run the following command in your terminal to install all required libraries:
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```

The terminal will display a local address (typically `http://localhost:5173/`). Open this URL in your web browser to view and interact with the application.

### Step 4: Build for Production
To create an optimized production build:
```bash
npm run build
```
The compiled files will be generated in the `dist/` directory.

---

## 📦 6. Git & GitHub Submission Guidelines

> **IMPORTANT:** As stipulated in the project instructions, **never upload the `node_modules` folder to GitHub**.

### Verifying `.gitignore`
Confirm that `node_modules/` and `dist/` are included in your `.gitignore` file before committing:
```gitignore
node_modules
dist
dist-ssr
*.local
```

### Pushing Code to Your GitHub Repository
1. Initialise git (if not already done):
   ```bash
   git init
   ```
2. Stage all project source files:
   ```bash
   git add .
   ```
3. Commit the project:
   ```bash
   git commit -m "Complete Savoria Bistro React Web Application"
   ```
4. Connect to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/savoria-restaurant-app.git
   git branch -M main
   git push -u origin main
   ```
5. Confirm on your GitHub repository page that only `src/`, `public/`, `package.json`, `README.md`, etc., are visible, and `node_modules/` is **not** present.

---

## 🌐 7. Deployment Instructions (Live Hosting)

Your assignment requires a publicly accessible live URL. You can deploy this project free of charge in just a few minutes using any of the following platforms:

### Option A: Deploying on Vercel (Recommended)
1. Visit [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New Project"** and select **"Import Git Repository"**.
3. Select your `savoria-restaurant-app` repository.
4. Framework Preset: **Vite**.
5. Click **"Deploy"**. Vercel will automatically build and deploy your application with a live `.vercel.app` URL.

### Option B: Deploying on Netlify
1. Visit [netlify.com](https://www.netlify.com/) and sign in with GitHub.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select GitHub and choose your project repository.
4. Set Build command: `npm run build` and Publish directory: `dist`.
5. Click **"Deploy site"** to receive your live `.netlify.app` URL.

---

## 📋 8. Google Form Submission Checklist

Before submitting your final Google Form on or before **13 November 2026**, ensure you have:
* [x] Complete project source code pushed to a public GitHub repository.
* [x] Verified that `node_modules/` is **not** in the GitHub repository.
* [x] Published the project to Vercel, Netlify, or Render with a public live URL.
* [x] Tested all 4 pages (Home, About, Menu, Contact) on both desktop and mobile viewports.
* [x] Tested the interactive cart, search, filter, and reservation form validation.
* [x] Verified your matriculation details, department, and GitHub repository URL ready for the form.
