import React from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import Spinner from "./Spinner";
import DisplayRecords from "./DisplayRecords";

const SearchResultContainer = () => {
  const { images, loading } = useSelector((state) => state.loadData);

  let content =
    images && images.length > 0
      ? images.map((image, index) => <ImageCard key={index} image={image} />)
      : null;

  return (
    <div data-testid="main-container" className="container">
      <div data-testid="section-container" className="container col-md-12">
        <DisplayRecords />
        <div className="row">{loading ? <Spinner /> : content}</div>
      </div>
    </div>
  );
};

export default SearchResultContainer;
