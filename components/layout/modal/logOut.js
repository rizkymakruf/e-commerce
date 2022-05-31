// import { GlobalContext } from "context/global";
// import { useContext, useEffect } from "react";

import Link from "next/link";

export default function LogOut(props) {
  return (
    <>
      <div
        onClick={() => props.globalAct.setModal({ modal: "", type: "" })}
        className={`bg-black/50 fixed w-screen h-screen z-50 ${
          props.globalCtx.modal.modal === "" ? "hidden" : ""
        }`}
      />
      <div
        className={`duration-500 bg-white p-5 fixed z-50 rounded-xl flex items-center justify-center bottom-5 w-8/12 ${
          props.globalCtx.modal.modal === "openLogout"
            ? "translate-x-0 right-auto left-10"
            : "-translate-x-full overflow-hidden left-0"
        }`}
      >
        {/* {globalCtx.modal.type === "edit" ? (
          <div>EDIT KELAS</div>
        ) : globalCtx.modal.type === "add" ? (
          <div>ADD KELAS</div>
        ) : (
          globalCtx.modal.type === "view" && <div>VIEW KELAS</div>
        )} */}
        <div className="flex justify-between w-full items-center">
          <div>
            <p>Apakah anda ingin keluar ?</p>
          </div>
          <div className="flex gap-3">
            <Link href={"/auth/login"} passHref>
              <button
                className="bg-red-600 text-white py-1 px-3 rounded-lg"
                onClick={() =>
                  props.globalAct.setModal({ modal: "", type: "" })
                }
              >
                YES
              </button>
            </Link>
            <button
              className="border border-gray-300 text-black py-1 px-3 rounded-lg"
              onClick={() => props.globalAct.setModal({ modal: "", type: "" })}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
