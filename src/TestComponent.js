import React, { useCallback, useEffect, useRef, useState } from "react";

export const TestComponent = ({ count, onChange }) => {
  const [distance, setDistance] = useState(0);

  const countRef = useRef(null);
  const isDragged = useRef(null);

  const distanceRef = useRef(null);
  useEffect(() => {
    distanceRef.current = distance;
  },[distance])

  countRef.current = count;

  const onMouseDown = () => {
    isDragged.current = true;
  };

  const onMouseUp = () => {
    if (!isDragged.current) {
      return;
    }
    isDragged.current = false;
    onChange(distanceRef.current);
  }

  const onMouseMove = () => {
    if (!isDragged.current) {
      return;
    }

    setDistance((d) => d + 1);
  }

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousedown", onMouseUp);
      document.removeEventListener("mousedown", onMouseMove);
    };
  }, []);

  return (
    <>
      <p onMouseDown={onMouseDown}>
        Hello I'm TestComponent {count}: {distance}
      </p>
    </>
  );
};
