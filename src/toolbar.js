// toolbar.js
import { DraggableNode } from "./draggableNode";
import { GiProcessor } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";
import {
  MdInput,
  MdTransform,
  MdTextFields,
  MdOutput,
  MdUpload,
  MdOutlineMergeType,
} from "react-icons/md";

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
      <h3 style={{ marginBottom: "10px", color: "#1C2536" }}>Toolbar</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode
          type="customInput"
          label="Input"
          icon={<MdInput size={18} />}
        />
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
        <DraggableNode type="llm" label="LLM" icon={<MdInput size={18} />} />

        <DraggableNode
          type="fileUpload"
          label="File Upload"
          icon={<MdUpload size={18} />}
        />

        <DraggableNode
          type="processing"
          label="Processing"
          icon={<GiProcessor size={18} />}
        />
        <DraggableNode
          type="decision"
          label="Decision"
          icon={<MdTransform size={18} />}
        />
        <DraggableNode
          ResultNode
          type="merge"
          label="Merge"
          icon={<MdOutlineMergeType size={18} />}
        />

        <DraggableNode
          type="result"
          label="Result"
          icon={<BiAnalyse size={18} />}
        />
      </div>
    </div>
  );
};
