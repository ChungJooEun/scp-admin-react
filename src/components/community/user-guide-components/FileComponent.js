import React from "react";

const FileComponent = ({ id, fileInfo, deleteFile }) => {
  return (
    <div className="list-group-item">
      <div
        role="group"
        aria-labelledby="label-question"
        className="m-0 form-group"
      >
        <div className="form-row align-items-center">
          <label
            id="label-question"
            for="question"
            className="col-md-2 col-form-label form-label"
          >
            첨부파일
          </label>
          <div className="col-md-10">
            <span className="d-flex align-items-center border-1 rounded mb-0 p-8pt">
              <a
                href=""
                className="mr-8pt p-8pt bg-secondary rounded"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="material-icons icon-24pt text-white">
                  file_download
                </i>
              </a>

              <a href="" className="flex d-flex flex-column">
                <span className="text-100">{fileInfo.name}</span>
                <span className="text-50 lh-1">
                  {(fileInfo.size / 1024 / 1024).toFixed(2)} Mb
                </span>
              </a>

              <span
                className="text-70 text-underline mr-8pt"
                onClick={() => deleteFile(id)}
              >
                삭제
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FileComponent;
