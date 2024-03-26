import { getAllPosts } from "@/lib/api";

const ADVENTURE_CODING_URL = 'https://www.adventurecoding.xyz';

export default async function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: `${ADVENTURE_CODING_URL}/posts/${post.slug}`,
    lastModified: post.date
  }));
 
  const routes = [""].map((route) => ({
    url: `${ADVENTURE_CODING_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts];
}
