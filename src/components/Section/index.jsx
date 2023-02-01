import React from "react";
import "./style.css";
export function Section(props) {
  return (
    <div className="section-container" {...props}>
      {props.children}
    </div>
  );
}
