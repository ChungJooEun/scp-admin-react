const checkLoginValidation = () => {
  let token = window.sessionStorage.getItem("token");

  if (!token || token === undefined) {
    alert("로그인이 필요합니다.");
    window.location.href = "/common/login";
    return false;
  } else {
    return true;
  }
};

export default checkLoginValidation;
