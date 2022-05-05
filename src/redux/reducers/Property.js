var initialState = {
  serviceAgent:"",
  serviceHistory:"",
  singleListing:""
}

const Property = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PROPERTY":
        return {
          ...state,
          propertyDetail: payload,
        }
    default:
    return state;
  }
};
export default Property;
