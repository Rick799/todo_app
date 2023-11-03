/* eslint react/prop-types: 0 */

import { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  // Set up a timer to remove the alert after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    // Clean up the timer when the 'list' prop changes or the component unmounts
    return () => clearTimeout(timeout);
  }, [list]);

  // Render the alert with the specified type and message
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
