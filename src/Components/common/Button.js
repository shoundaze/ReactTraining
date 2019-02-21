import React from "react";

const Button = ({ text, outline }) => {
  console.log(outline);
  const styleClass = outline
    ? "btn btn-lg btn-block btn-outline-primary"
    : "btn btn-lg btn-block btn-primary";
  return (
    <button type="button" className={styleClass}>
      {text}
    </button>
  );
};
export default Button;
