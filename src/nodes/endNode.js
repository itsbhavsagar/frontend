import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const EndNode = ({ id, data }) => {
  const handles = [{ type: "target", position: Position.Left, id: "end" }];

  return (
    <BaseNode
      id={id}
      data={data}
      title="End"
      handles={handles}
      additionalStyles={{ border: "2px solid red", backgroundColor: "#ffe0e0" }}
    />
  );
};
