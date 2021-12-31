import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import AllActivities from "../../example/all-activities";

import SideMenuBar from "../common-components/SideMenuBar";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import ActivityList from "./activities-components/ActivityList";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import Paging from "../common-components/Paging";
import MenuContext from "../../context/menu";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/activities/requests",
    pageName: "활동 목록",
  },
];

const ConsumerRecruitmentActivitiesListView = () => {
  const { state, actions } = useContext(MenuContext);

  const [activityList, setActivityList] = useState(null);
  const [totalRows, setTotalRows] = useState(null);

  useEffect(() => {
    const getActivityList = async () => {
      const url = "http://118.67.153.236:8080/api/v1/activity/bene";

      try {
        const response = await axios.get(url.replace, {
          params: {
            page: 1,
            count: 10,
          },
        });

        if (response.status === 200) {
          // set state
        }
      } catch (e) {
        alert("활동 목록을 불러오는데 실패하였습니다.");
        console.log(e);
      }
    };

    let ary = [];

    for (let i = 0; i < AllActivities.length; i++) {
      ary.push({
        id: AllActivities[i].id,
        activityNumber: AllActivities[i].activityNumber,
        name: AllActivities[i].name,
        organization: AllActivities[i].organization,
        categoryName: AllActivities[i].categoryName,
        recruitmentField: AllActivities[i].recruitmentField,
        recruitmentTarget: AllActivities[i].recruitmentTarget,
        location: AllActivities[i].location,
        numberOfPeople: AllActivities[i].numberOfPeople,
        activityTime: AllActivities[i].activityTime,
        state: AllActivities[i].state,
      });
    }

    setTotalRows(ary.length);
    setActivityList(ary);

    if (state.menu.topMenu !== 2 || state.menu.subMenu !== 1) {
      actions.setMenu({
        topMenu: 2,
        subMenu: 1,
      });
    }

    if (!state.subMenu.topMenu2) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu2: true,
      });
    }

    const srcList = [
      `${process.env.PUBLIC_URL}/assets/vendor/jquery.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/popper.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/bootstrap.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/perfect-scrollbar.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/dom-factory.js`,
      `${process.env.PUBLIC_URL}/assets/js/app.js`,
      `${process.env.PUBLIC_URL}/assets/js/hljs.js`,
      `${process.env.PUBLIC_URL}/assets/js/settings.js`,
      `${process.env.PUBLIC_URL}/assets/js/app-settings.js`,
    ];
    let scriptList = [];

    for (let i = 0; i < srcList.length; i++) {
      const script = document.createElement("script");
      script.src = process.env.PUBLIC_URL + srcList[i];
      script.async = true;
      scriptList.push(script);
      document.body.appendChild(script);
    }

    return () => {
      for (let i = 0; i < scriptList.length; i++) {
        document.body.removeChild(scriptList[i]);
      }
    };
  }, []);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />
        <PageTitle
          pagePathList={pagePathList}
          pageTitle="수요자 모집 활동 목록"
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            <div className="page-separator">
              <div className="page-separator__text">
                목록(<span className="number-count">{totalRows}</span>)
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {activityList && (
                <ActivityList list={activityList} pageNumber={1} count={10} />
              )}
              <Paging />
            </div>
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default ConsumerRecruitmentActivitiesListView;
