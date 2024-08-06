const intitalState = {
    data: [],
  };
  
  export const productReducer = (state = intitalState, { type, payload }) => {
    switch (type) {
      case "FETCHED DATA":
        return {
          ...state,
          data: payload,
        };
      default:
        return state;
    }
  };
  