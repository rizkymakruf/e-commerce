import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isFetch, setIsFetch] = useState(false);
  const [modal, setModal] = useState({ modal: "", type: "" });
  const [isView, setIsView] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fullname, setFullname] = useState("asdasd");

  const contextValue = {
    globalCtx: {
      modal,
      errorMsg,
      isFetch,
      fullname,
    },
    globalAct: {
      setModal,
      setErrorMsg,
      setIsFetch,
      setFullname,
    },
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
