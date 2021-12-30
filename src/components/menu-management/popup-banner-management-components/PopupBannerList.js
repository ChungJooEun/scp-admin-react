import React from "react";
import PopupBannerListItem from "./PopupBannerListItem";

const PopupBannerList = ({ list }) => {
  return (
    <div className="row card-group-row" data-toggle="dragula">
      {list.map((item) => (
        <PopupBannerListItem bannerInfo={item} key={item.id} />
      ))}
    </div>
  );
};

export default PopupBannerList;
