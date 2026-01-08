import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../utils/blogLoader";

const BlogPreview = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAllBlogs().then((all) => {
      if (mounted) setBlogs(all.slice(0, 3));
    });
    return () => { mounted = false; };
  }, []);

  return (
    <section className="blog">
      <div className="container">
        <h2>From Our Blog</h2>

        <div className="blog-posts">
          {blogs.map(blog => (
            <div key={blog.slug} className="blog-post">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>

              <Link to={`/blog/${blog.slug}`}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
