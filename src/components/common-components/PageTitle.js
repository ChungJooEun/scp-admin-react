import React from "react";

const PageTitle = () => {
  return (
    <div className="border-bottom-2 py-32pt position-relative z-1">
      <div className="container-fluid page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
        <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
          <div className="mb-24pt mb-sm-0 mr-sm-24pt">
            <h2 className="mb-0">대시보드</h2>
            <ol className="breadcrumb p-0 m-0">
              <li className="breadcrumb-item">
                <a href="../dashboard/index.html">홈</a>
              </li>
              <li className="breadcrumb-item active">대시보드 </li>
            </ol>
          </div>
        </div>
        <form
          className="search-form navbar-search d-none d-md-flex mr-16pt"
          action="index.html"
        >
          <button className="btn" type="submit">
            <i className="material-icons">search</i>
          </button>
          <input type="text" className="form-control" placeholder="검색 ..." />
        </form>
      </div>
    </div>
  );
};

export default PageTitle;
