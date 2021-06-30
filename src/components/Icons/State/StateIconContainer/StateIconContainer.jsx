import React from "react";

export function StateIconContainer({ children }) {
  return (
    <div style={{ width: "fit-content" }} className='p-xs'>
      <div style={{ width: "fit-content", margin: "0 1px" }}>{children}</div>
    </div>
  );
}

StateIconContainer.defaultProps = {};
