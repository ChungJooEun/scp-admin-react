import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ pageTitle, pagePathList }) => {
  return (
    <div className="border-bottom-2 py-32pt position-relative z-1">
      <div className="container-fluid page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
        <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
          <div className="mb-24pt mb-sm-0 mr-sm-24pt">
            <h2 className="mb-0">{pageTitle}</h2>
            <ol className="breadcrumb p-0 m-0">
              {pagePathList.map((pathListItem) => (
                <li className="breadcrumb-item" key={pathListItem.pageName}>
                  <Link to={pathListItem.pageUrl}>{pathListItem.pageName}</Link>
                </li>
              ))}
              <li className="breadcrumb-item active">{pageTitle}</li>
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
