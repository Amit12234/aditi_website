import matter from "gray-matter";

// Map images in src/images for Markdown image references
const imagesContext = require.context("../images", false, /\.(png|jpe?g|gif|svg)$/);
const imagesMap = imagesContext.keys().reduce((acc, key) => {
  const filename = key.replace("./", "");
  acc[filename] = imagesContext(key);
  return acc;
}, {});

// Load all Markdown files from src/components/blog.
// CRA will bundle .md as assets (URLs); we fetch the content at runtime and parse frontmatter.
const mdContext = require.context("../components/blog", true, /\.md$/);

async function parseMarkdownFromUrl(url, fallbackSlug) {
  const res = await fetch(url);
  const text = await res.text();
  const { data, content } = matter(text);

  const slug = (data.slug || fallbackSlug).replace(/\s+/g, "-").toLowerCase();
  const title = data.title || fallbackSlug;
  const date = data.date
    ? (typeof data.date === 'string' ? data.date : new Date(data.date).toISOString().slice(0,10))
    : new Date().toISOString().slice(0, 10);
  const author = data.author || "Pratidhi Therapy & Wellness";
  const tags = Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []);
  const description = data.description || (content.split(/\n\n+/)[0] || "").replace(/\n/g, " ");
  const cover = data.cover && (imagesMap[data.cover] || data.cover);

  return {
    slug,
    title,
    date,
    author,
    tags,
    description,
    excerpt: description,
    cover,
    content,
  };
}

export async function getAllBlogs() {
  const keys = mdContext.keys();
  const posts = await Promise.all(
    keys.map(async (key) => {
      const url = mdContext(key);
      const fallbackSlug = key.replace("./", "").replace(/\.md$/, "");
      return parseMarkdownFromUrl(url, fallbackSlug);
    })
  );
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getBlogBySlug(slug) {
  const posts = await getAllBlogs();
  return posts.find((p) => p.slug === slug);
}

export async function getAllTags() {
  const posts = await getAllBlogs();
  const set = new Set();
  posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export async function getPostsByTag(tag) {
  const posts = await getAllBlogs();
  if (!tag) return posts;
  return posts.filter((p) => p.tags.includes(tag));
}

export function resolveImageSrc(name) {
  return imagesMap[name] || name;
}
