import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [isFetch, setIsFetch] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [fullname, setFullname] = useState("asdasd");

  const contextValue = {
    globalCtx: {
      errorMsg,
      isFetch,
      fullname
    },
    globalAct: {
      setErrorMsg,
      setIsFetch,
      setFullname
    }
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );

};
