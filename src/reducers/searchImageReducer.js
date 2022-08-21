const initialState = {
  text: "",
  images: [],
  loading: false,
};

const loadData = (state = initialState, action) => {
  // console.log('inside loaddata state: ',state);
  switch (action.type) {
    case "FETCH_IMAGES":
      return {
        ...state,
        images: action.payload,
        loading: false,
      };

    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default loadData;
