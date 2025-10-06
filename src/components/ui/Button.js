import React from "react";

export default function Button({ as: Tag = "button", variant="primary", className="", children, ...props }) {
  const base = "btn";
  const styles = variant === "outline" ? "btn-outline" : "btn-primary";
  return (
    <Tag className={[base, styles, className].join(" ")} {...props}>
      {children}
    </Tag>
  );
}