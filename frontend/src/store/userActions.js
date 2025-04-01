// import { setEmail } from "./store";

// export const setUserEmail = (email) => (dispatch) => {
//   dispatch(setEmail(email));
// };
// userActions.js
export const setemail = (email) => ({
  type: 'SET_EMAIL',
  payload: email,
});