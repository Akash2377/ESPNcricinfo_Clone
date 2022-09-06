import * as types from "./actionType";
const todosGetSuccess = (payload) => {
  return { type: types.GET_TODOS_SUCCESS, payload: payload };
};
const addTodosSuccess = (payload) => {
  return { type: types.ADD_TODOS_SUCCESS, payload: payload };
};
const updateTodosSuccess = (payload) => {
  return { type: types.UPDATE_TODOS_SUCCESS, payload: payload };
};
const deleteTodosSuccess = (payload) => {
  return { type: types.DELETE_TODOS_SUCCESS, payload: payload };
};
const isLogin = (payload) => {
  return { type: types.IS_LOGIN, payload: payload };
};
export {
  todosGetSuccess,
  addTodosSuccess,
  updateTodosSuccess,
  deleteTodosSuccess,
  isLogin,
};
