# Likya Catering Brand Guidelines

## 🎨 Brand Colors

### Primary Colors
- **Primary (Ana Renk)**: `#0E5E65` - Deep turquoise/green that evokes the Mediterranean
- **Secondary (İkincil Renk)**: `#4863A0` - Trustworthy navy blue

### Accent Colors
- **Accent Orange**: `#F4A261` - Warm Mediterranean orange for CTAs and highlights
- **Accent Gold**: `#E9C46A` - Golden tones for menus and emphasis
- **Background Neutral**: `#F7F7F7` - Clean neutral background
- **Text Dark**: `#333333` - Dark text for readability

## ✍️ Typography

### Fonts
- **Titles/Logo**: DM Serif Display (`font-title`) - Luxurious and elegant
- **Body Text**: Work Sans (`font-body`) - Clean, modern, highly readable

## 📦 Usage Guidelines

### CSS Classes Available

#### Colors
```css
/* Text Colors */
.text-likya-primary
.text-likya-secondary  
.text-likya-accent-orange
.text-likya-accent-gold

/* Background Colors */
.bg-likya-primary
.bg-likya-secondary
.bg-likya-accent-orange
.bg-likya-accent-gold
.bg-likya-neutral

/* Border Colors */
.border-likya-primary
.border-likya-secondary
.border-likya-accent-orange
.border-likya-accent-gold
```

#### Typography
```css
/* Font Classes */
.font-title    /* DM Serif Display */
.font-body     /* Work Sans */
```

#### Gradients
```css
/* Background Gradients */
.bg-gradient-likya           /* Primary to Secondary */
.bg-gradient-likya-reverse   /* Secondary to Primary */
```

### Recommended Usage

#### Buttons & CTAs
- **Primary CTA**: `bg-likya-primary text-white` with `hover:bg-likya-secondary`
- **Secondary CTA**: `bg-likya-accent-orange text-white` with `hover:bg-likya-accent-gold`
- **Outline CTA**: `border-2 border-white text-white` with `hover:bg-white hover:text-likya-primary`

#### Headings
- Use `font-title` for main headings and logo
- Use `text-likya-primary` or `text-likya-secondary` for heading colors

#### Body Text
- Use `font-body` for all body text
- Use `text-likya-text-dark` for main text content

#### Backgrounds
- Use `bg-likya-neutral` for main backgrounds
- Use `bg-gradient-likya` for hero sections
- Use accent colors sparingly for highlights

## 🎯 Implementation Examples

### Hero Section
```jsx
<section className="bg-gradient-likya">
  <h1 className="font-title text-white text-6xl">
    Mediterranean Culinary Excellence
  </h1>
  <p className="font-body text-white/90">
    Experience authentic flavors...
  </p>
  <button className="bg-likya-accent-orange text-white font-body">
    Book Your Event
  </button>
</section>
```

### Navigation
```jsx
<nav className="bg-likya-neutral/95">
  <div className="text-likya-primary font-title">Likya Catering</div>
  <a className="text-likya-text-dark hover:text-likya-primary font-body">
    Services
  </a>
</nav>
```

### Cards
```jsx
<div className="bg-white border border-likya-primary/20">
  <h3 className="font-title text-likya-primary">Service Title</h3>
  <p className="font-body text-likya-text-dark">Description...</p>
</div>
```

## 🔧 Tailwind Configuration

The brand colors are configured in `tailwind.config.js` and can be used with standard Tailwind syntax:

```jsx
// Examples
className="bg-likya-primary"
className="text-likya-accent-orange"
className="border-likya-secondary"
className="font-title"
className="font-body"
```

## 📱 Responsive Design

All brand elements are designed to work seamlessly across all device sizes. The typography scales appropriately, and the color contrast ratios meet accessibility standards.
