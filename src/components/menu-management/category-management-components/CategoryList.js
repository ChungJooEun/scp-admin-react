import React from "react";

import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ list }) => {
  return (
    <div className="row card-group-row" data-toggle="dragula">
      {list.map((item) => (
        <CategoryListItem categoryInfo={item} key={item.id} />
      ))}
    </div>
  );
};

export default CategoryList;
