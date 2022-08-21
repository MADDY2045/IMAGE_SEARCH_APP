import React from "react";

const ImageCard = ({
  image: {
    urls: { regular },
    alt_description,
  },
}) => {
  return (
    <div
      data-testid="image-card-div"
      className="col-md-3 mb-5"
      id="image-card-container"
    >
      <div
        data-testid="image-card-body-div"
        className="card card-body bg-dark text-center h-100"
      >
        <img
          id="img-all"
          className="w-100 mb-2"
          src={regular}
          alt="Image Cover"
        />
        <small
          data-testid="image-card-title"
          className="text-light card-title align-middle"
        >
          {alt_description}
        </small>
      </div>
    </div>
  );
};

export default ImageCard;
