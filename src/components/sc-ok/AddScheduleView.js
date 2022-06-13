import React, { useState, useCallback, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { convertDateStr } from "../../util/date-convert-function";
import LoginContext from "../../context/login";
import checkLoginValidation from "../../util/login-validation";

const useConfirm = (message = null, onConfirm) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };
  return confirmAction;
};

const AddScheduleView = () => {
  const { isLogin } = useContext(LoginContext).state;
  const history = useHistory();

  const [counselingInfo, setCounselingInfo] = useState({
    date: null,
    time: "default",
    area: "default",
    expertId: "default",
  });

  const onChangeCounselingInfo = (name, data) => {
    setCounselingInfo({
      ...counselingInfo,
      [name]: data,
    });
  };

  const onChangeCounselingArea = (seletedArea) => {
    setCounselingInfo({
      ...counselingInfo,
      area: seletedArea,
      expertId: "default",
    });
  };

  const [expertList, setExpertList] = useState(null);

  const setExpertOption = () => {
    let ary = [];

    for (let i = 0; i < expertList.length; i++) {
      ary.push(
        <option
          value={expertList[i].expertId}
          key={expertList[i].expertId}
          disabled={expertList[i].expertId === "default" ? true : false}
        >
          {expertList[i].expertName}
        </option>
      );
    }

    return ary;
  };

  const getExpertList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/phone-schedule/expert/list/${counselingInfo.area}`;

    if (counselingInfo.area !== "default") {
      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          let ary = [];

          ary.push({
            expertId: "default",
            expertName: "전문가",
          });

          for (let i = 0; i < response.data.length; i++) {
            ary.push({
              expertId: response.data[i].id,
              expertName: response.data[i].name,
            });
          }

          setExpertList(ary);
        }
      } catch (e) {
        alert("전문가 목록 조회 중, 오류가 발생하였습니다.");
        console.log(e);
      }
    }
  }, [counselingInfo.area]);

  const saveCounselingSchedule = async (data) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/phone-schedule`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("일정이 추가되었습니다.");
        history.push("/sc-ok/phone-consultation");
      }
    } catch (e) {
      alert("일정 추가 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onHandleSaveCounselingInfo = () => {
    if (counselingInfo.date === null) {
      alert("상담 일자를 선택해주세요.");
      return;
    } else if (counselingInfo.time === "default") {
      alert("상담 시간을 선택해주세요.");
      return;
    } else if (counselingInfo.area === "default") {
      alert("상담 분야를 선택해주세요.");
      return;
    } else if (counselingInfo.expertId === "default") {
      alert("전문가를 선택해주세요.");
      return;
    } else {
    }

    let data = new Object();

    data.scheduleDate = convertDateStr(counselingInfo.date); //   "scheduleDate": "2022-02-01",
    data.scheduleTime = counselingInfo.time; //   "scheduleTime": "오후 02:00",
    data.cateId = counselingInfo.area; //   "cateId": "CC00000001",
    data.expertIdx = counselingInfo.expertId; //   "expertIdx": 61,
    data.createdUid = window.sessionStorage.getItem("userIdx"); //   "createdUid": 9 -> 관리자 로그인 IDX

    saveCounselingSchedule(data);
  };

  const onClickSaveBtn = useConfirm(
    "전화 상담 일정을 추가하시겠습니까?",
    onHandleSaveCounselingInfo
  );

  useEffect(() => {
    checkLoginValidation(isLogin);
    if (isLogin) {
      getExpertList();
    }
  }, [getExpertList, isLogin]);

  if (isLogin)
    return (
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <div className="container-fluid page__container">
            <div className="page-section">
              <h2 className="mb-0 text-align-center">
                서초OK생활자문단 - 일정 추가
              </h2>
              <br />
              <br />
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-lg-0">
                    <div className="list-group list-group-flush">
                      <div className="list-group-item p-16pt">
                        <div className="form-group row">
                          <div className="col-lg-3 mb-16pt">
                            <div className="form-group">
                              <Flatpickr
                                className="form-control flatpickr-input-display  ml-16"
                                placeholder="상담일자"
                                data-toggle="flatpickr"
                                options={{ mode: "single" }}
                                onChange={(date) =>
                                  onChangeCounselingInfo("date", date[0])
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 mb-16pt">
                            <select
                              id="custom-select"
                              className="form-control custom-select"
                              defaultValue={counselingInfo.time}
                              key={counselingInfo.time}
                              name="time"
                              onChange={(e) =>
                                onChangeCounselingInfo(
                                  e.target.name,
                                  e.target.value
                                )
                              }
                            >
                              <option value="default" disabled>
                                시간
                              </option>
                              <option value="오전 07:00">오전 07:00</option>
                              <option value="오전 07:30">오전 07:30</option>
                              <option value="오전 08:00">오전 08:00</option>
                              <option value="오전 08:30">오전 08:30</option>
                              <option value="오전 09:00">오전 09:00</option>
                              <option value="오전 09:30">오전 09:30</option>
                              <option value="오전 10:00">오전 10:00</option>
                              <option value="오전 10:30">오전 10:30</option>
                              <option value="오전 11:00">오전 11:00</option>
                              <option value="오전 11:30">오전 11:30</option>
                              <option value="오후 12:00">오후 12:00</option>
                              <option value="오후 12:30">오후 12:30</option>
                              <option value="오후 01:00">오후 01:00</option>
                              <option value="오후 01:30">오후 01:30</option>
                              <option value="오후 02:00">오후 02:00</option>
                              <option value="오후 02:30">오후 02:30</option>
                              <option value="오후 03:00">오후 03:00</option>
                              <option value="오후 03:30">오후 03:30</option>
                              <option value="오후 04:00">오후 04:00</option>
                              <option value="오후 04:30">오후 04:30</option>
                              <option value="오후 05:00">오후 05:00</option>
                              <option value="오후 05:30">오후 05:30</option>
                              <option value="오후 06:00">오후 06:00</option>
                              <option value="오후 06:30">오후 06:30</option>
                              <option value="오후 07:00">오후 07:00</option>
                              <option value="오후 07:30">오후 07:30</option>
                              <option value="오후 08:00">오후 08:00</option>
                              <option value="오후 08:30">오후 08:30</option>
                              <option value="오후 09:00">오후 09:00</option>
                              <option value="오후 09:30">오후 09:30</option>
                            </select>
                          </div>
                          <div className="col-lg-3 mb-16pt">
                            <select
                              id="custom-select"
                              className="form-control custom-select"
                              defaultValue={counselingInfo.area}
                              key={counselingInfo.area}
                              onChange={(e) =>
                                onChangeCounselingArea(e.target.value)
                              }
                            >
                              <option value="default" disabled>
                                분야
                              </option>
                              <option value="CC00000001">법률</option>
                              <option value="CC00000004">법무</option>
                              <option value="CC00000002">세무</option>
                              <option value="CC00000006">노무</option>
                              <option value="CC00000003">건축</option>
                            </select>
                          </div>
                          <div className="col-lg-3 mb-16pt">
                            <select
                              id="custom-select"
                              className="form-control custom-select"
                              name="expertId"
                              onChange={(e) =>
                                onChangeCounselingInfo(
                                  e.target.name,
                                  e.target.value
                                )
                              }
                            >
                              {expertList ? (
                                setExpertOption()
                              ) : (
                                <option value="default" key="default">
                                  전문가
                                </option>
                              )}
                            </select>
                          </div>
                        </div>
                        <button
                          className="btn btn btn-secondary ml-16pt"
                          onClick={() =>
                            history.push("/sc-ok/phone-consultation")
                          }
                        >
                          취소
                        </button>
                        <button className="btn btn-warning ml-16pt">
                          삭제
                        </button>
                        <button
                          className="btn btn-primary ml-16pt"
                          onClick={() => onClickSaveBtn()}
                        >
                          저장
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default AddScheduleView;
