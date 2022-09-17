import { HIDE_MODAL, SHOW_MODAL } from "../actionTypes";

export const showModal = (modal) => {
  return {
    type: SHOW_MODAL,
    payload: modal,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
