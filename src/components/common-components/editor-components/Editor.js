import React from "react";
import ReactQuill from "react-quill";

import Toolbar from "./Toolbar";

const Editor = () => {
  const moduels = {
    toolbar: {
      container: "#toolbar-container",
    },
  };

  const formats = [
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "ordered",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "color",
    "background",
  ];

  return (
    <div className="flex" style={{ maxWidth: "100%" }}>
      <Toolbar />
      <ReactQuill
        theme="snow"
        modules={moduels}
        formats={formats}
        placeholder="상세소개"
        formula={true}
        syntax={true}
        style={{
          height: "450px",
          background: "#fff",
        }}
      />
    </div>
  );
};

export default Editor;
