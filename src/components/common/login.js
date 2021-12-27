import React from "react";

const Login = () => {
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
            <div className="page-section"></div>
            <div className="page-section">
              <div className="col-md-5 p-0 mx-auto">
                <h2 className="mb-0">로고</h2>
                <br />
                <br />
                <div className="form-group">
                  <label className="form-label" for="email">
                    아이디:
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="아이디 ..."
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" for="password">
                    비밀번호:
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="비밀번호 ..."
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-accent">로그인</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
