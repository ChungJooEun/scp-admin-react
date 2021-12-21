import React from "react";
import PopupBannerListItem from "./PopupBannerListItem";

const PopupBannerList = () => {
  return (
    <div className="row card-group-row" data-toggle="dragula">
      <PopupBannerListItem />
      <PopupBannerListItem />
    </div>
  );
};

export default PopupBannerList;
