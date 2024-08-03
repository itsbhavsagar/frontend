import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const MergeNode = ({ id, data }) => {
  const handles = [
    { type: "source", position: Position.Right, id: "merge" },
    { type: "target", position: Position.Left, id: "input1" },
    { type: "target", position: Position.Left, id: "input2" },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Merge"
      handles={handles}
      additionalStyles={{
        border: "2px solid orange",
        backgroundColor: "#fff0e0",
      }}
    />
  );
};
