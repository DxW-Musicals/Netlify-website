import fs from 'fs';
import { GetServerSideProps } from 'next';
import path from 'path';

function generateSiteMap(pages: string[]): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
         .map((page) => {
             return `
       <url>
           <loc>https://dxwmusicals.com${page}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>${page === '/' ? '1.0' : '0.8'}</priority>
       </url>
     `;
         })
         .join('')}
   </urlset>
 `;
}

function getPages(): string[] {
    const pagesDirectory = path.join(process.cwd(), 'content/pages');
    const filenames = fs.readdirSync(pagesDirectory);

    const pages = filenames
        .filter((filename) => filename.endsWith('.md'))
        .map((filename) => {
            // Convert filename to URL path
            if (filename === 'index.md') {
                return '/';
            }
            // Remove .md extension and add trailing slash
            return `/${filename.replace('.md', '')}/`;
        });

    return pages;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    // Generate the sitemap
    const pages = getPages();
    const sitemap = generateSiteMap(pages);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default function SiteMap() {
    // getServerSideProps will do the heavy lifting
    return null;
}