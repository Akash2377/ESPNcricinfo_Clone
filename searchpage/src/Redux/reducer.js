import * as type from "./actionType";
const initState = {
  todo: [],
  islogin: false,
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case type.GET_TODOS_SUCCESS:
      return { ...state, todo: action.payload };
    case type.ADD_TODOS_SUCCESS:
      return { ...state, todo: action.payload };
    case type.DELETE_TODOS_SUCCESS:
      return { ...state, todo: action.payload };
    case type.UPDATE_TODOS_SUCCESS:
      return { ...state, todo: action.payload };
    case type.IS_LOGIN:
      return { ...state, islogin: action.payload };
    default:
      return state;
  }
};
