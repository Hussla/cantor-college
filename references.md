# Cantor College Website - Project Files Documentation & References

## Project Overview

This project consists of a static HTML website for Cantor College with a companion Next.js application featuring dynamic course management. The website implements modern web standards with responsive design, accessibility features, and performance optimisations.

---

## Main Project Files Analysis

### HTML Files

#### 1. `index.html` - Homepage
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

#### 2. `courses.html` - Course Information
**Function:** Displays detailed course information for Computing and Design programs
- Static course listings with descriptions
- Course categories and requirements
- Academic pathways and career outcomes

#### 3. `facilities.html` - Campus Facilities
**Function:** Showcases college facilities and infrastructure
- Interactive facility galleries
- Modern lab descriptions
- Campus amenities overview

#### 4. `resources.html` - Learning Resources
**Function:** Information about library and digital resources
- Library services and access
- Digital databases and tools
- Study spaces and support services

#### 5. `staff-info.html` - Staff Information
**Function:** Staff profiles and contact information
- Faculty directories
- Department contacts
- Office hours and availability

#### 6. `student-info.html` - Student Services
**Function:** Student support services and campus life
- Student services overview
- Campus housing information
- Student activities and societies

#### 7. `business.html` - Business Partnerships
**Function:** Information for business collaboration
- Partnership opportunities
- Professional services
- Industry connections

#### 8. `contact-us.html` - Contact Information
**Function:** Contact forms and location details
- Multiple contact methods
- Interactive contact forms
- Campus location and directions

### CSS Files

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
  - Complex CSS Grid layouts
  - Enhanced animations for desktop
  - Improved form layouts
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
  - Modern JavaScript best practices

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
- Modern React patterns

#### 3. `cantor-college-nextjs/pages/courses.js` - Dynamic Courses Page
**Function:** Server-side rendered courses page with database integration
- MySQL database connection
- Server-side data fetching
- Dynamic course table generation
- Responsive table design

#### 4. `cantor-college-nextjs/db.js` - Database Connection
**Function:** MySQL database configuration and connection
- MySQL2 library implementation
- Connection pooling
- Error handling
- Database query examples

#### 5. `cantor-college-nextjs/package.json` - Project Configuration
**Function:** Node.js project configuration
- Dependencies: Next.js 15.0.3, React 19 RC, MySQL2
- Build scripts and development commands
- ESLint configuration

### API Routes

#### 1. `cantor-college-nextjs/pages/api/courses.js` - Courses API
**Function:** RESTful API endpoint for course data
- Database queries
- JSON response formatting
- Error handling

---

## HTML Documentation References

### Core HTML Elements
- **HTML5 Semantic Elements:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- **HTML Document Structure:** https://html.spec.whatwg.org/multipage/dom.html#documents
- **HTML Forms:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- **HTML Accessibility:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

### Specific HTML Features Used
- **Meta Tags:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
- **Link Preloading:** https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload
- **Image Optimisation:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading
- **Form Validation:** https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- **ARIA Roles:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
- **Semantic HTML:** https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements

---

## CSS Documentation References

### Core CSS Concepts
- **CSS Specifications:** https://www.w3.org/TR/css-2023/
- **CSS Grid Layout:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- **CSS Flexbox:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
- **CSS Cascade and Inheritance:** https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade

### Responsive Design
- **Media Queries:** https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries
- **Responsive Design:** https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- **Viewport Meta Tag:** https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag

### Advanced CSS Features
- **CSS Custom Properties:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- **CSS Animations:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
- **CSS Transitions:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions
- **CSS Box Model:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model

### CSS Methodologies
- **BEM Methodology:** https://en.bem.info/methodology/
- **CSS Architecture:** https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organising

---

## JavaScript Documentation References

### Core JavaScript
- **JavaScript Language Reference:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- **ECMAScript 2023:** https://tc39.es/ecma262/
- **Modern JavaScript Features:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

### DOM Manipulation
- **DOM API:** https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- **Event Handling:** https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- **Element API:** https://developer.mozilla.org/en-US/docs/Web/API/Element
- **Document Ready:** https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState

### Specific JavaScript Features Used
- **IIFE Pattern:** https://developer.mozilla.org/en-US/docs/Glossary/IIFE
- **Arrow Functions:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- **Array Methods:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- **String Methods:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- **Timer Functions:** https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

### JavaScript Best Practices
- **JavaScript Best Practices:** https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript
- **Error Handling:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
- **Performance:** https://developer.mozilla.org/en-US/docs/Learn/Performance

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

### MySQL
- **MySQL Documentation:** https://dev.mysql.com/doc/
- **MySQL2 Node.js Driver:** https://github.com/sidorares/node-mysql2
- **SQL Reference:** https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html

### Node.js
- **Node.js Documentation:** https://nodejs.org/en/docs/
- **npm Documentation:** https://docs.npmjs.com/
- **Package.json Reference:** https://docs.npmjs.com/cli/v10/configuring-npm/package-json

---

## Performance & Optimisation References

### Web Performance
- **Web.dev Performance:** https://web.dev/performance/
- **Core Web Vitals:** https://web.dev/vitals/
- **Image Optimisation:** https://web.dev/optimize-images/
- **Critical Rendering Path:** https://developers.google.com/web/fundamentals/performance/critical-rendering-path

### SEO & Accessibility
- **SEO Fundamentals:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **Web Accessibility:** https://www.w3.org/WAI/WCAG21/quickref/
- **ARIA Authoring Practices:** https://www.w3.org/WAI/ARIA/apg/

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

*Last Updated: July 29, 2025*
*Documentation compiled for Cantor College Website Project*
