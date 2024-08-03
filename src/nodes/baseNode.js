import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  data,
  title,
  handles = [],
  additionalStyles = {},
  icon,
}) => {
  const [currName, setCurrName] = React.useState(
    data?.name || id.replace(/^[a-zA-Z]+-/, "")
  );

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  return (
    <div
      style={{
        width: 220,
        height: 100,
        border: "1px solid black",
        padding: 10,
        ...additionalStyles,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {icon && <div style={{ marginRight: 8 }}>{icon}</div>}{" "}
        {/* Render icon */}
        <span>{title}</span>
      </div>
      <div>
        <label>
          <span>Name:</span>
          <input
            style={{ width: "200px" }}
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
        />
      ))}
    </div>
  );
};
