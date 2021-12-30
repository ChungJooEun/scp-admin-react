import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Category from "../../example/category";

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
    const url = `http://118.67.153.236:8080/api/v1/menu/category/:category_id${categoryInfo.id}`;

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
    // requestDeleteCategory()
  };

  // 카테고리 삭제
  const onClickDeleteBtn = useConfirm(
    "카테고리를 삭제하시겠습니까?",
    onHandleDeleteCategory
  );

  // 카테고리 수정 axios 요청
  const requestSaveCategory = async (data) => {
    const url = `http://118.67.153.236:8080/api/v1/menu/category/:category_id${categoryInfo.id}`;

    try {
      const response = await axios.put(url, data);

      if (response.status === 200) {
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
    let formData = new FormData();

    formData.append("id", categoryInfo.id); //id

    if (categoryInfo.img) {
      formData.append("file", categoryInfo.img[0]); // 이미지
    }

    formData.append("name", categoryInfo.name); // 카테고리 명

    // requestSaveCategory(formData);
  };

  // 카테고리 수정 내용 저장
  const onClickSaveBtn = useConfirm(
    "수정한 내용을 저장하시겠습니까?",
    onHandleSaveCategory
  );

  useEffect(() => {
    const { categoryId } = match.params;

    setCategoryInfo({
      id: Category[categoryId].id,
      name: Category[categoryId].name,
      img: Category[categoryId].img,
    });
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
