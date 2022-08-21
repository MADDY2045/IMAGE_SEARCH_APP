import { render } from "@testing-library/react";
import SearchResultContainer from "../SearchResultContainer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import allReducer from "../../reducers";

const store = createStore(allReducer, applyMiddleware(thunk));

describe("Test the DisplayRecords Component", () => {
  test("Test the DisplayRecords Text", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SearchResultContainer />
      </Provider>
    );
    const SectionContainer = getByTestId("section-container");
    expect(SectionContainer).toHaveClass("container col-md-12");
    const MainContainer = getByTestId("main-container");
    expect(MainContainer).toHaveClass("container");
  });
});
