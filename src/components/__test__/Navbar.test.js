import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import allReducer from "../../reducers";

const store = createStore(allReducer, applyMiddleware(thunk));

describe("Test the Navbar Component", () => {
  test("Test the Navbar if it has a header titled URL SHORTENER APP", async () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const NavbarHeader = getAllByRole("navigation");
    expect(NavbarHeader).toBeTruthy();
  });
});

describe("Test the Navbar Search Box Component", () => {
  test("Test the Navbar if it has a Search Box", async () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const SearchBox = getAllByRole("searchbox");
    const searchBox = screen.getByRole("searchbox", { name: /search/i });
    expect(searchBox).toHaveAttribute("type", "search");
    expect(searchBox).toHaveClass("form-control mr-sm-2 mr-3");
    expect(SearchBox).toBeTruthy();
  });
});

describe("Test the Navbar Button Component ", () => {
  test("Test the Navbar if it has a button enabled and a defined classname and text label", async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
    const primaryButton = screen.getByRole("button", { name: /SEARCH/i });
    expect(primaryButton).toHaveAttribute("type", "submit");
    expect(primaryButton).toHaveClass("btn btn-outline-warning");
    expect(primaryButton).not.toBeDisabled();
  });
});
