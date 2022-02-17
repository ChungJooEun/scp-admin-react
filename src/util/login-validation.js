const checkLoginValidation = (isLogin) => {
  if (!isLogin) {
    alert("로그인이 필요합니다.");
    window.location.href = "/common/login";
  }
};

export default checkLoginValidation;
