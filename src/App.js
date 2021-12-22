import React from "react";
import { Route, Switch } from "react-router-dom";

import DashBoardView from "./components/dashboard/DashBoardView";

import CategoryManagementView from "./components/menu-management/CategoryManagementView";
import AddCategoryView from "./components/menu-management/AddCagetoryView";
import EditCategoryView from "./components/menu-management/EditCagetoryView";
import PopupBannerManagementView from "./components/menu-management/PopupBannerManagementView";
import AddPopupBannerView from "./components/menu-management/AddPopupBannerView";
import EditPopupBannerView from "./components/menu-management/EditPopupBannerView";
import ActivityListView from "./components/activities/ActivityListView";
import ConsumerRecruitmentActivitiesListView from "./components/activities/ConsumerRecruitmentActivitesListView";
import ActivistRecruitmentActivitiesListView from "./components/activities/ActivistRecruitmentActivitiesListView";
import CategoryListView from "./components/activities/CategoryListView";
import ActivityDetailView from "./components/activities/ActivityDetailView";
import AgencyListView from "./components/agency/AgencyListView";
import RegistrationRequestListView from "./components/agency/RegistrationRequestListView";

const App = () => {
  return (
    <Switch>
      <Route path="/dashboard">
        <DashBoardView />
      </Route>
      <Route path="/" exact={true}>
        <DashBoardView />
      </Route>

      <Route path="/main-menu/category">
        <CategoryManagementView />
      </Route>
      <Route path="/main-menu/category-add">
        <AddCategoryView />
      </Route>
      <Route path="/main-menu/category-edit">
        <EditCategoryView />
      </Route>

      <Route path="/main-menu/popup-banner">
        <PopupBannerManagementView />
      </Route>
      <Route path="/main-menu/popup-banner-add">
        <AddPopupBannerView />
      </Route>
      <Route path="/main-menu/popup-banner-edit">
        <EditPopupBannerView />
      </Route>

      <Route path="/activities/all">
        <ActivityListView />
      </Route>
      <Route path="/activities/requests">
        <ConsumerRecruitmentActivitiesListView />
      </Route>
      <Route path="/activities/volunteer">
        <ActivistRecruitmentActivitiesListView />
      </Route>
      <Route path="/activities/by-categroy">
        <CategoryListView />
      </Route>
      <Route path="/activities/activities-detail">
        <ActivityDetailView />
      </Route>

      <Route path="/agency/agency-list">
        <AgencyListView />
      </Route>
      <Route path="/agency/registration-request">
        <RegistrationRequestListView />
      </Route>

      <Route component={() => <h2>Page Not Found</h2>} />
    </Switch>
  );
};

export default App;
