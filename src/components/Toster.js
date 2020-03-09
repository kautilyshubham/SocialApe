import keyConst from "../network/keyConst";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: true,
  position: toast.POSITION.TOP_RIGHT
});

export const ShowToast = (type, message) => {
  switch (type) {
    case keyConst.TOAST_SUCCESS:
      toast.success(message);
      break;
    case keyConst.TOAST_DANGER:
      toast.error(message);
      break;

    case keyConst.TOAST_WARN:
      toast.warn(message);
      break;

    default:
      toast.success(message);
  }
};
