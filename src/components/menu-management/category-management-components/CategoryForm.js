import React from "react";
import { useHistory } from "react-router-dom";

const CategoryForm = ({
  type,
  categoryName,
  getCategoryName,
  onClickDeleteBtn,
  onClickSaveBtn,
}) => {
  const history = useHistory();

  return (
    <div className="list-group-item p-16pt">
      <div className="form-group">
        <label className="form-label" htmlFor="text">
          카테고리:
        </label>
        <input
          id="text"
          type="text"
          className="form-control"
          placeholder="카테고리 ..."
          value={categoryName}
          onChange={(e) => getCategoryName(e.target.value)}
        />
      </div>
      <button
        className="btn btn btn-secondary ml-16pt"
        onClick={() => history.push("/main-menu/category")}
      >
        취소
      </button>
      {type === "edit" && (
        <button className="btn btn-warning" onClick={() => onClickDeleteBtn()}>
          삭제
        </button>
      )}
      <button className="btn btn-success" onClick={() => onClickSaveBtn()}>
        저장
      </button>
    </div>
  );
};

export default CategoryForm;
