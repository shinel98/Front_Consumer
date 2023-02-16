import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Dropdown = (props) => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = React.useState(null);

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 400);
    }
  }, [props.visibility]);

  return (
    <article
      className={`${
        props.visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
      }`}
      style={{ backgroundColor: "white" }}
    >
      {visibilityAnimation && props.children}
    </article>
  );
};

export default Dropdown;
