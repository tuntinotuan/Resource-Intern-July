import React from "react";
import { Link } from "react-router-dom";

const exampleRelativeLinks = [
  { to: "abc" },
  { to: "." },
  { to: ".." },
  { to: "..", relative: "path" },
];

const RelativeLinksPage = () => {
  return (
    <div className="page-container">
      {exampleRelativeLinks &&
        exampleRelativeLinks.map((items) => (
          <Link
            to={items.to}
            relative={items.relative}
            key={items.to}
            className="border border-gray-200 p-4 rounded-md hover:bg-gray-50 transition-all"
          >{`<Link to="${items.to}" ${
            items.relative ? `relative="${items.relative}"` : ""
          }>`}</Link>
        ))}
    </div>
  );
};

export default RelativeLinksPage;
