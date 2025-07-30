# LHFP Sanity Studio

This is the Sanity Studio for managing content on the LHFP Consulting website.

## Setup

1. Copy `.env.development` to `.env.development.local` and add your Sanity project credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The studio will be available at http://localhost:3333

## Schemas

The studio includes the following schemas:

- **Case Study**: Client work examples with problem/observation/solution/results structure
- **Blog Post**: Technical articles with rich text, code blocks, and categories
- **Author**: Blog post authors with bios and social links
- **Category**: Blog post categories

## Deployment

To deploy the studio:

```bash
npm run deploy
```

This will deploy to your Sanity project's hosted studio.