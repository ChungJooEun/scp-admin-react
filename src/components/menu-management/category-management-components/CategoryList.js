import React from "react";

import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  return (
    <div className="row card-group-row" data-toggle="dragula">
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
    </div>
  );
};

export default CategoryList;
