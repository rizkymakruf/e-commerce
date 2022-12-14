import LogOut from "./modal/logOut";
import AddAddress from "./modal/addAddress";
import Payment from "./modal/payment";
import NavigatorProfile from "./modal/navigatorProfile";
import { GlobalContext } from "context/global";
import { useContext } from "react";

const Modal = () => {
  const { globalAct, globalCtx } = useContext(GlobalContext);

  return (
    <div>
      <div
        onClick={() => globalAct.setModal({ modal: "", type: "" })}
        className={`bg-black/50 fixed w-full top-0 h-screen z-50 ${
          globalCtx.modal.modal === "" ||
          globalCtx.modal.modal === "openNavigator"
            ? "hidden"
            : ""
        }`}
      />
      <div className="fixed z-50">
        <LogOut />
        <AddAddress />
        <Payment />
        <NavigatorProfile />
      </div>
    </div>
  );
};

export default Modal;
