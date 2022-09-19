
const initialState = {
    numOfItems: 0,
  };
  
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          numOfItems: state.numOfItems + 1,
        };
  
      case "delete":
        return {
          ...state,
          numOfItems: state.numOfItems - 1,
        };
      default:
        return state;
    }
  };


  export default   authReducer