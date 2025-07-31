# Cantor College Website Project

A comprehensive web development project featuring a static HTML website and dynamic Next.js application with MySQL database integration for Cantor College.

**Author:** Haleem Hussain  
**Repository:** https://github.com/Hussla/cantor-college

## Quick Start

### Static Website
```bash
git clone https://github.com/Hussla/cantor-college.git
cd cantor-college/website_code
python3 -m http.server 8000
```
**Access:** http://localhost:8000/components/homepage.html

### Next.js Application
```bash
npm install
mysql -u root -p cantor_college < database/courseinfo.sql
npm run dev
```
**Access:** http://localhost:3000

## Project Structure

```
cantor-college/
├── website_code/              # Static HTML website
│   ├── components/            # HTML pages (homepage.html, courses.html, etc.)
│   ├── styles/               # CSS files (mobile.css, desktop.css)
│   ├── js/                   # JavaScript (main.js)
│   └── used-images/          # Optimised image assets
├── pages/                    # Next.js pages and API routes
│   ├── courses.js           # Dynamic courses page
│   └── api/courses.js       # RESTful API endpoint
├── src/app/                 # Next.js App Router
├── database/                # MySQL database files
│   ├── courseinfo.sql       # Course data (24 courses)
│   └── db.js               # Database connection
├── evidence/                # Testing and wireframes
└── package.json            # Project configuration
```

## Technical Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Grid/Flexbox layouts, mobile-first responsive design  
- **JavaScript ES6+** - Interactive functionality and DOM manipulation
- **React/Next.js** - Component-based architecture with App Router

### Backend
- **Next.js API Routes** - RESTful endpoints
- **MySQL** - Database with 24 course records
- **Node.js** - Runtime environment

### Key Features
- Responsive design (mobile-first approach)
- Database-driven dynamic content
- Performance optimised (lazy loading, image optimisation)
- Accessibility compliant (WCAG guidelines)
- SEO optimised with semantic HTML

## Development Commands

```bash
# Static website
cd website_code && python3 -m http.server 8000

# Next.js development
npm run dev

# Database setup
mysql -u root -p cantor_college < database/courseinfo.sql

# Test API
curl http://localhost:3000/api/courses
```

## Troubleshooting

**Database Issues:**
- Check MySQL service: `brew services list | grep mysql`
- Verify database: `mysql -u root -p -e "SHOW DATABASES;"`

**Module Errors:**
- Clean install: `rm -rf node_modules && npm install`

**Port Conflicts:**
- Change Next.js port: `npm run dev -- -p 3001`

---

For detailed documentation see `references.md`








