import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import AllActivities, {
  ParticipatingUsers,
  ParticipatingOrganization,
  RegisteredParticipatingUsers,
  RegisteredParticipatingOrganization,
  DemandUsers,
  DemandOrganization,
  RegisteredDemandUsers,
  RegisteredDemandOrganization,
} from "../../example/all-activities";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SideMenuBar from "../common-components/SideMenuBar";

import ActivityDetailInfo from "./activities-detail-components/ActivityDetailInfo";
import UserList from "./activities-detail-components/UserList";
import AgencyList from "./activities-detail-components/AgencyList";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const ActivityDetailView = ({ match }) => {
  const [activityInfo, setActivityInfo] = useState(null);

  const [participatingUser, setParticipatingUser] = useState({
    totalRows: null,
    list: null,
  });
  const [participatingOrg, setParticipatingOrg] = useState({
    totalRows: null,
    list: null,
  });
  const [registeredParticipationUser, setRegisteredParticipationUser] =
    useState({
      totalRows: null,
      list: null,
    });
  const [registeredParticipationOrg, setRegisteredParticipationOrg] = useState({
    totalRows: null,
    list: null,
  });

  const [demandUser, setDemandUser] = useState({
    totalRows: null,
    list: null,
  });
  const [demandOrg, setDemandOrg] = useState({
    totalRows: null,
    list: null,
  });
  const [registeredDemandUser, setRegisteredDemandUser] = useState({
    totalRows: null,
    list: null,
  });
  const [registeredDemandOrg, setRegisteredDemandOrg] = useState({
    totalRows: null,
    list: null,
  });

  // const getParticipatingUserList = useCallback(async ({ activityId }) => {
  //   const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}/part/working-user`;

  //   try {
  //     const response = await axios.get(url, {
  //       params: {
  //         page: 1,
  //         count: 10,
  //       },
  //     });

  //     if (response.status === 200) {
  //       // set State
  //     }
  //   } catch (e) {
  //     alert("참여중인 사용자 목록을 조회하는데 실패하였습니다.");
  //     console.log(e);
  //   }
  // }, []);

  const getParticipatingUserList = useCallback(() => {
    let ary = [];

    for (let i = 0; i < ParticipatingUsers.length; i++) {
      ary.push({
        id: ParticipatingUsers[i].id,
        nickName: ParticipatingUsers[i].nickName,
        userId: ParticipatingUsers[i].userId,
        activityDate: ParticipatingUsers[i].activityDate,
        recentActivityDate: ParticipatingUsers[i].recentActivityDate,
        state: ParticipatingUsers[i].state,
      });
    }

    setParticipatingUser({
      totalRows: ary.length,
      list: ary,
    });
  }, []);

  // const getParticipatingOrgList = useCallback(async ({ activityId }) => {
  //   const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}/part/working-org`;

  //   try {
  //     const response = await axios.get(url, {
  //       params: {
  //         page: 1,
  //         count: 10,
  //       },
  //     });

  //     if (response.status === 200) {
  //       // set State
  //     }
  //   } catch (e) {
  //     alert("참여중인 기관/단체 목록을 조회하는데 실패하였습니다.");
  //     console.log(e);
  //   }
  // }, []);

  const getParticipatingOrgList = useCallback(() => {
    let ary = [];

    for (let i = 0; i < ParticipatingOrganization.length; i++) {
      ary.push({
        id: ParticipatingOrganization[i].id,
        name: ParticipatingOrganization[i].name,
        address: ParticipatingOrganization[i].address,
        contactInfo: ParticipatingOrganization[i].contactInfo,
        maximumNumberOfPeople:
          ParticipatingOrganization[i].maximumNumberOfPeople,
        registeredActivities: ParticipatingOrganization[i].registeredActivities,
        activityDate: ParticipatingOrganization[i].activityDate,
        recentActivityDate: ParticipatingOrganization[i].recentActivityDate,
        state: ParticipatingOrganization[i].state,
      });
    }

    setParticipatingOrg({
      totalRows: ary.length,
      list: ary,
    });
  }, []);

  // const getRegisteredParticipationUserList = useCallback(async ({ activityId }) => {
  //   const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}/part/apply-user`;

  //   try {
  //     const response = await axios.get(url, {
  //       params: {
  //         page: 1,
  //         count: 10,
  //       },
  //     });

  //     if (response.status === 200) {
  //       // set State
  //     }
  //   } catch (e) {
  //     alert("참여중인 사용자 목록을 조회하는데 실패하였습니다.");
  //     console.log(e);
  //   }
  // }, []);

  const getRegisteredParticipationUserList = useCallback(() => {
    let ary = [];

    for (let i = 0; i < RegisteredParticipatingUsers.length; i++) {
      ary.push({
        id: RegisteredParticipatingUsers[i].id,
        nickName: RegisteredParticipatingUsers[i].nickName,
        userId: RegisteredParticipatingUsers[i].userId,
        activityDate: RegisteredParticipatingUsers[i].activityDate,
        recentActivityDate: RegisteredParticipatingUsers[i].recentActivityDate,
        state: RegisteredParticipatingUsers[i].state,
      });
    }

    setRegisteredParticipationUser({
      totalRows: ary.length,
      list: ary,
    });
  }, []);

  // const getRegisteredParticipationOrgList = useCallback(async ({ activityId }) => {
  //   const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}/part/apply-org`;

  //   try {
  //     const response = await axios.get(url, {
  //       params: {
  //         page: 1,
  //         count: 10,
  //       },
  //     });

  //     if (response.status === 200) {
  //       // set State
  //     }
  //   } catch (e) {
  //     alert("참여중인 기관/단체 목록을 조회하는데 실패하였습니다.");
  //     console.log(e);
  //   }
  // }, []);

  const getRegisteredParticipationOrgList = useCallback(() => {
    let ary = [];

    for (let i = 0; i < RegisteredParticipatingOrganization.length; i++) {
      ary.push({
        id: RegisteredParticipatingOrganization[i].id,
        name: RegisteredParticipatingOrganization[i].name,
        address: RegisteredParticipatingOrganization[i].address,
        contactInfo: RegisteredParticipatingOrganization[i].contactInfo,
        maximumNumberOfPeople:
          RegisteredParticipatingOrganization[i].maximumNumberOfPeople,
        registeredActivities:
          RegisteredParticipatingOrganization[i].registeredActivities,
        activityDate: RegisteredParticipatingOrganization[i].activityDate,
        recentActivityDate:
          RegisteredParticipatingOrganization[i].recentActivityDate,
        state: RegisteredParticipatingOrganization[i].state,
      });
    }

    setRegisteredParticipationOrg({
      totalRows: ary.length,
      list: ary,
    });
  }, []);

  // const getDemandUserList = useCallback(async ({ activityId }) => {
  //   const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}/bene/working-user`;

  //   try {
  //     const response = await axios.get(url, {
  //       params: {
  //         page: 1,
  //         count: 10,
  //       },
  //     });

  //     if (response.status === 200) {
  //       // set State
  //     }
  //   } catch (e) {
  //     alert("참여중인 사용자 목록을 조회하는데 실패하였습니다.");
  //     console.log(e);
  //   }
  // }, []);

  const getDemandUserList = useCallback(() => {
    let ary = [];

    for (let i = 0; i < DemandUsers.length; i++) {
      ary.push({
        id: DemandUsers[i].id,
        nickName: DemandUsers[i].nickName,
        userId: DemandUsers[i].userId,
        activityDate: DemandUsers[i].activityDate,
        recentActivityDate: DemandUsers[i].recentActivityDate,
        state: DemandUsers[i].state,
      });
    }

    setDemandUser({
      totalRows: ary.length,
      list: ary,
    });
  }, []);

  // const getDemandOrgList = useCallback(async ({ activityId }) => {
  //   const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}/bene/working-org`;

  //   try {
  //     const response = await axios.get(url, {
  //       params: {
  //         page: 1,
  //         count: 10,
  //       },
  //     });

  //     if (response.status === 200) {
  //       // set State
  //     }
  //   } catch (e) {
  //     alert("참여중인 기관/단체 목록을 조회하는데 실패하였습니다.");
  //     console.log(e);
  //   }
  // }, []);

  const getDemandOrgList = useCallback(() => {
    let ary = [];

    for (let i = 0; i < DemandOrganization.length; i++) {
      ary.push({
        id: DemandOrganization[i].id,
        name: DemandOrganization[i].name,
        address: DemandOrganization[i].address,
        contactInfo: DemandOrganization[i].contactInfo,
        maximumNumberOfPeople: DemandOrganization[i].maximumNumberOfPeople,
        registeredActivities: DemandOrganization[i].registeredActivities,
        activityDate: DemandOrganization[i].activityDate,
        recentActivityDate: DemandOrganization[i].recentActivityDate,
        state: DemandOrganization[i].state,
      });
    }

    setDemandOrg({
      totalRows: ary.length,
      list: ary,
    });
  }, []);

  // const getRegisteredDemandUserList = useCallback(async ({ activityId }) => {
  //   const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}/bene/apply-user`;

  //   try {
  //     const response = await axios.get(url, {
  //       params: {
  //         page: 1,
  //         count: 10,
  //       },
  //     });

  //     if (response.status === 200) {
  //       // set State
  //     }
  //   } catch (e) {
  //     alert("참여중인 사용자 목록을 조회하는데 실패하였습니다.");
  //     console.log(e);
  //   }
  // }, []);

  const getRegisteredDemandUserList = useCallback(() => {
    let ary = [];

    for (let i = 0; i < RegisteredDemandUsers.length; i++) {
      ary.push({
        id: RegisteredDemandUsers[i].id,
        nickName: RegisteredDemandUsers[i].nickName,
        userId: RegisteredDemandUsers[i].userId,
        activityDate: RegisteredDemandUsers[i].activityDate,
        recentActivityDate: RegisteredDemandUsers[i].recentActivityDate,
        state: RegisteredDemandUsers[i].state,
      });
    }

    setRegisteredDemandUser({
      totalRows: ary.length,
      list: ary,
    });
  }, []);

  // const getRegisteredDemandOrgList = useCallback(async ({ activityId }) => {
  //   const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}/bene/apply-org`;

  //   try {
  //     const response = await axios.get(url, {
  //       params: {
  //         page: 1,
  //         count: 10,
  //       },
  //     });

  //     if (response.status === 200) {
  //       // set State
  //     }
  //   } catch (e) {
  //     alert("참여중인 기관/단체 목록을 조회하는데 실패하였습니다.");
  //     console.log(e);
  //   }
  // }, []);

  const getRegisteredDemandOrgList = useCallback(() => {
    let ary = [];

    for (let i = 0; i < RegisteredDemandOrganization.length; i++) {
      ary.push({
        id: RegisteredDemandOrganization[i].id,
        name: RegisteredDemandOrganization[i].name,
        address: RegisteredDemandOrganization[i].address,
        contactInfo: RegisteredDemandOrganization[i].contactInfo,
        maximumNumberOfPeople:
          RegisteredDemandOrganization[i].maximumNumberOfPeople,
        registeredActivities:
          RegisteredDemandOrganization[i].registeredActivities,
        activityDate: RegisteredDemandOrganization[i].activityDate,
        recentActivityDate: RegisteredDemandOrganization[i].recentActivityDate,
        state: RegisteredDemandOrganization[i].state,
      });
    }

    setRegisteredDemandOrg({
      totalRows: ary.length,
      list: ary,
    });
  }, []);

  useEffect(() => {
    const { activityId } = match.params;

    const getActivityDetailInfo = async () => {
      const url = `http://118.67.153.236:8080/api/v1/activity/${activityId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          // set state
        }
      } catch (e) {
        alert("활동 상세정보를 불러오는데 실패하였습니다.");
        console.log(e);
      }
    };

    setActivityInfo({
      id: AllActivities[activityId].id,
      name: AllActivities[activityId].name,
      categoryName: AllActivities[activityId].categoryName,
      target: AllActivities[activityId].target,
      location: AllActivities[activityId].location,
      numberOfPeople: AllActivities[activityId].numberOfPeople,
      activityTime: AllActivities[activityId].activityTime,
      activityDateTime: AllActivities[activityId].activityDateTime,
      recruitmentTarget: AllActivities[activityId].recruitmentTarget,
      detail: AllActivities[activityId].detail,
      img: AllActivities[activityId].img,
    });

    getParticipatingUserList();
    getParticipatingOrgList();
    getRegisteredParticipationUserList();
    getRegisteredParticipationOrgList();

    getDemandUserList();
    getDemandOrgList();
    getRegisteredDemandUserList();
    getRegisteredDemandOrgList();

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
  }, [
    getDemandOrgList,
    getDemandUserList,
    getParticipatingOrgList,
    getParticipatingUserList,
    getRegisteredDemandOrgList,
    getRegisteredDemandUserList,
    getRegisteredParticipationOrgList,
    getRegisteredParticipationUserList,
    match.params,
  ]);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />
        <PageTitle
          pageTitle="활동 상세"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            {activityInfo && <ActivityDetailInfo activityInfo={activityInfo} />}

            <h2>참여 목록</h2>

            <div className="page-separator">
              <div className="page-separator__text">
                참여중인 사용자 목록(
                <span className="number-count">
                  {participatingUser.totalRows}
                </span>
                )
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {participatingUser.list && (
                <UserList
                  list={participatingUser.list}
                  pageNumber={1}
                  count={10}
                />
              )}
              <Paging />
            </div>

            <div className="page-separator">
              <div className="page-separator__text">
                참여중인 기관/단체 목록(
                <span className="number-count">
                  {participatingOrg.totalRows}
                </span>
                )
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {participatingOrg.list && (
                <AgencyList
                  list={participatingOrg.list}
                  pageNumber={1}
                  count={10}
                />
              )}
              <Paging />
            </div>

            <div className="page-separator">
              <div className="page-separator__text">
                참여 신청한 사용자 목록(
                <span className="number-count">
                  {registeredParticipationUser.totalRows}
                </span>
                )
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {registeredParticipationUser.list && (
                <UserList
                  list={registeredParticipationUser.list}
                  pageNumber={1}
                  count={10}
                />
              )}
              <Paging />
            </div>

            <div className="page-separator">
              <div className="page-separator__text">
                참여 신청한 기관/단체 목록(
                <span className="number-count">
                  {registeredParticipationOrg.totalRows}
                </span>
                )
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {registeredParticipationOrg.list && (
                <AgencyList
                  list={registeredParticipationOrg.list}
                  pageNumber={1}
                  count={10}
                />
              )}
              <Paging />
            </div>

            <h2>수요 목록</h2>

            <div className="page-separator">
              <div className="page-separator__text">
                수요 신청자 목록(
                <span className="number-count">{demandUser.totalRows}</span>)
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {demandUser.list && (
                <UserList list={demandUser.list} pageNumber={1} count={10} />
              )}
              <Paging />
            </div>

            <div className="page-separator">
              <div className="page-separator__text">
                수요 신청 기관/단체 목록(
                <span className="number-count">{demandOrg.totalRows}</span>)
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {demandOrg.list && (
                <AgencyList list={demandOrg.list} pageNumber={1} count={10} />
              )}
              <Paging />
            </div>

            <div className="page-separator">
              <div className="page-separator__text">
                수요 신청한 수요자 목록(
                <span className="number-count">
                  {registeredDemandUser.totalRows}
                </span>
                )
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {registeredDemandUser.list && (
                <UserList
                  list={registeredDemandUser.list}
                  pageNumber={1}
                  count={10}
                />
              )}
              <Paging />
            </div>

            <div className="page-separator">
              <div className="page-separator__text">
                수요 신청한 수요 기관/단체 목록(
                <span className="number-count">
                  {registeredDemandOrg.totalRows}
                </span>
                )
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {registeredDemandOrg.list && (
                <AgencyList
                  list={registeredDemandOrg.list}
                  pageNumber={1}
                  count={10}
                />
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
export default ActivityDetailView;
