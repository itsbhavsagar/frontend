import React from "react";
import { Handle, Position } from "reactflow";

// BaseNode component definition
export const BaseNode = React.memo(
  ({ id, data, title, handles = [], additionalStyles = {}, icon }) => {
    // Initialize state for the current name of the node, using either the data.name or a default based on the node id
    const [currName, setCurrName] = React.useState(
      data?.name || id.replace(/^[a-zA-Z]+-/, "")
    );

    // Handle changes in the input field
    const handleNameChange = (e) => {
      setCurrName(e.target.value);
    };

    return (
      <div
        style={{
          width: 220, // Set a fixed width for the node
          height: 100, // Set a fixed height for the node
          border: "1px solid black", // Add a border around the node
          padding: 10, // Add padding inside the node
          ...additionalStyles, // Apply any additional styles passed as props
        }}
      >
        {/* Container for the node's title and icon */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Conditionally render the icon if provided */}
          {icon && <div style={{ marginRight: 8 }}>{icon}</div>}
          <span>{title}</span> {/* Render the node's title */}
        </div>
        {/* Input field for editing the node's name */}
        <div>
          <label htmlFor={`name-${id}`}>
            <span>Name:</span>
            <input
              id={`name-${id}`} // Unique ID for the input field for accessibility
              style={{ width: "200px" }} // Set a fixed width for the input field
              type="text"
              value={currName} // Value controlled by state
              onChange={handleNameChange} // Update state on input change
              aria-label="Node name" // Accessibility label for screen readers
            />
          </label>
        </div>
        {/* Render handles for connections */}
        {handles.map((handle) => (
          <Handle
            key={handle.id} // Unique key for each handle to help React identify elements
            type={handle.type} // Type of the handle (e.g., source or target)
            position={handle.position} // Position of the handle (e.g., left, right, top, bottom)
            id={`${id}-${handle.id}`} // Unique ID for the handle
          />
        ))}
      </div>
    );
  }
);
