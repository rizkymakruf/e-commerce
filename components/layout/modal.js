import { GlobalContext } from "context/global";
import { useContext } from "react";
import LogOut from "./modal/logOut";

const Modal = () => {
  const { globalAct, globalCtx } = useContext(GlobalContext);

  return (
    <div>
      <LogOut globalCtx={globalCtx} globalAct={globalAct} />
    </div>
  );
};

export default Modal;
