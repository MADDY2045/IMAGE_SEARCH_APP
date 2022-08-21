import React from "react";

const FooterComponent = () => {
  return (
    <footer id="footer" className="text-light bg-dark">
      <h5>
        <span className="span-class">
          &copy;Madhavan {new Date().getFullYear().toString()}
        </span>
      </h5>
    </footer>
  );
};

export default FooterComponent;
