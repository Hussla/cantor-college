# Cantor College Website - Information Architecture

## Site Structure Overview

```
Cantor College Website
├── Home (index.html)
├── Courses (courses.html)
├── Facilities (facilities.html)
├── Learning Resources (resources.html)
├── Staff Information (staff-info.html)
├── Student Information (student-info.html)
├── Working with Business (business.html)
└── Contact Us (contact-us.html)
```

## Page Hierarchy and Content Strategy

### 1. Homepage (index.html)
**Purpose**: Primary entry point, overview of college, conversion to applications

**Content Sections**:
- Hero section with main value proposition
- Image slideshow showcasing facilities
- About section with college history and mission
- Course overview (Computing & Design)
- Location and contact information
- Contact form

**User Goals**:
- Understand what Cantor College offers
- Get inspired by facilities and opportunities
- Find contact information
- Begin application process

**Business Goals**:
- Convert visitors to prospective students
- Showcase college strengths
- Provide clear pathways to key information

### 2. Courses (courses.html)
**Purpose**: Detailed course information, comparison, and application guidance

**Content Sections**:
- Hero section with course focus
- Computing courses section with detailed cards
- Design courses section with detailed cards
- Course comparison table
- Application process and support

**User Goals**:
- Compare different courses
- Understand entry requirements
- Learn about course content and outcomes
- Begin application process

**Business Goals**:
- Showcase course quality and industry relevance
- Highlight accreditations and partnerships
- Guide users toward application

### 3. Facilities (facilities.html)
**Purpose**: Showcase college infrastructure and learning environment

**Content Sections**:
- Computing labs and equipment
- Design studios and workshops
- Lecture theatres and learning spaces
- Library and study areas
- Student social spaces

**User Goals**:
- Understand learning environment
- See quality of facilities
- Visualize student experience

**Business Goals**:
- Demonstrate investment in student experience
- Differentiate from competitors
- Support application decisions

### 4. Learning Resources (resources.html)
**Purpose**: Information about academic support and learning materials

**Content Sections**:
- Library services and resources
- Online learning platforms
- Academic support services
- Research opportunities
- Industry partnerships

**User Goals**:
- Understand academic support available
- Learn about research opportunities
- Access learning materials

**Business Goals**:
- Demonstrate academic excellence
- Showcase support systems
- Highlight research capabilities

### 5. Staff Information (staff-info.html)
**Purpose**: Faculty profiles and expertise showcase

**Content Sections**:
- Academic staff profiles
- Research interests and publications
- Industry experience
- Contact information
- Office hours and availability

**User Goals**:
- Learn about faculty expertise
- Find contact information for specific staff
- Understand teaching quality

**Business Goals**:
- Showcase faculty credentials
- Demonstrate industry connections
- Build trust and credibility

### 6. Student Information (student-info.html)
**Purpose**: Current student resources and support services

**Content Sections**:
- Student services and support
- Campus life and activities
- Student societies and clubs
- Accommodation information
- Financial support and scholarships

**User Goals**:
- Understand student life
- Access support services
- Find information about activities
- Learn about financial support

**Business Goals**:
- Demonstrate student-centered approach
- Showcase vibrant campus life
- Support student retention

### 7. Working with Business (business.html)
**Purpose**: Industry partnerships and collaboration opportunities

**Content Sections**:
- Partnership opportunities
- Research collaboration
- Graduate recruitment
- Consultancy services
- Industry projects

**User Goals**:
- Explore partnership opportunities
- Find collaboration possibilities
- Access consultancy services

**Business Goals**:
- Develop industry relationships
- Generate revenue opportunities
- Enhance graduate employability

### 8. Contact Us (contact-us.html)
**Purpose**: Contact information and inquiry handling

**Content Sections**:
- Contact form for inquiries
- Department-specific contact information
- Campus location and directions
- Opening hours
- Social media links

**User Goals**:
- Get in touch with college
- Find specific department contacts
- Get directions to campus

**Business Goals**:
- Capture leads and inquiries
- Provide excellent customer service
- Support conversion to applications

## Navigation Strategy

### Primary Navigation
- Consistent across all pages
- Mobile-first responsive design
- Clear hierarchy with logical grouping
- Accessibility compliant with ARIA labels

### Navigation Labels
- **Home**: Clear entry point
- **Courses**: Academic programs
- **Facilities**: Infrastructure and equipment
- **Learning Resources**: Academic support
- **Staff**: Faculty information
- **Students**: Student life and services
- **Working with Business**: Industry partnerships
- **Contact Us**: Get in touch

### User Journey Mapping

#### Prospective Student Journey
1. **Discovery**: Land on homepage → Learn about college
2. **Research**: Browse courses → Compare options
3. **Evaluation**: Check facilities → Read about student life
4. **Decision**: Contact admissions → Begin application

#### Current Student Journey
1. **Access**: Navigate to student information
2. **Support**: Find academic resources
3. **Engagement**: Explore campus life options
4. **Development**: Access career services

#### Business Partner Journey
1. **Exploration**: Learn about partnership opportunities
2. **Evaluation**: Review capabilities and expertise
3. **Connection**: Contact relevant departments
4. **Collaboration**: Develop ongoing relationships

## Content Principles

### 1. User-Centered Design
- Content organized by user needs, not organizational structure
- Clear pathways to key actions (apply, contact, learn more)
- Progressive disclosure of information

### 2. Accessibility First
- Semantic HTML structure
- Clear heading hierarchy
- Alt text for all images
- Keyboard navigation support
- High contrast color schemes

### 3. Mobile-First Approach
- Content prioritized for mobile viewing
- Touch-friendly navigation and buttons
- Responsive images and layouts
- Fast loading times

### 4. SEO Optimization
- Descriptive page titles and meta descriptions
- Structured data markup
- Clean URL structure
- Internal linking strategy

### 5. Conversion Optimization
- Clear calls-to-action on every page
- Multiple pathways to application
- Trust signals (accreditations, partnerships)
- Social proof (student success stories)

## Technical Architecture

### File Structure
```
/
├── index.html (Homepage)
├── courses.html (Course information)
├── facilities.html (Facilities showcase)
├── resources.html (Learning resources)
├── staff-info.html (Staff profiles)
├── student-info.html (Student services)
├── business.html (Business partnerships)
├── contact-us.html (Contact information)
├── styles/
│   ├── mobile.css (Mobile-first styles)
│   └── desktop.css (Desktop enhancements)
├── js/
│   └── main.js (Interactive functionality)
├── website-images-assets/ (Image library)
└── evidence/ (Planning documentation)
```

### Performance Considerations
- Optimized images for web delivery
- Minified CSS and JavaScript
- Efficient loading strategies
- Responsive image techniques

### Future Scalability
- Modular CSS architecture
- Reusable component patterns
- Clear naming conventions
- Documentation for maintenance

## Success Metrics

### User Experience Metrics
- Page load times < 3 seconds
- Mobile usability score > 95%
- Accessibility compliance (WCAG 2.1 AA)
- Low bounce rate on key pages

### Business Metrics
- Increased application inquiries
- Higher course page engagement
- Improved contact form submissions
- Enhanced brand perception

### Technical Metrics
- Cross-browser compatibility
- Mobile responsiveness
- SEO performance
- Code quality and maintainability
