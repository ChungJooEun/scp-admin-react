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
import AgencyDetailView from "./components/agency/AgencyDetailView";
import AgencyRequestDetailView from "./components/agency/AgencyRequestDetailView";
import OnlineConsultationView from "./components/sc-ok/OnlineConsultationView";
import PhoneCounselingView from "./components/sc-ok/PhoneCounselingView";
import OnSiteCounselingView from "./components/sc-ok/OnSiteCounselingView";
import ExpertManageView from "./components/sc-ok/ExpertManageView";
import OnlineCounselingDetailView from "./components/sc-ok/OnlineCounselingDetailView";
import PhoneCounselingDetailView from "./components/sc-ok/PhoneCounselingDetailView";

import AddOnSiteConsultaionView from "./components/sc-ok/AddOnSiteConsultaionView";

import ExpertDetailView from "./components/sc-ok/ExpertDetailView";
import NoticeBoardView from "./components/community/NoticeBoardView";
import AddScheduleView from "./components/sc-ok/AddScheduleView";
import AddNoticeView from "./components/community/AddNoticeView";
import NoticeDetailView from "./components/community/NoticeDetailView";
import QnABoardView from "./components/community/QnABoardView";
import QnABoardDetailView from "./components/community/QnABoardDetailView";
import FAQBoardView from "./components/community/FAQBoardView";
import AllUserListView from "./components/user/AllUserListView";
import ReportedUserListView from "./components/user/ReportedUserListView";
import BlockedUserListView from "./components/user/BlockedUserListView";
import UserDetailView from "./components/user/UserDetailView";
import GeneralAdminListView from "./components/admin/GeneralAdminListView";
import SuperAdminListView from "./components/admin/SuperAdminListView";
import AddAdminView from "./components/admin/AddAdminView";
import AdminDetailView from "./components/admin/AdminDetailView";
import FAQDetailView from "./components/community/FAQDetailView";
import AddFAQView from "./components/community/AddFAQView";
import UserGuideBoardView from "./components/community/UserGuideBoardView";
import UserGuideDetailView from "./components/community/UserGuideDetailView";
import AddUserGuideView from "./components/community/AddUserGuideView";
import AccessTermsView from "./components/community/AccessTermsView";
import PersnalInformationPolicyView from "./components/community/PersnalInformationPolicyView";
import { MenuProvier } from "./context/menu";
import Login from "./components/common/login";
import EditScheduleView from "./components/sc-ok/EditScheduleView";
import { LoginProvider } from "./context/login";
import Temp from "./components/Temp";

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );

const App = () => {
  return (
    <AppProvider contexts={[MenuProvier, LoginProvider]}>
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/common/login">
          <Login />
        </Route>

        <Route path="/dashboard">
          <DashBoardView />
        </Route>

        <Route path="/main-menu/category">
          <CategoryManagementView />
        </Route>
        <Route path="/main-menu/category-add">
          <AddCategoryView />
        </Route>
        <Route
          path="/main-menu/category-edit/:categoryId"
          component={(props) => <EditCategoryView {...props} />}
        />

        <Route path="/main-menu/popup-banner">
          <PopupBannerManagementView />
        </Route>
        <Route path="/main-menu/popup-banner-add">
          <AddPopupBannerView />
        </Route>
        <Route
          path="/main-menu/popup-banner-edit/:bannerId"
          component={(props) => <EditPopupBannerView {...props} />}
        />

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
        <Route
          path="/activities/activities-detail/:activityId"
          component={(props) => <ActivityDetailView {...props} />}
        />

        <Route path="/agency/agency-list">
          <AgencyListView />
        </Route>
        <Route path="/agency/registration-request">
          <RegistrationRequestListView />
        </Route>
        <Route
          path="/agency/agency-detail/:orgId"
          component={(props) => <AgencyDetailView {...props} />}
        />
        <Route
          path="/agency/registration-request-detail/:orgId"
          component={(props) => <AgencyRequestDetailView {...props} />}
        />

        <Route path="/sc-ok/online-consultation">
          <OnlineConsultationView />
        </Route>
        <Route path="/sc-ok/phone-consultation">
          <PhoneCounselingView />
        </Route>
        <Route path="/sc-ok/pro-management">
          <ExpertManageView />
        </Route>
        <Route path="/sc-ok/onsite-consultation">
          <OnSiteCounselingView />
        </Route>

        <Route path="/sc-ok/add-consultation">
          <AddScheduleView />
        </Route>
        <Route
          path="/sc-ok/edit-consultation/:phoneCounselingIdx"
          component={(props) => <EditScheduleView {...props} />}
        />

        <Route
          path="/sc-ok/online-consultation-detail/:consultaionId"
          component={(props) => <OnlineCounselingDetailView {...props} />}
        />

        <Route
          path="/sc-ok/phone-consultation-detail/:consultaionId"
          component={(props) => <PhoneCounselingDetailView {...props} />}
        />
        <Route
          path="/sc-ok/pro-detail/:expertId"
          component={(props) => <ExpertDetailView {...props} />}
        />

        {/* 현장 상담 추가 페이지 */}
        <Route path="/sc-ok/add-onsite-consultation">
          <AddOnSiteConsultaionView />
        </Route>
        {/* 현장 상담 수정 페이지 */}
        <Route path="/sc-ok/edit-onsite-consultation/:consultationId">
          <OnSiteCounselingView />
        </Route>
        {/* 현장 상담 상세 조회 페이지 */}
        <Route path="/sc-ok/onsite-consultation/:consultationId">
          <OnSiteCounselingView />
        </Route>

        <Route path="/community/notice">
          <NoticeBoardView />
        </Route>
        <Route path="/community/add-notice">
          <AddNoticeView />
        </Route>
        <Route
          path="/community/notice-detail/:noticeId"
          component={(props) => <NoticeDetailView {...props} />}
        />

        <Route path="/community/qna">
          <QnABoardView />
        </Route>
        <Route
          path="/community/qna-detail/:qnaIdx"
          component={(props) => <QnABoardDetailView {...props} />}
        />

        <Route path="/community/faq">
          <FAQBoardView />
        </Route>
        <Route
          path="/community/faq-detail/:faqId"
          component={(props) => <FAQDetailView {...props} />}
        />

        <Route path="/community/add-faq">
          <AddFAQView />
        </Route>

        <Route path="/community/user-guide">
          <UserGuideBoardView />
        </Route>
        <Route
          path="/community/user-guide-detail/:guideId"
          component={(props) => <UserGuideDetailView {...props} />}
        />
        <Route path="/community/add-user-guide">
          <AddUserGuideView />
        </Route>

        <Route path="/community/terms-of-use">
          <AccessTermsView />
        </Route>
        <Route path="/community/privacy-policy">
          <PersnalInformationPolicyView />
        </Route>

        <Route path="/user/all">
          <AllUserListView />
        </Route>
        <Route path="/user/reported">
          <ReportedUserListView />
        </Route>
        <Route path="/user/blocked">
          <BlockedUserListView />
        </Route>
        <Route
          path="/user/user-detail/:userIdx"
          component={(props) => <UserDetailView {...props} />}
        />

        <Route path="/admin/super-admin">
          <SuperAdminListView />
        </Route>
        <Route path="/admin/general-admin">
          <GeneralAdminListView />
        </Route>

        <Route path="/admin/add-admin">
          <AddAdminView />
        </Route>
        <Route
          path="/admin/admin-account/:adminId"
          component={(props) => <AdminDetailView {...props} />}
        />

        {/* <Route path="/mobileAuth/request/request" component={() => <Temp />} /> */}

        <Route component={() => <h2>Page Not Found</h2>} />
      </Switch>
    </AppProvider>
  );
};

export default App;
