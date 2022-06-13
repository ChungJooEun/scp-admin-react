import React from "react";
import ReactQuill from "react-quill";

import Toolbar from "./Toolbar";

const Editor = ({ moreInformation, onChangeMoreInformation, toolbarId }) => {
  const moduels = {
    toolbar: {
      container: toolbarId ? `#${toolbarId}` : "#toolbar-container",
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
      <Toolbar toolbarId={toolbarId ? toolbarId : "toolbar-container"} />
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
        value={moreInformation}
        onChange={(e) => onChangeMoreInformation(e)}
      />
    </div>
  );
};

export default Editor;
