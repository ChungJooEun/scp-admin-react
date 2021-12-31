import React from "react";

const CategoryListItem = ({ categoryInfo, isActive, selectCategory }) => {
  return (
    <div
      className="col-sm-6 col-md-2 card-group-row__col"
      onClick={() => selectCategory(categoryInfo.id)}
    >
      <div
        className={
          isActive
            ? "card card-sm card-group-row__card category-active"
            : "card card-sm card-group-row__card"
        }
      >
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
            <h5
              className={
                isActive
                  ? "card-title float-left m-0 text-height-32 color-white"
                  : "card-title float-left m-0 text-height-32"
              }
            >
              {categoryInfo.name}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListItem;
