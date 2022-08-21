import { render } from "@testing-library/react";
import ImageCard from "../ImageCard";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import allReducer from "../../reducers";

const store = createStore(allReducer, applyMiddleware(thunk));

describe("Test the Image Component", () => {
  test("Test the ImageCard Text", async () => {
    const image = {
      urls: { regular: "test" },
      alt_description: "alt_description",
    };
    const { getByTestId } = render(
      <Provider store={store}>
        <ImageCard image={image} />
      </Provider>
    );
    const ImageCardTest = getByTestId("image-card-div");
    expect(ImageCardTest).toHaveClass("col-md-3 mb-5");
    const ImageCardBodyTest = getByTestId("image-card-body-div");
    expect(ImageCardBodyTest).toHaveClass(
      "card card-body bg-dark text-center h-100"
    );
    const ImageCardTitle = getByTestId("image-card-title");
    expect(ImageCardTitle).toHaveClass("text-light card-title align-middle");
  });
});
