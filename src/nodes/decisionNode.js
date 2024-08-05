import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";
import { MdTransform } from "react-icons/md";

export const DecisionNode = ({ id, data }) => {
  const handles = [
    { type: "source", position: Position.Right, id: "decision" },
    { type: "target", position: Position.Left, id: "input" },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      icon={<MdTransform />}
      title="Decision"
      handles={handles}
      additionalStyles={{
        border: "3px solid #2DBF80",
        fontWeight: "bold",
        borderRadius: "4px",
      }}
    >
      <div>
        <span style={{ fontSize: "14px" }}>This is a decision Node</span>
      </div>
    </BaseNode>
  );
};
