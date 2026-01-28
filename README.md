# DxW Musicals Website

The official website for DxW Musicals, built with Next.js and deployed on Netlify.

🌐 **Live Site:** [https://dxwmusicals.com](https://dxwmusicals.com)

## Tech Stack

- **Framework:** Next.js 15.2.1
- **React:** 19.0.0
- **Styling:** Tailwind CSS 4.0.12
- **Language:** TypeScript 5.8.2
- **Deployment:** Netlify
- **Content:** Markdown + JSON

## Project Structure

```
DxWmusicals-website/
├── content/              # Content files
│   ├── data/
│   │   ├── config.json  # Site configuration
│   │   ├── style.json   # Theme and styling
│   │   └── team/        # Team member profiles (JSON)
│   └── pages/           # Page content (Markdown)
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # React components
│   │   ├── atoms/       # Basic UI elements
│   │   ├── molecules/   # Composite components
│   │   ├── sections/    # Page sections
│   │   └── layouts/     # Layout components
│   ├── pages/           # Next.js pages
│   │   ├── _app.js      # App wrapper
│   │   ├── [[...slug]].tsx  # Dynamic page routing
│   │   └── sitemap.xml.ts   # Sitemap generator
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
└── netlify.toml         # Netlify configuration
```

## Getting Started

### Prerequisites

- Node.js (recommended: latest LTS version)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DxW-Musicals/Netlify-website.git
cd DxWmusicals-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server

## Content Management

### Adding/Editing Pages

Pages are stored as Markdown files in `content/pages/`. Each page includes:

- Front matter (metadata)
- Content sections defined in YAML/JSON format
- Markdown content

**Example page structure:**
```markdown
---
type: PageLayout
title: Page Title
sections:
  - type: HeroSection
    title: Welcome
    # ... section configuration
---
```

### Managing Team Members

Team member profiles are stored as JSON files in `content/data/team/`:

```json
{
  "type": "Person",
  "firstName": "John",
  "lastName": "Doe",
  "role": "Position",
  "bio": "Bio text...",
  "image": "/images/person.jpg"
}
```

### Site Configuration

Edit `content/data/config.json` to update:
- Site header and navigation
- Footer content and links
- Contact information
- Social media links

## Features

### Automatic Sitemap Generation

The site automatically generates an XML sitemap at build time. The sitemap is accessible at `/sitemap.xml` and includes all pages from the `content/pages/` directory.

### Responsive Design

Built with Tailwind CSS for a fully responsive experience across all devices.

### Dynamic Routing

Uses Next.js dynamic routing (`[[...slug]].tsx`) to handle all page routes based on content files.

### Component-Based Architecture

Modular component structure with:
- **Atoms** - Basic UI elements (buttons, links, images)
- **Molecules** - Composite components (forms, cards)
- **Sections** - Page sections (hero, contact, featured items)
- **Layouts** - Page layouts and templates

## Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch.

### Netlify Configuration

Build settings are defined in `netlify.toml`:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Plugin:** `@netlify/plugin-nextjs`

### Manual Deployment

To deploy manually:

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `.next` directory and is ready for deployment.

## Development

### Code Style

- ESLint configuration: `.eslintrc.json`
- Prettier configuration: `.prettierrc`

### TypeScript

The project uses TypeScript with strict type checking. Type definitions are located in `src/types/`.

## License

MIT

## Support

For questions or issues, please contact the DxW Musicals team.

---

**© 2026 DxW Musicals. All rights reserved.**