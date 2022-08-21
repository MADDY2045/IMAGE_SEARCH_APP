import React from "react";

const Spinner = () => {
  return (
    <div data-testid="spinner" className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
