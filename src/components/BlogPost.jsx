import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { getBlogBySlug, resolveImageSrc } from "../utils/blogLoader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let mounted = true;
    getBlogBySlug(slug).then((p) => { if (mounted) setPost(p); });
    return () => { mounted = false; };
  }, [slug]);

  if (!post) return <section className="blog-page"><div className="container blog-post-container"><p>Loading…</p></div></section>;

  // Map markdown images: if src is just a filename, try to resolve via imagesMap by leaving path
  const components = {
    img: ({ src, alt }) => {
      const isAbsolute = /^https?:\/\//.test(src) || src.startsWith("/");
      const resolved = isAbsolute ? src : resolveImageSrc(src);
      return <img src={resolved} alt={alt} style={{ maxWidth: "100%", borderRadius: 8 }} />;
    }
  };

  return (
    <section className="blog-page">
      <Helmet>
        <title>{post.title} | Pratidhi Therapy & Wellness</title>
        {post.description && <meta name="description" content={post.description} />}
      </Helmet>
      <div className="container blog-post-container">
        <Breadcrumbs />

        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-meta">{post.date} | {post.author}</p>

        <div className="blog-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
