import React, { useState, useEffect } from "react";
import axios from "axios";

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

const ImageForm = ({ type }) => {
  const [imgFile, setImgFile] = useState(null);
  const [imgBase64, setImgBase64] = useState([]);

  const onChangeImgFile = (e) => {
    const imgFileAry = e.target.files;

    setImgBase64([]);
    setImgFile(imgFileAry[0]);

    for (let i = 0; i < imgFileAry.length; i++) {
      if (imgFileAry[i]) {
        let reader = new FileReader();

        // 1. 파일 읽어서 버퍼에 저장
        reader.readAsDataURL(imgFileAry[i]);

        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 읽기 완료시, 아래 코드 실행
          const base64 = reader.result;

          if (base64) {
            var base64Sub = base64.toString();

            // 파일 base64 상태 업데이트
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };

  const getImgSrc = () => {
    if (imgBase64.length === 1) {
      return imgBase64[0];
    } else if (imgFile !== null) {
      return imgFile;
    } else {
      return `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_jared-rice-388260-unsplash.jpg`;
    }
  };

  const saveImage = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/ok/${type}`;

    try {
      const response = await axios.post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("저장되었습니다.");
      }
    } catch (e) {
      alert("저장 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onHandleSaveImg = () => {
    if (typeof imgFile !== "object") {
      alert("이미지 파일을 첨부해주세요.");
      return;
    }

    let formData = new FormData();

    formData.append("categoryFile", imgFile); // 이미지

    formData.append("userid", window.sessionStorage.getItem("userId"));

    saveImage(formData);
  };

  const onClickSaveBtn = useConfirm(
    "이미지를 저장하시겠습니까?",
    onHandleSaveImg
  );

  useEffect(() => {
    const getOkConsultationImage = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/${type}/images`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setImgFile(
            Object.keys(response.data).includes("images")
              ? `${process.env.REACT_APP_SERVICE_API}/ok/${response.data.folder}/${response.data.images}`
              : `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_jared-rice-388260-unsplash.jpg`
          );
        }
      } catch (e) {
        alert("이미지 조회 중, 오류가 발생하였습니다.");
        setImgFile(
          `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_jared-rice-388260-unsplash.jpg`
        );
        console.log(e);
      }
    };

    getOkConsultationImage();
  }, [type]);

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-lg-0">
          {imgFile && (
            <div className="list-group list-group-flush">
              <div className="list-group-item p-16pt">
                <span className="d-block mb-16pt">
                  <img
                    src={getImgSrc()}
                    alt=""
                    className="card-img card-img-cover"
                  />
                </span>
                <div className="form-row align-items-center">
                  <label
                    id="label-question"
                    htmlFor="question"
                    className="col-md-2 col-form-label form-label"
                  ></label>
                  <div className="col-md-10">
                    <input
                      type="file"
                      id="customFileUploadMultiple"
                      accept="image/*"
                      className=""
                      onChange={(e) => onChangeImgFile(e)}
                    />
                    <label
                      className=""
                      htmlFor="customFileUploadMultiple"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="card-footer">
            <button className="btn btn-secondary" type="button">
              취소
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={onClickSaveBtn}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
