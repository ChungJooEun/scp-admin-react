import React from "react";
import { Link } from "react-router-dom";

const CategoryListItem = ({ categoryInfo }) => {
  return (
    <div className="col-sm-6 col-md-4 card-group-row__col">
      <div className="card card-sm card-group-row__card">
        <div className="position-relative">
          <div className="card-img-top">
            <img
              src={categoryInfo.img}
              className="card-img-top card-img-cover"
              alt=""
            />
          </div>
        </div>
        <div className="card-body d-flex">
          <div className="flex">
            <h5 className="card-title float-left m-0 text-height-32">
              {categoryInfo.name}
            </h5>
            <Link
              to={`/main-menu/category-edit/${categoryInfo.id}`}
              type="button"
              className="btn btn-light float-right"
            >
              수정
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListItem;
