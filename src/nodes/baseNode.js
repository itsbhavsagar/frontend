import React from "react";
import { Handle, Position } from "reactflow";

// BaseNode component definition
export const BaseNode = React.memo(
  ({
    id,
    data,
    title,
    handles = [],
    additionalStyles = {},
    icon,
    children,
  }) => {
    return (
      <div
        style={{
          width: 220,
          // height: 200,
          border: "3px solid rgb(45, 191, 128)",
          padding: 10,
          ...additionalStyles,
        }}
      >
        {/* Container for the node's title and icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // backgroundColor: "rgb(215 221 218)",
            borderRadius: "3px",
            color: "#6563E3",
          }}
        >
          {/* Conditionally render the icon if provided */}
          {icon && <div style={{ marginRight: 8 }}>{icon}</div>}
          <span>{title}</span> {/* Render the node's title */}
        </div>

        {/* Render handles for connections */}
        {handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position} // Position of the handle (e.g., left, right, top, bottom)
            id={`${id}-${handle.id}`} // Unique ID for the handle
            style={handle.style} // Apply custom style to handle
          />
        ))}
        <div style={{ padding: "15px 10px 10px 10px" }}>{children}</div>
      </div>
    );
  }
);
