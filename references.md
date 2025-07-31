# Cantor College Website - Project Files Documentation & References

## Project Overview

This project comprises a static HTML website for Cantor College with a companion Next.js application featuring dynamic course management. The website implements web standards with responsive design, accessibility features, and performance optimisations.

---

## Main Project Files Analysis

### HTML Files (located in `website_code/components/`)

#### 1. `homepage.html` - Homepage (formerly index.html)
**Function:** Main landing page for Cantor College website
- **Key Features:**
  - Hero section with background image and call-to-action
  - Image slideshow with automatic rotation and manual controls
  - About section with college information
  - Course overview sections for Computing and Design
  - Contact form with validation
  - Location information with contact details
- **HTML Elements Used:**
  - Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
  - ARIA roles and properties for accessibility
  - Form elements with validation attributes
  - Image optimisation attributes (`loading="lazy"`, `decoding="async"`)
  - Meta tags for SEO and viewport configuration
- **File Location:** `website_code/components/homepage.html`

#### 2. `courses.html` - Course Information
**Function:** Displays detailed course information for Computing and Design programmes
- Static course listings with descriptions
- Course categories and requirements
- Academic pathways and career outcomes
- **File Location:** `website_code/components/courses.html`

#### 3. `facilities.html` - Campus Facilities
**Function:** Presents college facilities and infrastructure
- Facility galleries
- Laboratory descriptions
- Campus amenities overview
- **File Location:** `website_code/components/facilities.html`

#### 4. `resources.html` - Learning Resources
**Function:** Information about library and digital resources
- Library services and access
- Digital databases and tools
- Study spaces and support services
- **File Location:** `website_code/components/resources.html`

#### 5. `staff-info.html` - Staff Information
**Function:** Staff profiles and contact information
- Faculty directories
- Department contacts
- Office hours and availability
- **File Location:** `website_code/components/staff-info.html`

#### 6. `student-info.html` - Student Services
**Function:** Student support services and campus life
- Student services overview
- Campus accommodation information
- Student activities and societies
- **File Location:** `website_code/components/student-info.html`

#### 7. `business.html` - Business Partnerships
**Function:** Information for business collaboration
- Partnership opportunities
- Services
- Industry connections
- **File Location:** `website_code/components/business.html`

#### 8. `contact-us.html` - Contact Information
**Function:** Contact forms and location details
- Contact methods
- Contact forms
- Campus location and directions
- **File Location:** `website_code/components/contact-us.html`

### CSS Files (located in `styles/`)

#### 1. `styles/mobile.css` - Mobile-First Responsive Styles
**Function:** Primary stylesheet implementing mobile-first responsive design
- **Key Features:**
  - CSS Reset and base styles
  - Mobile navigation with hamburger menu
  - Responsive typography and spacing
  - Card-based layouts
  - CSS Grid and Flexbox layouts
  - Smooth animations and transitions
  - Colour scheme using CSS custom properties
- **CSS Techniques:**
  - CSS Grid for complex layouts
  - Flexbox for alignment
  - CSS transitions and animations
  - Media queries for responsive design
  - CSS custom properties (variables)

#### 2. `styles/desktop.css` - Desktop Enhancement Styles
**Function:** Progressive enhancement for larger screens
- **Key Features:**
  - Desktop navigation layout
  - Multi-column layouts
  - Enhanced hover effects
  - Larger typography and spacing
  - Print styles for accessibility
- **Advanced Features:**
  - CSS Grid layouts
  - Enhanced animations for desktop
  - Form layouts
  - Accessibility considerations

### JavaScript Files

#### 1. `js/main.js` - Interactive Functionality
**Function:** Core interactive features for the website
- **Key Features:**
  - Hamburger menu toggle functionality
  - Image slideshow with automatic rotation
  - DOM manipulation for dynamic content
  - Event handling for user interactions
- **JavaScript Concepts:**
  - IIFE (Immediately Invoked Function Expression)
  - Event listeners and DOM manipulation
  - Conditional logic and error handling
  - Timer functions (setInterval)
  - JavaScript best practices

---

## Next.js Application Structure

### Core Files

#### 1. `cantor-college-nextjs/src/app/layout.js` - Root Layout
**Function:** Main layout component for Next.js App Router
- Font loading with Next.js localFont
- Global CSS imports
- Metadata configuration
- Root HTML structure

#### 2. `cantor-college-nextjs/src/app/page.js` - Home Page
**Function:** Next.js homepage component
- React component structure
- Next.js Image optimisation
- React patterns

#### 3. `cantor-college-nextjs/pages/courses.js` - Dynamic Courses Page
**Function:** Server-side rendered courses page with database integration
- MySQL database connection
- Server-side data fetching
- Dynamic course table generation
- Responsive table design

#### 4. `database/db.js` - Database Connection
**Function:** MySQL database configuration and connection
- MySQL2 library implementation
- Connection pooling
- Error handling
- Database query examples

#### 5. `database/courseinfo.sql` - Course Data SQL Script
**Function:** Complete SQL script with all 24 courses from Excel data
- Database schema creation
- All 24 courses with complete data
- Course statistics and verification queries
- Proper SQL formatting and comments

#### 5. `cantor-college-nextjs/package.json` - Project Configuration
**Function:** Node.js project configuration
- Dependencies: Next.js 15.0.3, React 19 RC, MySQL2
- Build scripts and development commands
- ESLint configuration

### API Routes

#### 1. `cantor-college-nextjs/pages/api/courses.js` - Courses API
**Function:** RESTful API endpoint for course data
- **Key Features:**
  - GET endpoint for fetching all courses from MySQL database
  - POST endpoint for adding new courses
  - JSON response formatting with proper HTTP status codes
  - Error handling and logging
  - ES6 import statements for module consistency
- **Technical Implementation:**
  - Uses ES6 `import` syntax for database connection
  - Proper async/await database queries
  - Response validation and error catching
  - API performance logging (sub-200ms response times)

#### 2. `database/db.js` - Database Connection
**Function:** MySQL database connection configuration
- **Key Features:**
  - MySQL2 driver configuration
  - Connection parameters for local development
  - Connection testing with initial data verification
  - ES6 module export for compatibility
- **Technical Implementation:**
  - ES6 `import/export` module system
  - Connection pooling for performance
  - Initial database verification queries
  - Error handling for connection failures

---

## Image Assets & Media Organisation

### Image Asset Management
All project images are organised within the `website_code/used-images/` directory for optimal asset management and performance.

#### Image Directory Structure
**Location:** `website_code/used-images/`
**Purpose:** Centralised media storage for consistent reference and optimisation

#### Image Inventory & Usage Analysis
The project contains **26 image files** totalling **48.2 MB**. All images are actively utilised across the website components:

##### Campus & Facility Images (15 files)
- **Cantor atrium 3.jpg** - Used in facilities.html for main atrium showcase
- **Cantor atrium 4.jpg** - Secondary atrium view in facilities.html
- **cantor-gallery.jpg** - Gallery section in resources.html
- **Cantor4.jpg** - Campus overview in homepage.html slideshow
- **CantorLectureTheatre11.jpg** - Lecture facilities in facilities.html
- **CantorLectureTheatre4.JPG** - Academic spaces showcase
- **CantorLectureTheatre5.JPG** - Theatre facilities documentation
- **DSCF5127.jpg** - Campus environments in homepage slideshow
- **872SHUSpaceCitymap.jpg** - Location and campus mapping in contact-us.html

##### Computing Lab Images (2 files)
- **ACES-032-Computing-Playstation-Lab.jpg** - Gaming/computing facilities in courses.html
- **ACES-036-Computing-Playstation-Lab-2.jpg** - Extended lab view for course information

##### Student Life & Facilities (9 files)
- **IMG_0170.jpeg** through **IMG_1809.jpeg** - Student life documentation
- Various facility and campus environment images used throughout components
- Systematic naming convention for content management

##### Branding & Identity (1 file)
- **resized-logo.png** - Optimised college logo (PNG format for transparency)
- Used in header navigation across all HTML components

#### Image Optimisation Standards
- **Format Guidelines:** JPEG for photography, PNG for logos/graphics with transparency
- **Loading Strategy:** Lazy loading implemented (`loading="lazy"`) for performance
- **Accessibility:** Alt text provided for all images following WCAG 2.2 guidelines
- **Performance:** Images sized appropriately for web delivery
- **File Organisation:** Centralised storage prevents duplication and maintains consistency

#### Usage Implementation
All images are referenced using relative paths from component files:
```html
<img src="../../used-images/[filename]" alt="descriptive text" loading="lazy">
```

#### Asset Efficiency Analysis
- **100% Asset Utilisation:** All 26 images in the directory are actively used
- **No Redundant Files:** Clean asset management with no unused media
- **Optimised References:** Consistent relative pathing from components directory
- **Performance Conscious:** Lazy loading and appropriate file formats implemented

---

## HTML Documentation References

### Core HTML Elements
- **HTML5 Semantic Elements:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- **HTML Living Standard:** https://html.spec.whatwg.org/
- **HTML Document Structure:** https://html.spec.whatwg.org/multipage/dom.html#documents
- **HTML Forms:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- **HTML Accessibility:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- **HTML Best Practices:** https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML

### HTML Features Used in Project
- **Meta Tags:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
- **Link Preloading:** https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload
- **Image Optimisation:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading
- **Responsive Images:** https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- **Form Validation:** https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- **ARIA Roles:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
- **ARIA Properties:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
- **Semantic HTML:** https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements
- **HTML Performance:** https://developer.mozilla.org/en-US/docs/Learn/Performance/HTML
- **Resource Hints:** https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#resource_hints

---

## CSS Documentation References

### Core CSS Concepts
- **CSS Specifications:** https://www.w3.org/TR/css-2024/
- **CSS Working Group:** https://www.w3.org/Style/CSS/
- **CSS Grid Layout:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- **CSS Flexbox:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
- **CSS Cascade and Inheritance:** https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade
- **CSS Selectors:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors

### Responsive Design & Layout
- **Media Queries:** https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries
- **Responsive Design:** https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- **Container Queries:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
- **Viewport Meta Tag:** https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag
- **CSS Logical Properties:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values

### Advanced CSS Features
- **CSS Custom Properties:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- **CSS Animations:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations
- **CSS Transitions:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions
- **CSS Box Model:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model
- **CSS Performance:** https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS
- **CSS Houdini:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Houdini

### CSS Methodologies & Architecture
- **BEM Methodology:** https://en.bem.info/methodology/
- **CSS Architecture:** https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing
- **ITCSS:** https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
- **CSS Modules:** https://github.com/css-modules/css-modules

---

## JavaScript Documentation References

## JavaScript Documentation References

### Core JavaScript
- **JavaScript Language Reference:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- **ECMAScript 2024:** https://tc39.es/ecma262/
- **JavaScript Features:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- **JavaScript Modules:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- **JavaScript Classes:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

### DOM Manipulation & Web APIs
- **DOM API:** https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- **Event Handling:** https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- **Element API:** https://developer.mozilla.org/en-US/docs/Web/API/Element
- **Document API:** https://developer.mozilla.org/en-US/docs/Web/API/Document
- **Fetch API:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **Web APIs:** https://developer.mozilla.org/en-US/docs/Web/API

### JavaScript Features Used in Project
- **IIFE Pattern:** https://developer.mozilla.org/en-US/docs/Glossary/IIFE
- **Arrow Functions:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- **Array Methods:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- **String Methods:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- **Timer Functions:** https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
- **Async/Await:** https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
- **Promises:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

### JavaScript Best Practices & Performance
- **JavaScript Best Practices:** https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
- **Error Handling:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
- **JavaScript Performance:** https://developer.mozilla.org/en-US/docs/Learn/Performance
- **Modern JavaScript:** https://javascript.info/
- **ES6+ Features:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript

---

## React & Next.js Documentation References

### React
- **React Documentation:** https://react.dev/
- **React Components:** https://react.dev/learn/your-first-component
- **React Hooks:** https://react.dev/reference/react

### Next.js
- **Next.js Documentation:** https://nextjs.org/docs
- **App Router:** https://nextjs.org/docs/app
- **Pages Router:** https://nextjs.org/docs/pages
- **Next.js Image Optimisation:** https://nextjs.org/docs/pages/api-reference/components/image
- **API Routes:** https://nextjs.org/docs/pages/building-your-application/routing/api-routes

### Server-Side Rendering
- **getServerSideProps:** https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props
- **Data Fetching:** https://nextjs.org/docs/pages/building-your-application/data-fetching

---

## Database & Backend References

## Database & Backend References

### MySQL & SQL
- **MySQL 8.4 Documentation:** https://dev.mysql.com/doc/refman/8.4/en/
- **MySQL Performance Tuning:** https://dev.mysql.com/doc/refman/8.4/en/optimization.html
- **MySQL2 Node.js Driver:** https://github.com/sidorares/node-mysql2
- **SQL Reference:** https://dev.mysql.com/doc/refman/8.4/en/sql-statements.html
- **SQL Tutorial:** https://www.w3schools.com/sql/
- **MySQL Installation (macOS):** https://formulae.brew.sh/formula/mysql
- **MySQL Service Management:** https://brew.sh/
- **Database Design:** https://dev.mysql.com/doc/refman/8.4/en/designing-database.html
- **MySQL Security:** https://dev.mysql.com/doc/refman/8.4/en/security.html

### Node.js & ES6 Modules
- **Node.js LTS Documentation:** https://nodejs.org/en/docs/
- **ES6 Modules:** https://nodejs.org/api/esm.html
- **Import/Export Syntax:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
- **npm Documentation:** https://docs.npmjs.com/
- **Package.json Reference:** https://docs.npmjs.com/cli/v10/configuring-npm/package-json
- **Node.js Best Practices:** https://github.com/goldbergyoni/nodebestpractices

### Database Troubleshooting & Performance
- **Connection Issues:** https://github.com/sidorares/node-mysql2/issues
- **API Response Problems:** https://nextjs.org/docs/pages/building-your-application/routing/api-routes
- **Module Import Errors:** https://nodejs.org/api/esm.html#differences-between-es-modules-and-commonjs
- **Database Connection Pooling:** https://github.com/sidorares/node-mysql2#pooling-connections
- **SQL Injection Prevention:** https://owasp.org/www-community/attacks/SQL_Injection

---

## Performance & Optimisation References

### Web Performance
- **Web.dev Performance:** https://web.dev/performance/
- **Core Web Vitals:** https://web.dev/articles/vitals
- **Lighthouse Performance:** https://developer.chrome.com/docs/lighthouse/performance/
- **Image Optimisation:** https://web.dev/articles/optimize-images
- **Critical Rendering Path:** https://web.dev/articles/critical-rendering-path
- **Resource Hints:** https://web.dev/articles/preload-critical-assets
- **Web Performance Metrics:** https://web.dev/articles/metrics
- **Performance Budgets:** https://web.dev/articles/performance-budgets-101

### SEO & Accessibility
- **SEO Fundamentals:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **Web Accessibility Guidelines:** https://www.w3.org/WAI/WCAG22/quickref/
- **ARIA Authoring Practices:** https://www.w3.org/WAI/ARIA/apg/
- **Accessibility Testing:** https://web.dev/articles/accessibility
- **Semantic HTML for SEO:** https://developers.google.com/search/docs/crawling-indexing/valid-html
- **Mobile-First Indexing:** https://developers.google.com/search/mobile-sites/mobile-first-indexing

---

## Build Tools & Development

### Package Managers
- **npm CLI:** https://docs.npmjs.com/cli/v10
- **Yarn Documentation:** https://yarnpkg.com/getting-started

### Development Tools
- **ESLint:** https://eslint.org/docs/latest/
- **VS Code Extensions:** https://code.visualstudio.com/docs/editor/extension-marketplace

---

## Browser Compatibility & Standards

### Web Standards
- **Can I Use:** https://caniuse.com/
- **MDN Browser Compatibility:** https://developer.mozilla.org/en-US/docs/Web/Guide/Browser_compatibility
- **W3C Standards:** https://www.w3.org/standards/

### Testing
- **Cross-Browser Testing:** https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing
- **Responsive Testing:** https://web.dev/responsive-web-design-basics/

---

## Security References

### Web Security
- **OWASP:** https://owasp.org/www-project-top-ten/
- **Content Security Policy:** https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- **SQL Injection Prevention:** https://owasp.org/www-community/attacks/SQL_Injection

---

## Additional Resources

### Learning Platforms
- **MDN Web Docs:** https://developer.mozilla.org/
- **Web.dev:** https://web.dev/
- **W3Schools:** https://www.w3schools.com/
- **freeCodeCamp:** https://www.freecodecamp.org/

### Community & Support
- **Stack Overflow:** https://stackoverflow.com/
- **GitHub:** https://github.com/
- **Reddit Web Development:** https://www.reddit.com/r/webdev/

---

## Troubleshooting & Common Issues

### Database Connection Issues
- **Module Import Errors:** Ensure consistent ES6 imports (`import/export`) across all files
- **API Response Failures:** Check for "API resolved without sending a response" warnings
- **MySQL Connection:** Verify service status with `brew services list | grep mysql`
- **Database Setup:** Confirm table creation with `mysql -u root -e "USE cantor_college; SHOW TABLES;"`

### Development Environment
- **Port Conflicts:** Next.js default port 3000, change with `npm run dev -- -p 3001`
- **Cache Issues:** Clear Next.js cache with `rm -rf .next`
- **Node Modules:** Reinstall dependencies with `rm -rf node_modules && npm install`

### API Testing
- **cURL Testing:** `curl http://localhost:3000/api/courses`
- **Expected Response:** JSON array with 24 course objects
- **Performance:** Response time should be under 200ms

### References for Troubleshooting
- **Next.js Debugging:** https://nextjs.org/docs/advanced-features/debugging
- **MySQL2 Documentation:** https://www.npmjs.com/package/mysql2
- **Node.js ES6 Modules:** https://nodejs.org/api/esm.html
- **API Route Debugging:** https://nextjs.org/docs/api-routes/introduction

---

