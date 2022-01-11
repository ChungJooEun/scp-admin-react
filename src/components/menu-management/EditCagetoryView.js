import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import CategoryForm from "./category-management-components/CategoryForm";
import CategoryImage from "./category-management-components/CategoryImage";

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

const EditCategoryView = ({ match }) => {
  const history = useHistory();

  const [categoryInfo, setCategoryInfo] = useState(null);

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

  // 카테고리 삭제 axios 요청
  const requestDeleteCategory = async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/menu/category/${categoryInfo.id}`;

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert("삭제되었습니다.");
        history.push("/main-menu/category");
      }
    } catch (e) {
      alert("카테고리 삭제에 실패하였습니다.");
      console.log(e);
    }
  };

  // 확인 버튼 클릭시, 수행
  const onHandleDeleteCategory = () => {
    requestDeleteCategory();
  };

  // 카테고리 삭제
  const onClickDeleteBtn = useConfirm(
    "카테고리를 삭제하시겠습니까?",
    onHandleDeleteCategory
  );

  // 카테고리 수정 axios 요청
  const requestSaveCategory = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/category`;

    try {
      const response = await axios.post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("수정 되었습니다.");
        history.push("/main-menu/category");
      }
    } catch (e) {
      alert("저장에 실패하였습니다.");
      console.log(e);
    }
  };

  // 확인 버튼 클릭시, 수행
  const onHandleSaveCategory = () => {
    // userid=작성자ID

    let formData = new FormData();

    formData.append("idx", categoryInfo.id); //id

    if (typeof categoryInfo.img === "object") {
      formData.append("categoryFile", categoryInfo.img[0]); // 이미지
    }

    formData.append("category", categoryInfo.name); // 카테고리 명

    formData.append("userid", window.sessionStorage.getItem("userId")); // 작성자 id

    for (let v of formData.values()) {
      console.log(v);
    }

    requestSaveCategory(formData);
  };

  // 카테고리 수정 내용 저장
  const onClickSaveBtn = useConfirm(
    "수정한 내용을 저장하시겠습니까?",
    onHandleSaveCategory
  );

  useEffect(() => {
    const { categoryId } = match.params;

    const getCategoryDetail = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/menu/category/${categoryId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setCategoryInfo({
            id: response.data.idx,
            name: response.data.category,
            img: Object.keys(response.data).includes("images")
              ? `${process.env.REACT_APP_SERVICE_API}/main/${response.data.folder}/${response.data.images}`
              : `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`,
          });
        }
      } catch (e) {
        alert("카테고리 상세조회를 하는데 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getCategoryDetail();
  }, [match.params]);

  if (!categoryInfo) {
    return <div></div>;
  }

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
              <h2 className="mb-0 text-align-center">카테고리 수정</h2>
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
                        type="edit"
                        categoryName={categoryInfo.name}
                        getCategoryName={getCategoryName}
                        onClickDeleteBtn={onClickDeleteBtn}
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
};

export default EditCategoryView;
