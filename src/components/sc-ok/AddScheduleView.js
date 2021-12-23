import React from "react";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";

const AddScheduleView = () => {
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
                                className="form-control flatpickr-input ml-16"
                                placeholder="시작날짜 - 종료날짜"
                                data-toggle="flatpickr"
                                options={{ mode: "range" }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 mb-16pt">
                            <select
                              id="custom-select"
                              className="form-control custom-select"
                            >
                              <option selected="">시간</option>
                              <option value="1">오전 07:00</option>
                              <option value="2">오전 07:30</option>
                              <option value="3">오전 08:00</option>
                              <option value="4">오전 08:30</option>
                              <option value="5">오전 09:00</option>
                              <option value="6">오전 9:30</option>
                              <option value="7">오전 10:00</option>
                              <option value="8">오전 10:30</option>
                              <option value="9">오전 11:00</option>
                              <option value="10">오전 11:30</option>
                              <option value="11">오후 12:00</option>
                              <option value="12">오후 12:30</option>
                              <option value="13">오후 01:00</option>
                              <option value="14">오후 01:30</option>
                              <option value="15">오후 02:00</option>
                              <option value="16">오후 02:30</option>
                              <option value="17">오후 03:00</option>
                              <option value="18">오후 03:30</option>
                              <option value="19">오후 04:00</option>
                              <option value="20">오후 04:30</option>
                              <option value="21">오후 05:00</option>
                              <option value="22">오후 05:30</option>
                              <option value="23">오후 06:00</option>
                              <option value="24">오후 06:30</option>
                              <option value="25">오후 07:00</option>
                              <option value="26">오후 07:30</option>
                              <option value="27">오후 08:00</option>
                              <option value="28">오후 08:30</option>
                              <option value="29">오후 09:00</option>
                              <option value="30">오후 09:30</option>
                            </select>
                          </div>
                          <div className="col-lg-3 mb-16pt">
                            <select
                              id="custom-select"
                              className="form-control custom-select"
                            >
                              <option selected="">분야</option>
                              <option value="1">법률</option>
                              <option value="2">법무</option>
                              <option value="3">세무</option>
                              <option value="3">노무</option>
                              <option value="3">건축</option>
                            </select>
                          </div>
                          <div className="col-lg-3 mb-16pt">
                            <select
                              id="custom-select"
                              className="form-control custom-select"
                            >
                              <option selected="">전문가</option>
                              <option value="1">전문가 이름1</option>
                              <option value="2">전문가 이름2</option>
                              <option value="3">전문가 이름3</option>
                            </select>
                          </div>
                        </div>
                        <button
                          className="btn btn btn-secondary ml-16pt"
                          onclick="location.href='../sc-ok/online-consultation.html'"
                        >
                          취소
                        </button>
                        <button
                          className="btn btn-warning ml-16pt"
                          data-toggle="swal"
                          data-swal-title="정말 삭제 하시겠습니까??"
                          data-swal-text="이 동작은 다시 되돌릴 수 없습니다."
                          data-swal-type="warning"
                          data-swal-show-cancel-button="true"
                          data-swal-confirm-button-text="확인"
                          data-swal-confirm-cb="#swal-confirm-delete"
                          data-swal-close-on-confirm="false"
                        >
                          삭제
                        </button>
                        <div
                          id="swal-confirm-delete"
                          className="d-none"
                          data-swal-type="success"
                          data-swal-title="삭제완료"
                          data-swal-text="삭제 완료되었습니다."
                        ></div>
                        <button
                          className="btn btn-primary ml-16pt"
                          data-toggle="swal"
                          data-swal-title="완료!"
                          data-swal-text="성공적으로 저장 되었습니다!"
                          data-swal-type="success"
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
    </>
  );
};

export default AddScheduleView;
