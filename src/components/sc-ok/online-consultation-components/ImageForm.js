import React from "react";

const ImageForm = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-lg-0">
          <div className="list-group list-group-flush">
            <div className="list-group-item p-16pt">
              <a href="" className="d-block mb-16pt">
                <img
                  src="../assets/images/stories/256_rsz_jared-rice-388260-unsplash.jpg"
                  alt=""
                  className="card-img card-img-cover"
                />
              </a>
              <div className="form-row align-items-center">
                <label
                  id="label-question"
                  htmlFor="question"
                  className="col-md-2 col-form-label form-label"
                ></label>
                <div className="col-md-10">
                  <input
                    type="file"
                    className=""
                    id="customFileUploadMultiple"
                    multiple=""
                  />
                  <label
                    className=""
                    htmlFor="customFileUploadMultiple"
                  ></label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-secondary" type="button">
              취소
            </button>
            <button className="btn btn-primary" type="submit">
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
