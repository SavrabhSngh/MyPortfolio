import { HIDE_MODAL, SHOW_MODAL } from "../actionTypes";

const initialState = {
  open: false,
  id: 0,
  category: "",
  totalLike: "",
  title: "",
  image: "",
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
