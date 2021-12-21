import React from "react";

const SearchKeywordBar = () => {
  return (
    <form className="search-form navbar-search d-none d-md-flex mr-16pt">
      <input type="text" className="form-control" placeholder="검색 ..." />
      <button className="btn" type="submit">
        <i className="material-icons">search</i>
      </button>
    </form>
  );
};
export default SearchKeywordBar;
