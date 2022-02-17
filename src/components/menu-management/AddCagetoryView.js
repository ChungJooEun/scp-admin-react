import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import CategoryForm from "./category-management-components/CategoryForm";
import CategoryImage from "./category-management-components/CategoryImage";
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

const AddCategoryView = () => {
  const history = useHistory();
  const { isLogin } = useContext(LoginContext).state;

  const [categoryInfo, setCategoryInfo] = useState({
    name: "",
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`,
  });

  // 카테고리명 수정
  const getCategoryName = (editName) => {
    setCategoryInfo({
      ...categoryInfo,
      name: editName,
    });
  };

  // 카테고리 이미지 수정
  const getCategoryImg = (imgFile) => {
    setCategoryInfo({
      ...categoryInfo,
      img: imgFile,
    });
  };

  // 카테고리 추가 axios 요청
  const requestAddCategory = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/category`;

    try {
      const response = await axios.post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("저장되었습니다.");
        history.push("/main-menu/category");
      }
    } catch (e) {
      alert("저장에 실패하였습니다.");
      console.log(e);
    }
  };

  // 확인 버튼 클릭시, 수행
  const onHandleSaveCategory = () => {
    let formData = new FormData();

    if (typeof categoryInfo.img === "object") {
      formData.append("categoryFile", categoryInfo.img[0]); // 이미지
    }

    formData.append("category", categoryInfo.name); // 카테고리 명

    formData.append("userid", window.sessionStorage.getItem("userId"));

    for (let v of formData.values()) console.log(v);

    requestAddCategory(formData);
  };

  // 카테고리 수정 내용 저장
  const onClickSaveBtn = useConfirm(
    "새로운 카테고리를 저장하시겠습니까?",
    onHandleSaveCategory
  );

  useEffect(() => {
    checkLoginValidation(isLogin);
  }, [isLogin]);

  if (isLogin) {
    return (
      <>
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <div className="container-fluid page__container">
              <div className="page-section">
                <h2 className="mb-0 text-align-center">카테고리 추가</h2>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card mb-lg-0">
                      <div className="list-group list-group-flush">
                        <CategoryImage
                          imgSrc={categoryInfo.img}
                          getCategoryImg={getCategoryImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card mb-lg-0">
                      <div className="list-group list-group-flush">
                        <CategoryForm
                          type="add"
                          categoryName={categoryInfo.name}
                          getCategoryName={getCategoryName}
                          onClickSaveBtn={onClickSaveBtn}
                        />
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
  } else {
    return null;
  }
};

export default AddCategoryView;
