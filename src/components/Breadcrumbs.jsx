import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <Link to="/">Home</Link>
      {paths.map((path, index) => {
        const url = "/" + paths.slice(0, index + 1).join("/");
        const label = path.replace(/-/g, " ");

        return (
          <span key={url}>
            {" / "}
            <Link to={url}>{label}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
