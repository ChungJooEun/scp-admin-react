import React from "react";
import { Link } from "react-router-dom";

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

const AdminListItem = ({ adminInfo, no, deleteAdmin }) => {
  const onHandleDeleteAdmin = () => {
    deleteAdmin(adminInfo.idx);
  };

  const deleteAdminAlert = useConfirm(
    "선택하신 관리자를 삭제하시겠습니까?",
    onHandleDeleteAdmin
  );

  const onClickDeleteBtn = () => {
    deleteAdminAlert();
  };

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{no}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link
            to={`/admin/admin-account/${adminInfo.adminId}`}
            className="mr-4pt"
          >
            <strong>{adminInfo.adminId}</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link
            to={`/admin/admin-account/${adminInfo.adminId}`}
            className="mr-4pt"
          >
            <strong>이름</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>2021.01.01</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>2021.01.01 오후 1시</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{adminInfo.phone}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{adminInfo.memo}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <button
            className="btn btn-warning float-right"
            onClick={() => onClickDeleteBtn(adminInfo.idx)}
          >
            삭제
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminListItem;
