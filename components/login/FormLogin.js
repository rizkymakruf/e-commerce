import { useState } from "react";

export default function FormLogin({myRef, globalCtx, globalAct, onSubmit}) {

  return (
    <div className="w-full h-auto">
      <form onSubmit={onSubmit}>
        <div className="w-full h-full select-none">
          <div className="w-full h-full p-3 backdrop-blur bg-white/30 rounded-md border">

            <div className="w-full h-auto relative mb-4">
              <p className="text-sm font-extrabold">Username</p>
              {/*<span className="text-xs text-gray-400">Input username</span>*/}
              <input name="username" type="text"
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Username"
                disabled={globalCtx.isFetch ? "disabled" : ""}
              />
            </div>

            <div className="w-full h-auto relative mb-4">
              <p className="text-sm font-extrabold">Password</p>
              {/*<span className="text-xs text-gray-400">Input username</span>*/}
              <input name="password" type="text"
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Password"
                disabled={globalCtx.isFetch ? "disabled" : ""}
              />
            </div>

            <div className="w-full h-12 flex justify-between gap-2">
              <div className="w-full h-full flex items-center text-xs text-red-400">
                {globalCtx.errorMsg}
              </div>
              <div className="w-auto h-full flex items-center">
                <button disabled={globalCtx.isFetch ? "disabled" : ""} className="px-8 h-10 bg-gray-50 rounded border-2 border-gray-300 rounded overflow-hidden">
                Login
                </button>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}
