import React, { useState } from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";
import { GiProcessor } from "react-icons/gi";

export const ProcessingNode = ({ id, data }) => {
  const handles = [
    { type: "source", position: Position.Right, id: "process" },
    { type: "target", position: Position.Left, id: "input" },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      icon={<GiProcessor />}
      title="Processing"
      handles={handles}
      additionalStyles={{
        border: "3px solid #2DBF80",
        fontWeight: "bold",
        borderRadius: "4px",
      }}
    >
      <div>
        <span style={{ fontSize: "14px" }}>This is a processing Node</span>
      </div>
    </BaseNode>
  );
};
