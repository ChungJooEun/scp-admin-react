import React from "react";

const CategoryListItem = () => {
  return (
    <div className="col-sm-6 col-md-2 card-group-row__col">
      <div className="card card-sm card-group-row__card category-active">
        <a href="" className="">
          <div className="position-relative">
            <div className="card-img-top">
              <img
                src="../assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg"
                className="card-img-top card-img-cover"
                alt=""
              />
            </div>
          </div>
          <div className="card-body d-flex">
            <div className="flex">
              <h5 className="card-title float-left m-0 text-height-32 color-white">
                카테고리1
              </h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CategoryListItem;
