import React from "react";

const CategoryImage = () => {
  return (
    <div className="list-group-item p-16pt">
      <a className="d-block mb-16pt">
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
            accept="image/*"
            className=""
            id="customFileUploadMultiple"
          />
          <label className="" htmlFor="customFileUploadMultiple"></label>
        </div>
      </div>
    </div>
  );
};

export default CategoryImage;
