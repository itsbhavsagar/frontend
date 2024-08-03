import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";
import { FcMultipleInputs } from "react-icons/fc";

export const InputNode = ({ id, data }) => {
  const handles = [{ type: "source", position: Position.Right, id: "value" }];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      handles={handles}
      additionalStyles={{ border: "2px solid #2DBF80" }}
      icon={<FcMultipleInputs size={18} />}
    />
  );
};
