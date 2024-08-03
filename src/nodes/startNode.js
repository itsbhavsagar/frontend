import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const StartNode = ({ id, data }) => {
  const handles = [{ type: "source", position: Position.Right, id: "start" }];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Start"
      handles={handles}
      additionalStyles={{
        border: "2px solid green",
        backgroundColor: "#e0ffe0",
      }}
    />
  );
};
