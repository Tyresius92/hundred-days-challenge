import React from "react";
import { Card as BPCard } from "@blueprintjs/core";

const Card = ({ children, title, textAlign }) => {
  return (
    <BPCard style={{ margin: "20px", textAlign }} elevation={4}>
      {title && <h1 style={{ textAlign: "center" }}>{title}</h1>}
      {children}
    </BPCard>
  );
};

export default Card;
