import React from "react";

const useConfirm = (message = null, onConfirm) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };
  return confirmAction;
};

const FileComponent = ({
  id,
  fileInfo,
  deleteFile,
  type,
  requestDeleteFile,
}) => {
  const onHandleSaveBtn = () => {
    requestDeleteFile(fileInfo.idx, id);
  };

  const onClickDelBtn = useConfirm(
    `'${fileInfo.name}' 파일을 삭제하시겠습니까?\n삭제된 파일의 복구는 불가능합니다.`,
    onHandleSaveBtn
  );

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
                href={
                  type === "download"
                    ? `${process.env.REACT_APP_SERVICE_API}/community/${fileInfo.folder}/files/${fileInfo.fileName}`
                    : null
                }
                className="mr-8pt p-8pt bg-secondary rounded"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="material-icons icon-24pt text-white">
                  file_download
                </i>
              </a>

              <a
                href={
                  type === "download"
                    ? `${process.env.REACT_APP_SERVICE_API}/community/${fileInfo.folder}/files/${fileInfo.fileName}`
                    : null
                }
                className="flex d-flex flex-column"
              >
                <span className="text-100">{fileInfo.name}</span>
                <span className="text-50 lh-1">
                  {(fileInfo.size / 1024 / 1024).toFixed(2)} Mb
                </span>
              </a>

              <span
                className="text-70 text-underline mr-8pt"
                onClick={() =>
                  type === "add" ? deleteFile(id) : onClickDelBtn()
                }
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
