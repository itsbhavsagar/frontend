import React, { useState } from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";
import { BiAnalyse } from "react-icons/bi";

export const ResultNode = ({ id, data }) => {
  const handles = [
    // { type: "source", position: Position.Right, id: "process" },
    { type: "source", position: Position.Left, id: "input" },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      icon={<BiAnalyse />}
      title="Result"
      handles={handles}
      additionalStyles={{
        border: "3px solid #2DBF80",
        fontWeight: "bold",
        borderRadius: "4px",
      }}
    >
      <div>
        <span style={{ fontSize: "14px" }}>This is a result Node</span>
      </div>
    </BaseNode>
  );
};
