import React from "react";

const Child = (props, props1) => {
  const { brand } = props;
  const { car } = props1;

  return (
    <div>
      <p>I am a {brand}</p>
      <li>{car}</li>
    </div>
  );
};
export default Child;
