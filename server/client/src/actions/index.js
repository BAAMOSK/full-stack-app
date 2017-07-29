//axios gets backend data
import axios from "axios";
//thunk handles async actions
import { FETCH_USER } from "./types";

//action creators return an action -- creators expects an action right away
//action -- return a js object type and payload

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
