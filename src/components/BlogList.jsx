import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getAllBlogs, getAllTags } from "../utils/blogLoader";
import Breadcrumbs from "../components/Breadcrumbs";

const PAGE_SIZE = 6;

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    Promise.all([getAllBlogs(), getAllTags()]).then(([all, t]) => {
      if (!mounted) return;
      setPosts(all);
      setTags(t);
    });
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    const f = selectedTag ? posts.filter(p => p.tags.includes(selectedTag)) : posts;
    setPage(1);
    return f;
  }, [posts, selectedTag]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <section className="blog-list-page">
      <div className="container">
        <Breadcrumbs />
        <h1 className="blog-page-title">Blog</h1>

        <div className="blog-filters">
          <button
            className={`tag-chip ${selectedTag === null ? 'active' : ''}`}
            onClick={() => setSelectedTag(null)}
          >All</button>
          {tags.map(tag => (
            <button
              key={tag}
              className={`tag-chip ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >{tag}</button>
          ))}
        </div>

        <div className="blog-list">
          {visible.map(blog => (
            <article key={blog.slug} className="blog-card">
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-card-date">{blog.date}</p>
              <p className="blog-card-excerpt">{blog.excerpt}</p>
              <Link className="blog-readmore" to={`/blog/${blog.slug}`}>Read More →</Link>
            </article>
          ))}
        </div>

        <div className="pagination">
          <button disabled={page<=1} onClick={() => setPage(p => Math.max(1, p-1))}>Prev</button>
          <span className="page-info">Page {page} / {pageCount}</span>
          <button disabled={page>=pageCount} onClick={() => setPage(p => Math.min(pageCount, p+1))}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
