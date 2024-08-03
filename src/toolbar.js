// toolbar.js
import { DraggableNode } from "./draggableNode";
// Imported icons from react-icons
import { FaGenderless } from "react-icons/fa";
import { FcProcess, FcDecision, FcGenealogy } from "react-icons/fc";
import { MdInput, MdTextFields, MdOutput, MdStart } from "react-icons/md";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#2DBF80",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ marginBottom: "20px", color: "#343a40" }}>
        Toolbar
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <DraggableNode
          type="customInput"
          label="Input"
          icon={<MdInput size={18} />}
        />
        <DraggableNode type="llm" label="LLM" icon={<MdInput size={18} />} />
        <DraggableNode
          type="customOutput"
          label="Output"
          icon={<MdOutput size={18} />}
        />
        <DraggableNode
          type="text"
          label="Text"
          icon={<MdTextFields size={18} />}
        />
        <DraggableNode
          type="start"
          label="Start"
          icon={<MdStart size={18} />}
        />
        <DraggableNode
          type="end"
          label="End"
          icon={<FaGenderless size={18} />}
        />
        <DraggableNode
          type="processing"
          label="Processing"
          icon={<FcProcess size={18} />}
        />
        <DraggableNode
          type="decision"
          label="Decision"
          icon={<FcDecision size={18} />}
        />
        <DraggableNode
          type="merge"
          label="Merge"
          icon={<FcGenealogy size={18} />}
        />
      </div>
    </div>
  );
};
