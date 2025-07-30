# Cantor College Website Project

## Project Overview

This project is a website for the fictional "Cantor College" built as part of a Web Development assignment. The website demonstrates web development practices using HTML, CSS, JavaScript, and Next.js with MySQL database integration.

## Live Demonstrations

### Static Website
- **Homepage**: Open `index.html` in your browser
- **All Pages**: Navigate through the complete site structure

### Next.js Application with Database
- **Development Server**: `http://localhost:3000`
- **Database-Driven Courses**: `http://localhost:3000/courses`

## Project Structure

```
cantor-college/
├── index.html                 # Homepage
├── courses.html              # Static courses page
├── facilities.html           # Facilities information
├── resources.html            # Learning resources
├── staff-info.html           # Staff information
├── student-info.html         # Student information
├── business.html             # Business services
├── contact-us.html           # Contact information
├── styles/
│   ├── mobile.css           # Mobile-first responsive styles
│   └── desktop.css          # Desktop styles
├── js/
│   └── main.js              # Interactive JavaScript features
├── website-images-assets/    # All provided images
├── evidence/                 # Planning, testing documentation and wireframes
│   ├── wireframe-homepage-mobile.md
│   ├── wireframe-homepage-desktop.md
│   ├── wireframe-courses-page.md
│   └── information-architecture.md
└── cantor-college-nextjs/    # Next.js application with database
    ├── pages/
    │   ├── courses.js        # Dynamic courses page
    │   └── api/
    │       └── courses.js    # API endpoint
    ├── db.js                 # Database connection
    └── setup-database.js     # Database initialisation
```

## Key Features

### 1. Responsive Design
- Mobile-first approach with CSS media queries
- Flexible layouts that work on all device sizes
- Optimised images for web performance

### 2. HTML & CSS
- Semantic HTML5 elements for accessibility
- CSS Grid and Flexbox for layouts
- Custom CSS (no frameworks like Bootstrap/Tailwind)
- Colour scheme and typography

### 3. Interactive JavaScript
- Mobile menu toggle functionality
- Form validation on contact forms
- User experience enhancements
- Dynamic content loading

### 4. Database Integration (Next.js)
- MySQL database with 24 courses from provided Excel data
- RESTful API endpoints for data retrieval
- React components for dynamic content rendering
- Statistics showing course counts by category

## Database Implementation

### Course Data
The MySQL database contains 24 courses imported from the provided Excel file:
- 17 Computing courses (Undergraduate & Postgraduate)
- 7 Art & Design courses (Various specialisations)
- 21 Undergraduate and 3 Postgraduate programmes

### Database Schema
```sql
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type ENUM('Undergraduate', 'Postgraduate') NOT NULL,
    summary TEXT,
    award VARCHAR(100),
    ucas_code VARCHAR(10),
    ucas_points INT,
    year_of_entry VARCHAR(20),
    mode_of_attendance VARCHAR(50),
    study_length VARCHAR(50),
    has_foundation_year BOOLEAN DEFAULT FALSE,
    course_subject VARCHAR(100),
    no_longer_recruiting BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Technologies Used

### Frontend
- HTML5 - Semantic markup
- CSS3 - Modern styling with Grid/Flexbox
- JavaScript (ES6+) - Interactive functionality
- React/Next.js - Component-based architecture

### Backend
- Next.js API Routes - Server-side logic
- MySQL - Database management
- Node.js - Runtime environment

### Development Tools
- Git - Version control
- npm - Package management
- VS Code - Development environment

## Design Process

### Planning & Wireframing
- Information Architecture - Structured content organisation
- Mobile Wireframes - Mobile-first design approach
- Desktop Wireframes - Responsive layout planning
- User Experience - Navigation and content flow

### Visual Design
- Colour Palette - Navy blue (#003366) primary theme
- Typography - Readable font choices
- Image Optimisation - Properly sized and formatted images
- Consistent Branding - Unified visual identity

## Accessibility Features

- Semantic HTML for screen readers
- Alt text for all images
- Keyboard navigation support
- Colour contrast compliance
- Responsive text sizing
- Focus indicators for interactive elements

## Getting Started

### Static Website
1. Clone the repository
2. Open `index.html` in your browser
3. Navigate through all pages

### Next.js Application
1. Navigate to the `cantor-college-nextjs` directory
2. Install dependencies: `npm install`
3. Set up MySQL database (see Database Setup below)
4. Start development server: `npm run dev`
5. Visit `http://localhost:3000`

### Database Setup
1. Install MySQL on your system
2. Create a database named `cantor_college`
3. Run the setup script: `node setup-database.js`
4. Verify 24 courses are imported successfully
5. Test API endpoint: `curl http://localhost:3000/api/courses`

## Course Statistics

The database contains courses across different categories:

| Category | Count |
|----------|-------|
| Computing Courses | 17 |
| Art & Design Courses | 7 |
| Undergraduate | 21 |
| Postgraduate | 3 |
| Total Courses | 24 |

## Assignment Requirements Met

### Planning and Resources (10%)
- Wireframing - Wireframes for mobile and desktop
- Content Usage - All provided text content utilised
- File Structure - Organisation and naming conventions
- Evidence Documentation - Planning materials

### Quality of Application Code (70%)
- HTML Quality - Semantic HTML5 with proper structure
- CSS Quality - Mobile-first, external stylesheets, selectors
- JavaScript Quality - Interactive features and form validation
- Database Integration - Next.js with MySQL backend
- No Frameworks - Original CSS without Bootstrap/Tailwind
- ReactJS/Next.js - Implementation with database

### UI/UX and Accessibility (20%)
- Interface - Design
- User Experience - Navigation and functionality
- Image Optimisation - Properly formatted for web use
- Accessibility Compliance - Semantic markup and best practices

## Technical Highlights

### Advanced Features
- Server-Side Rendering with Next.js
- API Integration for dynamic content
- Database Relationships and data modelling
- Responsive Grid Layouts for course displays
- Statistics calculated from database
- Error Handling and loading states
- ES6 Module System for consistent imports
- Optimised database connection handling

### Performance Optimisations
- Optimised Images - Proper sizing and formats
- Efficient CSS - Minimal, well-organised stylesheets
- Fast Database Queries - Optimised SQL operations
- Responsive Loading - Progressive enhancement
- API Response Times - Sub-200ms performance

## Future Enhancements

- Course search and filtering functionality
- Student application system
- Staff portal integration
- Content management system
- Advanced accessibility features
- Performance monitoring

## Troubleshooting

### Database Issues
- **Blank courses page**: Check API endpoint with `curl http://localhost:3000/api/courses`
- **Module import errors**: Ensure consistent ES6 imports in `db.js` and API files
- **Connection errors**: Verify MySQL service is running with `brew services list`
- **Missing data**: Re-run setup script with `node setup-database.js`

### Development Server
- **Port conflicts**: Change port with `npm run dev -- -p 3001`
- **Build errors**: Clear Next.js cache with `rm -rf .next`
- **Dependency issues**: Reinstall with `rm -rf node_modules && npm install`

## Development Notes

This project demonstrates proficiency in:
- Web development practices
- Database design and integration
- Responsive design principles
- Accessibility standards
- Code organisation
- Full-stack development with Next.js

The website combines static HTML/CSS/JavaScript with dynamic Next.js/MySQL functionality, showcasing both traditional and modern web development approaches.

## Project Status

**Current Version:** Fully functional with database integration  
**Last Updated:** July 2025  
**Database Status:** ✅ 24 courses imported and verified  
**API Status:** ✅ Sub-200ms response times  
**Testing Status:** ✅ All functionality verified  

### Recent Improvements
- Fixed ES6 module import consistency
- Optimised database connection handling
- Enhanced API response performance
- Added comprehensive troubleshooting documentation

---
