import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, receiveSearchInput, fetchUserData } from "../actions";

const Navbar = () => {
  const search = useSelector((state) => state.searchInput);
  const dispatch = useDispatch();

  const onChange = (e) => dispatch(receiveSearchInput(e.target.value));

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(fetchUserData(search));
  };

  return (
    <nav id="navbar" className="navbar navbar-dark bg-dark p-3">
      <div className="container">
        <form
          data-testid="form"
          className="d-flex"
          onSubmit={onSubmit}
          onChange={onChange}
        >
          <input
            className="form-control mr-sm-2 mr-3"
            type="search"
            placeholder="Search for an image"
            aria-label="Search"
            required
          />
          <button className="btn btn-outline-warning" type="submit">
            SEARCH
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
