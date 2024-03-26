import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { ServerResponse } from "http";

//pages/sitemap.xml.js
const ADVENTURE_CODING_URL = 'https://www.adventurecoding.xyz';

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${ADVENTURE_CODING_URL}</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${ADVENTURE_CODING_URL}/posts/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }: { res : ServerResponse }) {
  // We make an API call to gather the URLs for our site
  const posts = getAllPosts();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
};