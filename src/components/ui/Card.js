import React from "react";

export function Card({ className="", children }) {
  return <div className={["card", className].join(" ")}>{children}</div>;
}
export function CardInner({ className="", children }) {
  return <div className={["card-inner", className].join(" ")}>{children}</div>;
}