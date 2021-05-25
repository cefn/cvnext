import React, { FunctionComponent } from "react";

export const Controls: FunctionComponent = ({}) => {
  return (
    <>
      <label>
        Number of Engagements <input type="range" id="limit" min={0} max={10} />
      </label>
    </>
  );
};
