import { render } from "@testing-library/react";
import DisplayRecords from "../DisplayRecords";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import allReducer from "../../reducers";

const store = createStore(allReducer, applyMiddleware(thunk));

describe("Test the DisplayRecords Component", () => {
  test("Test the DisplayRecords Text", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DisplayRecords />
      </Provider>
    );
    const DisplayRecordsTest = getByTestId("div");
    expect(DisplayRecordsTest).toBeTruthy();
  });
});
