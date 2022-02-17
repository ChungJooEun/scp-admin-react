import React, { createContext, useState } from "react";

const LoginContext = createContext({
  state: {
    isLogin: false,
  },
  actions: {
    setIsLogin: () => {},
  },
});

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    window.sessionStorage.getItem("token") !== null &&
      window.sessionStorage.getItem("token") !== undefined
      ? true
      : false
  );

  const value = {
    state: { isLogin },
    actions: { setIsLogin },
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

const { Consumer: LoginConsumer } = LoginContext;

export { LoginProvider, LoginConsumer };
export default LoginContext;
