const receiveSearchInput = (state = "", action) => {
  switch (action.type) {
    case "RECEIVE_INPUT":
      return (state = action.payload);

    default:
      return state;
  }
};
export default receiveSearchInput;
