import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const ProcessingNode = ({ id, data }) => {
  const handles = [
    { type: "source", position: Position.Right, id: "process" },
    { type: "target", position: Position.Left, id: "input" },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Processing"
      handles={handles}
      additionalStyles={{
        border: "2px solid blue",
        backgroundColor: "#e0e0ff",
      }}
    />
  );
};
