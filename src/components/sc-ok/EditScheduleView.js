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

const EditScheduleView = ({ match }) => {
  const { isLogin } = useContext(LoginContext).state;
  const history = useHistory();

  const [counselingInfo, setCounselingInfo] = useState({
    area: "default",
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
          key={expertList[i].expertId + `${i}`}
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
            expertName: "?????????",
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
        alert("????????? ?????? ?????? ???, ????????? ?????????????????????.");
        console.log(e);
      }
    }
  }, [counselingInfo.area]);

  const editCounselingSchedule = async (data) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/phone-schedule/${counselingInfo.idx}`;

    try {
      const response = await axios.put(url, data);

      if (response.status === 201) {
        alert("????????? ?????????????????????.");
        history.push("/sc-ok/phone-consultation");
      }
    } catch (e) {
      alert("?????? ?????? ???, ????????? ?????????????????????.");
      console.log(e);
    }
  };

  const onEditCounselingInfo = () => {
    if (counselingInfo.date === null) {
      alert("?????? ????????? ??????????????????.");
      return;
    } else if (counselingInfo.time === "default") {
      alert("?????? ????????? ??????????????????.");
      return;
    } else if (counselingInfo.area === "default") {
      alert("?????? ????????? ??????????????????.");
      return;
    } else if (counselingInfo.expertId === "default") {
      alert("???????????? ??????????????????.");
      return;
    } else {
    }

    let data = new Object();

    data.scheduleDate = convertDateStr(counselingInfo.date); //   "scheduleDate": "2022-02-01",
    data.scheduleTime = counselingInfo.time; //   "scheduleTime": "?????? 02:00",
    data.cateId = counselingInfo.area; //   "cateId": "CC00000001",
    data.expertIdx = counselingInfo.expertId; //   "expertIdx": 61,
    data.createdUid = window.sessionStorage.getItem("userIdx"); //   "createdUid": 9 -> ????????? ????????? IDX

    editCounselingSchedule(data);
  };

  const onClickSaveBtn = useConfirm(
    counselingInfo.status === 0
      ? "?????? ?????? ????????? ?????????????????????????"
      : "?????? ????????? ????????? ?????? ???????????????.\n????????? ?????????????????????????",
    onEditCounselingInfo
  );

  const deleteSchedule = async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/phone-schedule/${counselingInfo.idx}`;

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert("?????????????????????.");
        history.push("/sc-ok/phone-consultation");
      }
    } catch (e) {
      alert("?????? ?????? ???, ????????? ?????????????????????. ");
      console.log(e);
    }
  };

  const onClickDelBtn = useConfirm(
    counselingInfo.status === 0
      ? "?????? ?????? ????????? ?????????????????????????"
      : "?????? ????????? ????????? ?????? ???????????????.\n????????? ?????????????????????????",
    deleteSchedule
  );

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      const { phoneCounselingIdx } = match.params;

      const getScheduleInfo = async () => {
        const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/phone-schedule/${phoneCounselingIdx}`;

        try {
          const response = await axios.get(url);

          if (response.status === 200) {
            setCounselingInfo({
              idx: response.data.idx,
              date: new Date(response.data.scheduleDate),
              time: response.data.scheduleTime,
              area: response.data.cateId,
              expertId: response.data.expertIdx,
              status: response.data.status,
            });
          }
        } catch (e) {
          alert("????????? ???????????? ???, ????????? ?????????????????????.");
          console.log(e);
        }
      };

      getScheduleInfo();
      getExpertList();
    }
  }, [getExpertList, isLogin, match.params]);

  if (Object.keys(counselingInfo).includes("idx") === false) {
    return <div></div>;
  }

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
                ??????OK??????????????? - ?????? ??????
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
                                className="form-control flatpickr-input-display ml-16"
                                placeholder="????????????"
                                data-toggle="flatpickr"
                                options={{ mode: "single" }}
                                value={counselingInfo.date}
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
                                ??????
                              </option>
                              <option value="?????? 07:00">?????? 07:00</option>
                              <option value="?????? 07:30">?????? 07:30</option>
                              <option value="?????? 08:00">?????? 08:00</option>
                              <option value="?????? 08:30">?????? 08:30</option>
                              <option value="?????? 09:00">?????? 09:00</option>
                              <option value="?????? 09:30">?????? 09:30</option>
                              <option value="?????? 10:00">?????? 10:00</option>
                              <option value="?????? 10:30">?????? 10:30</option>
                              <option value="?????? 11:00">?????? 11:00</option>
                              <option value="?????? 11:30">?????? 11:30</option>
                              <option value="?????? 12:00">?????? 12:00</option>
                              <option value="?????? 12:30">?????? 12:30</option>
                              <option value="?????? 01:00">?????? 01:00</option>
                              <option value="?????? 01:30">?????? 01:30</option>
                              <option value="?????? 02:00">?????? 02:00</option>
                              <option value="?????? 02:30">?????? 02:30</option>
                              <option value="?????? 03:00">?????? 03:00</option>
                              <option value="?????? 03:30">?????? 03:30</option>
                              <option value="?????? 04:00">?????? 04:00</option>
                              <option value="?????? 04:30">?????? 04:30</option>
                              <option value="?????? 05:00">?????? 05:00</option>
                              <option value="?????? 05:30">?????? 05:30</option>
                              <option value="?????? 06:00">?????? 06:00</option>
                              <option value="?????? 06:30">?????? 06:30</option>
                              <option value="?????? 07:00">?????? 07:00</option>
                              <option value="?????? 07:30">?????? 07:30</option>
                              <option value="?????? 08:00">?????? 08:00</option>
                              <option value="?????? 08:30">?????? 08:30</option>
                              <option value="?????? 09:00">?????? 09:00</option>
                              <option value="?????? 09:30">?????? 09:30</option>
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
                                ??????
                              </option>
                              <option value="CC00000001">??????</option>
                              <option value="CC00000004">??????</option>
                              <option value="CC00000002">??????</option>
                              <option value="CC00000006">??????</option>
                              <option value="CC00000003">??????</option>
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
                              value={counselingInfo.expertId}
                            >
                              {expertList ? (
                                setExpertOption()
                              ) : (
                                <option value="default" key="default">
                                  ?????????
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
                          ??????
                        </button>
                        <button
                          className="btn btn-warning ml-16pt"
                          onClick={() => onClickDelBtn()}
                        >
                          ??????
                        </button>
                        <button
                          className="btn btn-primary ml-16pt"
                          onClick={() => onClickSaveBtn()}
                        >
                          ??????
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

export default EditScheduleView;
