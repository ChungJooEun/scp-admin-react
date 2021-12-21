import React from "react";
import PopupBannerForm from "./popup-banner-management-components/PopupBannerForm";
import PopupBannerImage from "./popup-banner-management-components/PopupBannerImage";

const EditPopupBannerView = () => {
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
              <h2 className="mb-0 text-align-center">팝업 배너 수정</h2>
              <br />
              <br />
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-lg-0">
                    <div className="list-group list-group-flush">
                      <PopupBannerImage />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-lg-0">
                    <div className="list-group list-group-flush">
                      <PopupBannerForm type="edit" />
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

export default EditPopupBannerView;
