import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: "target", position: Position.Left, id: "system" },
    { type: "target", position: Position.Left, id: "prompt" },
    { type: "source", position: Position.Right, id: "response" },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      handles={handles}
      additionalStyles={{ border: "1px solid green" }}
    />
  );
};
