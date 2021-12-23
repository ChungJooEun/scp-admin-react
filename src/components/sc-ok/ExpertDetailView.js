import React from "react";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import ExpertDetailInfo from "./expert-manage-components/ExpertDetailInfo";
import OnlineConsultationList from "./online-consultation-components/OnlineConsultationList";
import PhoneCounselingList from "./phone-counseling-components/list-components/PhoneCounselingList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/sc-ok/pro-management",
    pageName: "서초 OK 생활 자문단 - 전문가 관리",
  },
];

const ExpertDetailView = () => {
  return (
    <>
      {/* <div className="preloader">
        <div className="sk-chase">
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
        </div>
    </div> */}
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <GlobalBar />
          <PageTitle
            pageTitle="전문가 상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <ExpertDetailInfo />
              <div className="page-section">
                <h2>전문가 활동</h2>

                <div className="page-separator">
                  <div className="page-separator__text">
                    온라인 상담 목록(<span className="number-count">12</span>)
                  </div>
                </div>
                <OnlineConsultationList />

                <div className="page-separator">
                  <div className="page-separator__text">
                    전화 상담 목록(<span className="number-count">12</span>)
                  </div>
                </div>
                <PhoneCounselingList />
              </div>

              {/* <div className="page-section">
                        <h2>활동</h2>
                        <div className="page-separator">
                            <div className="page-separator__text">참여한 활동 목록(<span className="number-count">12</span>)</div>
                        </div>
                        <!-- // 내용 타이틀 끝 -->
                        <!-- 리스트 시작 -->
                        <div className="card mb-lg-32pt">
                            <div className="card-header">
                                <form className="form-inline">
                                    <div className="col-sm-auto">
                                        <div className="form-group">
                                            <input id="filter_date" type="hidden"
                                                className="form-control flatpickr-input ml-16" placeholder="Select date ..."
                                                value="13/03/2018 to 20/03/2018" data-toggle="flatpickr"
                                                data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y"
                                                data-flatpickr-date-format="d/m/Y">
                                            <button
                                                className="btn bg-alt border-left border-top border-top-sm-0 rounded-0"><i
                                                    className="material-icons text-primary icon-20pt">refresh</i></button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="table-responsive" data-toggle="lists" data-lists-sort-by="js-lists-values-date"
                                data-lists-sort-desc="false"
                                data-lists-values="[&quot;js-lists-values-name&quot;, &quot;js-lists-values-date&quot;]">
                                <table className="table mb-0 thead-border-top-0 table-nowrap">
                                    <thead>
                                        <tr>
                                            <th style="width: 48px;">
                                                <a className="sort">No.</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">활동번호</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">활동명</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">기관/단체명</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">카테고리</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">모집분야</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">모집대상</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">활동장소</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">필요인원</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">총 활동시간</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">상태</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="list" id="tasks2">
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer p-8pt">
                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className="material-icons">chevron_left</span>
                                            <span>이전</span>
                                        </a>
                                    </li>
                                    <li className="page-item dropdown">
                                        <a className="page-link dropdown-toggle" data-toggle="dropdown" href="#"
                                            aria-label="Page">
                                            <span>1</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="" className="dropdown-item active">1</a>
                                            <a href="" className="dropdown-item">2</a>
                                            <a href="" className="dropdown-item">3</a>
                                            <a href="" className="dropdown-item">4</a>
                                            <a href="" className="dropdown-item">5</a>
                                        </div>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span>다음</span>
                                            <span aria-hidden="true" className="material-icons">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <!-- // 리스트 끝 -->
                        <!-- 내용 타이틀 시작 -->
                        <div className="page-separator">
                            <div className="page-separator__text">수요 활동 목록(<span className="number-count">12</span>)</div>
                        </div>
                        <!-- // 내용 타이틀 끝 -->
                        <!-- 리스트 시작 -->
                        <div className="card mb-lg-32pt">
                            <div className="card-header">
                                <form className="form-inline">
                                    <div className="col-sm-auto">
                                        <div className="form-group">
                                            <input id="filter_date" type="hidden"
                                                className="form-control flatpickr-input ml-16" placeholder="Select date ..."
                                                value="13/03/2018 to 20/03/2018" data-toggle="flatpickr"
                                                data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y"
                                                data-flatpickr-date-format="d/m/Y">
                                            <button
                                                className="btn bg-alt border-left border-top border-top-sm-0 rounded-0"><i
                                                    className="material-icons text-primary icon-20pt">refresh</i></button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="table-responsive" data-toggle="lists" data-lists-sort-by="js-lists-values-date"
                                data-lists-sort-desc="false"
                                data-lists-values="[&quot;js-lists-values-name&quot;, &quot;js-lists-values-date&quot;]">
                                <table className="table mb-0 thead-border-top-0 table-nowrap">
                                    <thead>
                                        <tr>
                                            <th style="width: 48px;">
                                                <a className="sort">No.</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">활동번호</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">활동명</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">기관/단체명</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">카테고리</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">모집분야</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">모집대상</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">활동장소</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">필요인원</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">총 활동시간</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">상태</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="list" id="tasks2">
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>00000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <strong className="flex js-lists-values-name"><a
                                                            href="../activities/activities-detail.html"
                                                            className="mr-4pt">제목입니다</a></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관 단체명입니다.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>카테고리</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>수요자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>기관/일반 사용자</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>활동 장소</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>1시간</span>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer p-8pt">
                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className="material-icons">chevron_left</span>
                                            <span>이전</span>
                                        </a>
                                    </li>
                                    <li className="page-item dropdown">
                                        <a className="page-link dropdown-toggle" data-toggle="dropdown" href="#"
                                            aria-label="Page">
                                            <span>1</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="" className="dropdown-item active">1</a>
                                            <a href="" className="dropdown-item">2</a>
                                            <a href="" className="dropdown-item">3</a>
                                            <a href="" className="dropdown-item">4</a>
                                            <a href="" className="dropdown-item">5</a>
                                        </div>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span>다음</span>
                                            <span aria-hidden="true" className="material-icons">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <!-- // 리스트 끝 -->
                        <!-- 내용 타이틀 시작 -->
                        <div className="page-separator">
                            <div className="page-separator__text">온라인 상담 목록(<span className="number-count">12</span>)</div>
                        </div>
                        <!-- // 내용 타이틀 끝 -->
                        <!-- 리스트 시작 -->
                        <div className="card mb-lg-32pt">
                            <div className="card-header">
                                <form className="form-inline">
                                    <div className="col-sm-auto">
                                        <div className="form-group">
                                            <input id="filter_date" type="hidden"
                                                className="form-control flatpickr-input ml-16" placeholder="Select date ..."
                                                value="13/03/2018 to 20/03/2018" data-toggle="flatpickr"
                                                data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y"
                                                data-flatpickr-date-format="d/m/Y">
                                            <button
                                                className="btn bg-alt border-left border-top border-top-sm-0 rounded-0"><i
                                                    className="material-icons text-primary icon-20pt">refresh</i></button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="table-responsive" data-toggle="lists" data-lists-sort-by="js-lists-values-date"
                                data-lists-sort-desc="false"
                                data-lists-values="[&quot;js-lists-values-name&quot;, &quot;js-lists-values-date&quot;]">
                                <table className="table mb-0 thead-border-top-0 table-nowrap text-align-left">
                                    <thead>
                                        <tr>
                                            <th style="width: 48px;">
                                                <a className="sort">No.</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">제목</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">상담분야</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">성명</a>
                                            </th>

                                            <th style="width: 48px;">
                                                <a className="sort">일정</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">전문가</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">답변상태</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">공개여부</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="list" id="tasks2">
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">답변완료</small>
                                            </td>
                                            <td>
                                                <small className="text-50">비공개</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/online-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">답변완료</small>
                                            </td>
                                            <td>
                                                <small className="text-50">공개</small>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer p-8pt">
                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className="material-icons">chevron_left</span>
                                            <span>이전</span>
                                        </a>
                                    </li>
                                    <li className="page-item dropdown">
                                        <a className="page-link dropdown-toggle" data-toggle="dropdown" href="#"
                                            aria-label="Page">
                                            <span>1</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="" className="dropdown-item active">1</a>
                                            <a href="" className="dropdown-item">2</a>
                                            <a href="" className="dropdown-item">3</a>
                                            <a href="" className="dropdown-item">4</a>
                                            <a href="" className="dropdown-item">5</a>
                                        </div>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span>다음</span>
                                            <span aria-hidden="true" className="material-icons">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- // 리스트 끝 -->
                        <!-- 내용 타이틀 시작 -->
                        <div className="page-separator">
                            <div className="page-separator__text">전화 상담 목록(<span className="number-count">12</span>)</div>
                        </div>
                        <!-- // 내용 타이틀 끝 -->
                        <!-- 리스트 시작 -->
                        <div className="card mb-lg-32pt">
                            <div className="card-header">
                                <form className="form-inline">
                                    <div className="col-sm-auto">
                                        <div className="form-group">
                                            <input id="filter_date" type="hidden"
                                                className="form-control flatpickr-input ml-16" placeholder="Select date ..."
                                                value="13/03/2018 to 20/03/2018" data-toggle="flatpickr"
                                                data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y"
                                                data-flatpickr-date-format="d/m/Y">
                                            <button
                                                className="btn bg-alt border-left border-top border-top-sm-0 rounded-0"><i
                                                    className="material-icons text-primary icon-20pt">refresh</i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="table-responsive" data-toggle="lists" data-lists-sort-by="js-lists-values-date"
                                data-lists-sort-desc="false"
                                data-lists-values="[&quot;js-lists-values-name&quot;, &quot;js-lists-values-date&quot;]">
                                <table className="table mb-0 thead-border-top-0 table-nowrap text-align-left">
                                    <thead>
                                        <tr>
                                            <th style="width: 48px;">
                                                <a className="sort">No.</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">제목</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">상담분야</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">성명</a>
                                            </th>

                                            <th style="width: 48px;">
                                                <a className="sort">일정</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">전문가</a>
                                            </th>
                                            <th style="width: 48px;">
                                                <a className="sort">답변상태</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="list" id="tasks2">
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">대기 중</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">답변완료</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center text-align-center">
                                                    <span>10</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/phone-consultation-detail.html"
                                                        className="mr-4pt"><strong>상담제목</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>법률/세무/법무/건축/노무</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>성명</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>2021.01.01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <a href="../sc-ok/pro-detail.html"
                                                        className="mr-4pt"><strong>담당자명</strong></a>
                                                </div>
                                            </td>
                                            <td>
                                                <small className="text-50">답변완료</small>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer p-8pt">
                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className="material-icons">chevron_left</span>
                                            <span>이전</span>
                                        </a>
                                    </li>
                                    <li className="page-item dropdown">
                                        <a className="page-link dropdown-toggle" data-toggle="dropdown" href="#"
                                            aria-label="Page">
                                            <span>1</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="" className="dropdown-item active">1</a>
                                            <a href="" className="dropdown-item">2</a>
                                            <a href="" className="dropdown-item">3</a>
                                            <a href="" className="dropdown-item">4</a>
                                            <a href="" className="dropdown-item">5</a>
                                        </div>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span>다음</span>
                                            <span aria-hidden="true" className="material-icons">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- // 리스트 끝 -->
                    </div> */}
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};
export default ExpertDetailView;
