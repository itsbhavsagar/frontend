import React, { useState, useCallback } from "react";
import { Handle, Position } from "reactflow";
import TextareaAutosize from "react-textarea-autosize";
import { useStore } from "../store";
import { BsTextareaT } from "react-icons/bs";

export const TextNode = ({ id, data, isConnectable }) => {
  const [text, setText] = useState(data.text || "");
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

  // Get the variables and create handles dynamically
  const variables = extractVariables(text);

  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "auto", // Ensure width adjusts based on content
        minWidth: "150px", // Ensure a minimum width
      }}
    >
      {variables.map((variable, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={variable}
          style={{
            top: `${(100 / (variables.length + 1)) * (index + 1)}%`,
            background: "#555",
          }}
          isConnectable={isConnectable}
        />
      ))}
      <label>
        <BsTextareaT /> Text
        <TextareaAutosize
          text
          minRows={1}
          maxRows={50}
          value={text}
          onChange={handleTextChange}
          style={{
            width: "100%", // Allow text area to use full width of the container
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px",
            fontSize: "14px",
            boxSizing: "border-box", // Ensure padding and border are included in width
          }}
        />
      </label>
    </div>
  );
};
