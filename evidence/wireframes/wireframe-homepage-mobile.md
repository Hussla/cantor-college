# Homepage Mobile Wireframe

## Layout Structure

```
┌─────────────────────────┐
│        HEADER           │
│  [LOGO]        [☰]     │
└─────────────────────────┘
┌─────────────────────────┐
│      HERO SECTION       │
│    [Background Image]   │
│                         │
│   Welcome to Cantor     │
│       College           │
│                         │
│  Your future begins...  │
│                         │
│    [Apply Now Button]   │
└─────────────────────────┘
┌─────────────────────────┐
│   IMAGE SLIDESHOW       │
│    [Rotating Images]    │
│   • Computing Lab       │
│   • Atrium Views        │
│   • Lecture Theatres    │
└─────────────────────────┘
┌─────────────────────────┐
│    ABOUT SECTION        │
│                         │
│  About Cantor College   │
│                         │
│  [Paragraph text about │
│   college history and   │
│   mission statement]    │
└─────────────────────────┘
┌─────────────────────────┐
│   COURSES SECTION       │
│                         │
│    Our Courses          │
│                         │
│ ┌─────────────────────┐ │
│ │ Computing Courses   │ │
│ │ [Description text]  │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │  Design Courses     │ │
│ │ [Description text]  │ │
│ └─────────────────────┘ │
└─────────────────────────┘
┌─────────────────────────┐
│   LOCATION SECTION      │
│                         │
│   How to Find Us        │
│                         │
│    Cantor College       │
│     Main Street         │
│      Sheffield          │
│       SC4 2BB           │
│                         │
│   Tel: (01321) 2340 235 │
│   Email: info@cantor... │
└─────────────────────────┘
┌─────────────────────────┐
│   CONTACT SECTION       │
│                         │
│     Contact Us          │
│                         │
│  [Name Input Field]     │
│  [Email Input Field]    │
│  [Message Text Area]    │
│                         │
│   [Send Message Btn]    │
└─────────────────────────┘
┌─────────────────────────┐
│        FOOTER           │
│  © 2024 Cantor College  │
│   All rights reserved   │
└─────────────────────────┘
```

## Design Decisions

### Mobile-First Approach
- Single column layout for optimal mobile viewing
- Large touch-friendly buttons and navigation
- Burger menu for space efficiency
- Stacked content sections for easy scrolling

### Navigation
- Hamburger menu (☰) in top right
- Logo positioned top left for brand recognition
- Hidden navigation menu slides down when activated

### Content Hierarchy
1. Hero section with clear call-to-action
2. Visual slideshow to showcase facilities
3. About section for college introduction
4. Courses overview with expandable cards
5. Contact information and form

### Accessibility Considerations
- High contrast colors (#002147, #00539C)
- Large text and buttons for readability
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support

### Interactive Elements
- Burger menu toggle
- Image slideshow rotation
- Form validation feedback
- Smooth scrolling navigation
