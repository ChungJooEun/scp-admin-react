import React from "react";

const AdminListItem = () => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <a href="admin-account.html" className="mr-4pt">
            <strong>이름</strong>
          </a>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <a href="admin-account.html" className="mr-4pt">
            <strong>이름</strong>
          </a>
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
          <span>000-0000-0000</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>메모내용</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <button
            className="btn btn-warning float-right"
            data-toggle="swal"
            data-swal-title="정말 삭제 하시겠습니까??"
            data-swal-text="이 동작은 다시 되돌릴 수 없습니다."
            data-swal-type="warning"
            data-swal-show-cancel-button="true"
            data-swal-confirm-button-text="확인"
            data-swal-confirm-cb="#swal-confirm-delete"
            data-swal-close-on-confirm="false"
          >
            삭제
          </button>
          <div
            id="swal-confirm-delete"
            className="d-none"
            data-swal-type="success"
            data-swal-title="삭제완료"
            data-swal-text="삭제 완료되었습니다."
          ></div>
        </div>
      </td>
    </tr>
  );
};

export default AdminListItem;
