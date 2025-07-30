# Homepage Desktop Wireframe

## Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                   HEADER                                        │
│  [LOGO]              [Home] [Courses] [Facilities] [Resources] [Staff] [Contact] │
└─────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              HERO SECTION                                      │
│                          [Large Background Image]                              │
│                                                                                 │
│                         Welcome to Cantor College                              │
│                                                                                 │
│                Your future begins here. Explore our diverse range...           │
│                                                                                 │
│                            [Apply Now Button]                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            IMAGE SLIDESHOW                                     │
│                        [Full-width Rotating Images]                            │
│                     • Computing Labs • Atrium Views • Facilities               │
└─────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────────┐
│                             ABOUT SECTION                                      │
│                                                                                 │
│                           About Cantor College                                 │
│                                                                                 │
│    Cantor College was established in 1989 to specialize in Computing and       │
│    Design. At Cantor College, we want to give students the education they      │
│    need to achieve their career aims, leaving them equipped with the           │
│    knowledge, skills, and experience to succeed...                             │
└─────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            COURSES SECTION                                     │
│                                                                                 │
│                              Our Courses                                       │
│                                                                                 │
│  ┌─────────────────────────────────┐    ┌─────────────────────────────────┐   │
│  │        Computing Courses        │    │         Design Courses          │   │
│  │                                 │    │                                 │   │
│  │  The College offers a range of  │    │  The College is an              │   │
│  │  courses to suit applicants     │    │  internationally connected      │   │
│  │  with varying backgrounds and   │    │  creative community of diverse  │   │
│  │  educational abilities...       │    │  disciplines housed under...    │   │
│  │                                 │    │                                 │   │
│  │  • BSc Computing               │    │  • BA Graphic Design            │   │
│  │  • BSc Computer Networks       │    │  • BA Web Design                │   │
│  │  • BSc Software Engineering    │    │  • BA Digital Media             │   │
│  │  • BSc Cyber Security          │    │  • BA Game Design               │   │
│  └─────────────────────────────────┘    └─────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           LOCATION SECTION                                     │
│                                                                                 │
│                            How to Find Us                                      │
│                                                                                 │
│                              Cantor College                                    │
│                               Main Street                                      │
│                                Sheffield                                       │
│                                SC4 2BB                                         │
│                                                                                 │
│                         Tel: (01321) 2340 235                                  │
│                         Fax: (01321) 2340 236                                  │
│                      Email: info@cantorcollege.ac.uk                           │
└─────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           CONTACT SECTION                                      │
│                                                                                 │
│                              Contact Us                                        │
│                                                                                 │
│                    ┌─────────────────────────────────┐                        │
│                    │         Contact Form            │                        │
│                    │                                 │                        │
│                    │  [Name Input Field]             │                        │
│                    │  [Email Input Field]            │                        │
│                    │  [Message Text Area]            │                        │
│                    │                                 │                        │
│                    │    [Send Message Button]        │                        │
│                    └─────────────────────────────────┘                        │
└─────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                 FOOTER                                         │
│                        © 2024 Cantor College. All rights reserved              │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Design Decisions

### Desktop Layout Strategy
- Full-width sections with centered content containers (max-width: 1200px)
- Horizontal navigation bar with all links visible
- Two-column layout for courses section
- Larger hero section with prominent call-to-action
- Centered contact form with professional styling

### Navigation Design
- Horizontal navigation bar with all menu items visible
- Logo on the left, navigation links on the right
- Hover effects and active states for better UX
- No burger menu needed on desktop

### Content Layout
1. **Hero Section**: Large background image with overlay text and CTA
2. **Slideshow**: Full-width rotating images showcasing facilities
3. **About**: Centered text with maximum width for readability
4. **Courses**: Two-column grid layout for Computing and Design
5. **Location**: Centered contact information with styling
6. **Contact**: Centered form with professional appearance

### Responsive Breakpoints
- Desktop styles apply from 768px and above
- Large desktop optimizations at 1200px+
- Ultra-wide support at 1600px+

### Visual Hierarchy
- Large headings (2.5em) for section titles
- Consistent spacing (60px padding) between sections
- Card-based design for course information
- Professional color scheme (#002147, #00539C)

### Interactive Elements
- Hover effects on navigation and buttons
- Form validation with visual feedback
- Smooth scrolling between sections
- Image slideshow with fade transitions

### Accessibility Features
- High contrast color ratios
- Focus indicators for keyboard navigation
- ARIA labels and semantic HTML
- Responsive text sizing
- Touch-friendly button sizes
