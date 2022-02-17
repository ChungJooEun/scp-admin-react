import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SideMenuBar from "../common-components/SideMenuBar";

import ActivityDetailInfo from "./activities-detail-components/ActivityDetailInfo";
import UserList from "./activities-detail-components/UserList";
import AgencyList from "./activities-detail-components/AgencyList";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import LoginContext from "../../context/login";
import checkLoginValidation from "../../util/login-validation";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const count = 10;

const ActivityDetailView = ({ match }) => {
  const { isLogin } = useContext(LoginContext).state;

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

  const [pageNumber, setPageNumber] = useState({
    participatingUser: 1,
    participatingOrg: 1,
    registeredParticipationUser: 1,
    registeredParticipationOrg: 1,
    demandUser: 1,
    demandOrg: 1,
    registeredDemandUser: 1,
    registeredDemandOrg: 1,
  });

  const getPartUserPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      participatingUser: seletedPage,
    });
  };

  const getPartOrgPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      participatingOrg: seletedPage,
    });
  };

  const getRegPartUserPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      registeredParticipationUser: seletedPage,
    });
  };

  const getRegPartOrgPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      registeredParticipationOrg: seletedPage,
    });
  };

  const getBeneUserPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      demandUser: seletedPage,
    });
  };

  const getBeneOrgPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      demandOrg: seletedPage,
    });
  };

  const getRegBeneUserPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      registeredDemandUser: seletedPage,
    });
  };

  const getRegBeneOrgPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      registeredDemandOrg: seletedPage,
    });
  };

  // 참여중인 사용자 목록 조회
  const getParticipatingUserList = useCallback(
    async (activityId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}/part/working-user`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.participatingUser,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;
          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // idx
              nickName: data[i].nickname, // 닉네임
              userId: data[i].email, // 아이디 -> 이메일
              activityDate: "2022.01.01", // 활동일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "W", // 신청, 신청완료, 기각, 참여, 불참   -> 누락
            });
          }

          setParticipatingUser({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("참여중인 사용자 목록을 조회하는데 실패하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.participatingUser]
  );

  // 참여중인 기관, 단체 목록 조회
  const getParticipatingOrgList = useCallback(
    async (activityId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}/part/apply-org`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.participatingOrg,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // 아이디
              name: data[i].orgTitle, // 기관명
              address: data[i].address1 + " " + data[i].address2, // 기관 주소
              contactInfo: data[i].contact, // 연락처
              maximumNumberOfPeople: data[i].userCount, // 최대 인원수
              registeredActivities: data[i].activityCount, // 등록된 활동수
              activityDate: "2022.01.01", // 활동일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "W",
            });
          }
          setParticipatingOrg({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("참여중인 기관/단체 목록을 조회하는데 실패하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.participatingOrg]
  );

  // 참여 신청한 사용자 목록 조회
  const getRegisteredParticipationUserList = useCallback(
    async (activityId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}/part/apply-user`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.registeredParticipationUser,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;
          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // idx
              nickName: data[i].nickname, // 닉네임
              userId: data[i].email, // 아이디 -> 이메일
              activityDate: "2022.01.01", // 활동일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "W", // 상태(공개/비공개) -> 누락
            });
          }

          setRegisteredParticipationUser({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("참여중인 사용자 목록을 조회하는데 실패하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.registeredParticipationUser]
  );

  // 참여 신청한 기관,단체 목록 조회
  const getRegisteredParticipationOrgList = useCallback(
    async (activityId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}/part/apply-org`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.registeredParticipationOrg,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // 아이디
              name: data[i].orgTitle, // 기관명
              address: data[i].address1 + " " + data[i].address2, // 기관 주소
              contactInfo: data[i].contact, // 연락처
              maximumNumberOfPeople: data[i].userCount, // 최대 인원수
              registeredActivities: data[i].activityCount, // 등록된 활동수
              activityDate: "2022.01.01", // 활동일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "W",
            });
          }

          setRegisteredParticipationOrg({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("참여중인 기관/단체 목록을 조회하는데 실패하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.registeredParticipationOrg]
  );

  // 수요 신청자 목록 조회
  const getDemandUserList = useCallback(
    async (activityId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}/bene/working-user`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.demandUser,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;
          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // idx
              nickName: data[i].nickname, // 닉네임
              userId: data[i].email, // 아이디 -> 이메일
              activityDate: "2022.01.01", // 활동일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "W", // 상태(공개/비공개) -> 누락
            });
          }

          setDemandUser({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("참여중인 사용자 목록을 조회하는데 실패하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.demandUser]
  );

  // 수요 신청 기관,단체 목록 조회
  const getDemandOrgList = useCallback(
    async (activityId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}/bene/working-org`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.demandOrg,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // 아이디
              name: data[i].orgTitle, // 기관명
              address: data[i].address1 + " " + data[i].address2, // 기관 주소
              contactInfo: data[i].contact, // 연락처
              maximumNumberOfPeople: data[i].userCount, // 최대 인원수
              registeredActivities: data[i].activityCount, // 등록된 활동수
              activityDate: "2022.01.01", // 활동일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "D",
            });
          }

          setDemandOrg({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("참여중인 기관/단체 목록을 조회하는데 실패하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.demandOrg]
  );

  // 수요 신청한 수요자 목록 조회
  const getRegisteredDemandUserList = useCallback(
    async (activityId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}/bene/apply-user`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.registeredDemandUser,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;
          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // idx
              nickName: data[i].nickname, // 닉네임
              userId: data[i].email, // 아이디 -> 이메일
              activityDate: "2022.01.01", // 활동일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "W", // 상태(공개/비공개) -> 누락
            });
          }

          setRegisteredDemandUser({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("참여중인 사용자 목록을 조회하는데 실패하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.registeredDemandUser]
  );

  // 신청한 수요 기관, 단체 목록 조회
  const getRegisteredDemandOrgList = useCallback(
    async (activityId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}/bene/apply-org`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.registeredParticipationOrg,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // 아이디
              name: data[i].orgTitle, // 기관명
              address: data[i].address1 + " " + data[i].address2, // 기관 주소
              contactInfo: data[i].contact, // 연락처
              maximumNumberOfPeople: data[i].userCount, // 최대 인원수
              registeredActivities: data[i].activityCount, // 등록된 활동수
              activityDate: "2022.01.01", // 활동일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "W",
            });
          }

          setRegisteredDemandOrg({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("참여중인 기관/단체 목록을 조회하는데 실패하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.registeredParticipationOrg]
  );

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      const { activityId } = match.params;

      const getActivityDetailInfo = async () => {
        const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity/${activityId}`;

        try {
          const response = await axios.get(url);

          if (response.status === 200) {
            setActivityInfo({
              id: response.data.idx,
              name: response.data.title,
              categoryName: response.data.category,
              beneType: response.data.beneType,
              partType: response.data.partType,
              location: response.data.address1 + " " + response.data.address2,
              numberOfPeople: response.data.recruitNum,
              activityTime: response.data.totalTime,
              activityDateTime: Object.keys(response.data).includes(
                "activityDate"
              )
                ? response.data.activityDate.replace(/-/gi, ".") +
                  " " +
                  response.data.activityTime
                : "",
              // recruitmentTarget: response.data.recruitmentTarget,
              detail: response.data.memo,
              img: Object.keys(response.data).includes("images")
                ? `${process.env.REACT_APP_SERVICE_API}/main/${response.data.folder}/${response.data.images}`
                : `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`,
            });
          }
        } catch (e) {
          alert("활동 상세정보를 불러오는데 실패하였습니다.");
          console.log(e);
        }
      };

      getActivityDetailInfo();

      getParticipatingUserList(activityId);
      getParticipatingOrgList(activityId);
      getRegisteredParticipationUserList(activityId);
      getRegisteredParticipationOrgList(activityId);

      getDemandUserList(activityId);
      getDemandOrgList(activityId);
      getRegisteredDemandUserList(activityId);
      getRegisteredDemandOrgList(activityId);

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
    }
  }, [
    getDemandOrgList,
    getDemandUserList,
    getParticipatingOrgList,
    getParticipatingUserList,
    getRegisteredDemandOrgList,
    getRegisteredDemandUserList,
    getRegisteredParticipationOrgList,
    getRegisteredParticipationUserList,
    isLogin,
    match.params,
  ]);

  if (isLogin)
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
              {activityInfo && (
                <ActivityDetailInfo activityInfo={activityInfo} />
              )}

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
                    pageNumber={pageNumber.participatingUser}
                    count={count}
                  />
                )}
                <Paging
                  pageNumber={pageNumber.participatingUser}
                  getPageNumber={getPartUserPageNumber}
                  count={count}
                  totalNum={participatingUser.totalRows}
                />
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
                    pageNumber={pageNumber.participatingOrg}
                    count={count}
                  />
                )}
                <Paging
                  pageNumber={pageNumber.participatingOrg}
                  getPageNumber={getPartOrgPageNumber}
                  totalNum={participatingOrg.totalRows}
                  count={count}
                />
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
                    pageNumber={pageNumber.registeredParticipationUser}
                    count={count}
                  />
                )}
                <Paging
                  pageNumber={pageNumber.registeredParticipationUser}
                  getPageNumber={getRegPartUserPageNumber}
                  totalNum={registeredParticipationUser.totalRows}
                  count={count}
                />
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
                    pageNumber={pageNumber.registeredParticipationOrg}
                    count={count}
                  />
                )}
                <Paging
                  pageNumber={pageNumber.registeredParticipationOrg}
                  getPageNumber={getRegPartOrgPageNumber}
                  totalNum={registeredParticipationOrg.totalRows}
                  count={count}
                />
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
                  <UserList
                    list={demandUser.list}
                    pageNumber={pageNumber.demandUser}
                    count={count}
                  />
                )}
                <Paging
                  pageNumber={pageNumber.demandUser}
                  getPageNumber={getBeneUserPageNumber}
                  totalNum={demandUser.totalRows}
                  count={count}
                />
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
                  <AgencyList
                    list={demandOrg.list}
                    pageNumber={pageNumber.demandOrg}
                    count={count}
                  />
                )}
                <Paging
                  pageNumber={pageNumber.demandOrg}
                  getPageNumber={getBeneOrgPageNumber}
                  totalNum={demandOrg.totalRows}
                  count={count}
                />
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
                    pageNumber={pageNumber.registeredDemandUser}
                    count={count}
                  />
                )}
                <Paging
                  pageNumber={pageNumber.registeredDemandUser}
                  getPageNumber={getRegBeneUserPageNumber}
                  totalNum={registeredDemandUser.totalRows}
                  count={count}
                />
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
                    pageNumber={pageNumber.registeredDemandOrg}
                    count={count}
                  />
                )}
                <Paging
                  pageNumber={pageNumber.registeredDemandOrg}
                  totalNum={registeredDemandOrg.totalRows}
                  getPageNumber={getRegBeneOrgPageNumber}
                  count={count}
                />
              </div>
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    );
  else {
    return null;
  }
};
export default ActivityDetailView;
