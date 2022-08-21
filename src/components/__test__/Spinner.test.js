import { render } from "@testing-library/react";
import Spinner from "../Spinner";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import allReducer from "../../reducers";

const store = createStore(allReducer, applyMiddleware(thunk));

describe("Test the Spinner Component", () => {
  test("Test the Spinner classes", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Spinner />
      </Provider>
    );
    const SpinnerContainer = getByTestId("spinner");
    expect(SpinnerContainer).toHaveClass("spinner-border");
  });
});
