import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const DecisionNode = ({ id, data }) => {
  const handles = [
    { type: "source", position: Position.Right, id: "decision" },
    { type: "target", position: Position.Left, id: "input" }, 
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Decision"
      handles={handles}
      additionalStyles={{
        border: "2px solid purple",
        backgroundColor: "#f0e0ff",
      }}
    />
  );
};
