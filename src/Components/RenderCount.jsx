import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";

const RenderCount = () => {
  const ref = useRef(null);

  const [inputval, setinputval] = useState("");
  const cnt = useRef(0);
  const Ip = useRef();
  const Focus = () => {
    Ip.current.focus();
  };

  useEffect(() => {
    console.log(ref.current);
    cnt.current += cnt.current;
  }, []);

  return (
    <div>
      <input
        className="mb-3"
        type="text"
        value={inputval}
        onChange={(e) => setinputval(e.target.value)}
      />
      <br />
      <Button onClick={Focus}>Focus</Button>
      <h2>Render Count:{cnt.current}</h2>
    </div>
  );
};
export default RenderCount;

export const FocusInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
};
