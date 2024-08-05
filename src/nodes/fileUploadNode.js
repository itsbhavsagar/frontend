import React, { useState } from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";
import { MdUpload } from "react-icons/md";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    display: "block",
    marginBottom: "8px",
  },
  fileName: {
    marginTop: "8px",
  },
};

export const FileUploadNode = ({ id, data }) => {
  // Destructure data
  const { file: initialFile } = data || {};
  const [file, setFile] = useState(initialFile || null);
  const [fileName, setFileName] = useState(initialFile?.name || "");

  const handles = [
    { type: "target", position: Position.Left, id: "start" },
    { type: "source", position: Position.Right, id: "start" },
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Upload File"
      icon={<MdUpload />}
      handles={handles}
      additionalStyles={{
        fontWeight: "bold",
        border: "3px solid rgb(45, 191, 128)",
        backgroundColor: "transparent",
        borderRadius: "3px",
      }}
    >
      <form style={styles.form}>
        <label
          htmlFor={`file-upload-${id}`}
          style={styles.label}
          aria-label="Upload File"
        >
          <span style={{ fontWeight: "none", fontSize: "12px" }}>
            Upload File
          </span>
        </label>
        <input
          id={`file-upload-${id}`}
          type="file"
          accept=".jpg, .png, .pdf"
          onChange={handleFileChange}
          aria-label="Upload File"
        />
        {fileName && <p style={styles.fileName}>Selected file: {fileName}</p>}
      </form>
    </BaseNode>
  );
};
