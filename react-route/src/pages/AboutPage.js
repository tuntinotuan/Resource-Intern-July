import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="page-container">
      <p>This is AboutPage</p>
      <Link to="/" preventScrollReset>
        Back to Home
      </Link>
    </div>
  );
};

export default AboutPage;
