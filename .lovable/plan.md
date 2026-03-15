

## FLUR Glassware — Pixel-Faithful Clone

### Overview
Recreate the FLUR Glassware e-commerce homepage as a static React site with all visual sections, navigation, product cards, and footer — matching the original's layout, typography, and design language exactly.

### Pages to Scaffold
1. **Home** (fully built out)
2. **About** (placeholder)
3. **Warranty** (placeholder)
4. **Product pages** (placeholder route for `/products/:slug`)
5. **Cart drawer** (slide-in UI, empty state)

### Homepage Sections (top to bottom)

1. **Announcement Bar** — Scrolling marquee ticker: "FREE SHIPPING ON ORDERS $49+" / "FREE CARAFE ON ORDERS $150+" alternating, black background, white uppercase text
2. **Header** — Sticky. Left: "FLUR" logotype (serif, bold). Center-left: "Products" dropdown, "About", "Warranty" links. Right: Cart icon with count. Clean white background with bottom border.
3. **Products Mega Menu** — Dropdown with categories: Glasses, Barista Tools, Sets, Gift Card. Each item shows product image, name, and size/description.
4. **Hero Section** — Full-bleed image (dark matcha-themed photo as placeholder), ~90vh. Overlay text: "The Matcha Set" heading + subtitle + "Buy Now" button (outlined white).
5. **Social Proof Bar** — ⭐⭐⭐⭐⭐ "60,000+ HAPPY COFFEE LOVERS" centered, border top/bottom.
6. **Sets Section** — Section title "Sets" + subtitle. Horizontal scrollable row of 4 product cards (Family Set $80, Latte Lovers $94, Espresso Lovers $85, Pourover Lovers $77). Cards show image, name, size, price (with original price crossed out where applicable).
7. **Glasses Section** — Title + subtitle. 2 rows of 4 product cards in a grid. Products: Espresso $35, Cortado $40, Tasting $40, Latte $40, Latte XL $40, Tasting $40, Iced Coffee $45, Carafe $25.
8. **Barista Tools Section** — Title + subtitle. Row of 4 cards: Happy Pucks $19, Mad Pucks $19, Coffee Tray $25, Carafe $25.
9. **Gift Card Banner** — Split layout: left side gift card image, right side "Gift FLUR" heading + description + "Shop Now" button.
10. **Reviews Section** — Star rating summary (2k product reviews, 577 store reviews). Horizontally scrollable review cards with reviewer name, "Verified" badge, date, review text, and product thumbnail.
11. **Footer** — Large "GLASSWARE + ACCESSORIES DESIGNED BY COFFEE LOVERS FOR COFFEE LOVERS." tagline. Two columns of product links. Row of support links (Help Center, Warranty, Contact, Terms, Refund, Privacy, Shipping). Repeating "FLUR GLASSWARE" text as decorative element.
12. **Cart Drawer** — Right-side slide-out panel with shipping progress bar, empty state with best-seller suggestions, shipping insurance toggle, payment icons.

### Design System
- **Background**: `#F9F8F6` (warm bone)
- **Foreground/Text**: `#1A1A1A`
- **Borders**: `#E5E2DD`
- **Accent**: `#736B5E`
- **Fonts**: Cormorant Garamond (serif, headings), Inter (sans, UI/body)
- **All corners**: `rounded-none` (sharp 90°)
- **No shadows** — borders only
- **Announcement bar**: black bg, white text, marquee animation
- **Buttons**: outlined or solid black, uppercase sans text

### Product Card Design
- Image with 3:4 aspect ratio
- Product name (serif)
- Size/description (sans, small, muted)
- Price (sans, small, tabular-nums)
- Sale prices show original crossed out

### Responsive
- Mobile: single-column product grids, hamburger menu, horizontally scrollable carousels
- Desktop: multi-column grids, mega dropdown menu

### Technical Notes
- Use actual product images from the CDN URLs captured from the site
- Framer Motion for marquee animation and staggered reveals
- React Router for page navigation
- Cart drawer using Sheet component
- All content uses real text from the original site

