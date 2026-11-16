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

