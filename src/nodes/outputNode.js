import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const handles = [{ type: "target", position: Position.Left, id: "value" }];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      handles={handles}
      additionalStyles={{ border: "1px solid red" }}
    />
  );
};
