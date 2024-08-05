import React from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";
import { MdOutlineMergeType } from "react-icons/md";

export const MergeNode = ({ id, data }) => {
  const handles = [
    { type: "source", position: Position.Right, id: "merge" },
    { type: "target", position: Position.Left, id: "input1" },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      icon={<MdOutlineMergeType />}
      title="Merge"
      handles={handles}
      additionalStyles={{
        border: "3px solid #2DBF80",
        fontWeight: "bold",
        borderRadius: "4px",
      }}
    >
      <div>
        <span style={{ fontSize: "14px" }}>This is a merge Node</span>
      </div>
    </BaseNode>
  );
};
