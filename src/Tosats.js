import React from "react";
import "./Global.scss";
import * as PropTypes from "prop-types";
const Toast = ({ setToast, text }) => {
  return (
    <div
      className="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <strong className="me-auto">Information</strong>
        <div></div>
        <button
          type="button"
          className="btn-close ms-2 mb-1 e"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={() => setToast(false)}
        >
          <span aria-hidden="true"> X</span>
        </button>
      </div>
      <div className="toast-body">{text}</div>
    </div>
  );
};

Toast.propTypes = {
  setToast: PropTypes.func,
  text: PropTypes.string
};

export default Toast;
