import React, { useState } from "react";

const CategoryImage = ({ imgSrc, getCategoryImg }) => {
  const [imgBase64, setImgBase64] = useState([]);

  const onChangeImgFile = (e) => {
    const imgFileAry = e.target.files;

    setImgBase64([]);
    getCategoryImg(imgFileAry);

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
    } else {
      return imgSrc;
    }
    // else if (imgSrc) {
    //   return `https://culture.seocho.go.kr:3000${imgSrc}`;
    // }
    // else {
    //   return "/assets/images/stories/event-poster-default.jpg";
    // }
  };

  return (
    <div className="list-group-item p-16pt">
      <p className="d-block mb-16pt">
        <img src={getImgSrc()} alt="" className="card-img card-img-cover" />
      </p>
      <div className="form-row align-items-center">
        <label
          id="label-question"
          htmlFor="question"
          className="col-md-2 col-form-label form-label"
        ></label>
        <div className="col-md-10">
          <input
            type="file"
            accept="image/*"
            className=""
            id="customFileUploadMultiple"
            onChange={(e) => onChangeImgFile(e)}
          />
          <label className="" htmlFor="customFileUploadMultiple"></label>
        </div>
      </div>
    </div>
  );
};

export default CategoryImage;
