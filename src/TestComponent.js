import React, { useEffect, useRef, useState } from "react";

export const TestComponent = ({ count, onChange }) => {
  const [distance, setDistance] = useState(0);

  const countRef = useRef(null);
  const isDragged = useRef(null);

  countRef.current = count;

  const onMouseDown = () => {
    console.log("!!!");
    isDragged.current = true;
  };

  useEffect(() => {
    const onMouseUp = () => {
      if (!isDragged.current) {
        return;
      }
      isDragged.current = false;
      onChange(distance);
    };

    const onMouseMove = () => {
      if (!isDragged.current) {
        return;
      }

      setDistance((d) => d + 1);
    };

    console.log("Effect init")
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      console.log("Effect return")
      document.removeEventListener("mousedown", onMouseUp);
      document.removeEventListener("mousedown", onMouseMove);
    };
  }, []);

  return (
    <>
    {console.log("rerender")}
    <p onMouseDown={onMouseDown}>
      Hello I'm TestComponent {count}: {distance}
    </p>
    </>
  );
};
