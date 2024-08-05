import React, { useState, useCallback } from "react";
import { BaseNode } from "./baseNode";
import { Handle, Position } from "reactflow";
import TextareaAutosize from "react-textarea-autosize";
import { useStore } from "../store";
import { BsTextareaT } from "react-icons/bs";

export const TextNode = ({ id, data, isConnectable }) => {
  const [text, setText] = useState(data?.text || "{{input}}");

  const { updateNodeField, nodes } = useStore((state) => ({
    updateNodeField: state.updateNodeField,
    nodes: state.nodes,
  }));

  // Update node data with the current text
  const handleTextChange = useCallback(
    (event) => {
      const newText = event.target.value;
      setText(newText);
      updateNodeField(id, "text", newText);
    },
    [id, updateNodeField]
  );

  // Extract variables surrounded by double curly brackets
  const extractVariables = (text) => {
    const regex = /{{\s*(\w+)\s*}}/g;
    const variables = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      variables.push(match[1]);
    }
    return variables;
  };

  const variables = extractVariables(text);

  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgb(45, 191, 128)",
        width: "auto",
        minWidth: "150px",
        position: "relative",
      }}
    >
      {/* Left-side handles */}

      {variables.map((variable, index) => (
        <Handle
          key={`left-${variable}`}
          type="target"
          position={Position.Left}
          id={`left-${variable}`}
          style={{
            top: `${(100 / (variables.length + 1)) * (index + 1)}%`,
            background: "#555",
          }}
          isConnectable={isConnectable}
        />
      ))}

      {/* Right-side handle */}

      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{
          top: "50%", // Center vertically
          background: "#555",
        }}
        isConnectable={isConnectable}
      />

      <label>
        <div style={{ fontWeight: "bold" }}>
          <BsTextareaT /> Text
        </div>

        <TextareaAutosize
          text
          minRows={1}
          maxRows={50}
          value={text}
          onChange={handleTextChange}
          style={{
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />
      </label>
    </div>
  );
};
