import React from "react";

const Paging = () => {
  return (
    <div className="card-footer p-8pt">
      <ul className="pagination justify-content-start pagination-xsm m-0">
        <li className="page-item disabled">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true" className="material-icons">
              chevron_left
            </span>
            <span>이전</span>
          </a>
        </li>
        <li className="page-item dropdown">
          <a
            className="page-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            aria-label="Page"
          >
            <span>1</span>
          </a>
          <div className="dropdown-menu">
            <a href="" className="dropdown-item active">
              1
            </a>
            <a href="" className="dropdown-item">
              2
            </a>
            <a href="" className="dropdown-item">
              3
            </a>
            <a href="" className="dropdown-item">
              4
            </a>
            <a href="" className="dropdown-item">
              5
            </a>
          </div>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span>다음</span>
            <span aria-hidden="true" className="material-icons">
              chevron_right
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Paging;
