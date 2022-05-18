import { useState } from "react";
import { useRouter } from "next/router";

export default function FormLogin({ myRef, globalCtx, globalAct, onSubmit }) {
  const router = useRouter();
  const [type, setType] = useState(false);
  return (
    <div className="w-full md:w-2/6 h-auto p-4 md:p-0">
      <form onSubmit={onSubmit}>
        <div className="w-full h-full select-none">
          <div className="w-full h-full p-6 bg-white/80 rounded-md shadow-xl">
            <div className="w-44 pb-4">
              <p className="text-2xl font-bold">Masuk untuk melanjutkan</p>
            </div>
            <div className="w-full h-auto relative mb-4">
              <p className="text-sm font-extrabold">
                Masukkan Nomor Handphone atau Email
              </p>

              <input
                name="username"
                type="text"
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Username"
                disabled={globalCtx.isFetch ? "disabled" : ""}
              />
            </div>
            <div className="w-full h-auto relative mb-4">
              <p className="text-sm font-extrabold">Kata sandi</p>

              <div className="relative">
                <div className="absolute right-4 top-4 z-10">
                  <button
                    onClick={() => setType(!type)}
                    className="outline-none"
                  >
                    {type ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        stroke="gray"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66669 8.83337C1.66669 8.83337 4.58335 12.1667 10 12.1667C15.4167 12.1667 18.3334 8.83337 18.3334 8.83337M3.33335 10.2042L1.66669 12.1667M18.3334 12.1667L16.67 10.2067M7.42835 11.9L6.66669 14.25M12.5525 11.9067L13.3334 14.25"
                          stroke="#C4C4C4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <input
                name="password"
                // hide & show password
                type={`${type ? "text" : "password"}`}
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Password"
                disabled={globalCtx.isFetch ? "disabled" : ""}
              />
            </div>

            <div className="flex flex-col gap-y-6">
              <div className="">
                <div className="w-full h-full flex items-center justify-between">
                  <div className="flex gap-x-2 items-center">
                    <input type={"checkbox"} className="rounded-full" />
                    <p className="text-xs">Ingatkan saya</p>
                  </div>
                  <button
                    onClick={() => router.push("/auth/", "/auth/")}
                    // disabled={globalCtx.isFetch ? "disabled" : ""}
                    className="px-8 h-10 bg-red-600 overflow-hidden text-white rounded-md hover:bg-red-700"
                  >
                    Masuk
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center gap-y-2">
                <p className="text-xs">Atau masuk dengan</p>
                <div className="w-full h-full flex items-center justify-center gap-x-6">
                  <button
                    disabled={globalCtx.isFetch ? "disabled" : ""}
                    className="hover:scale-110 duration-150"
                  >
                    <svg
                      width="39"
                      height="39"
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.3605 16.6696H31.3309V16.6166H19.8271V21.7293H27.0508C25.997 24.7056 23.1651 26.8421 19.8271 26.8421C15.5918 26.8421 12.1579 23.4082 12.1579 19.1729C12.1579 14.9376 15.5918 11.5038 19.8271 11.5038C21.7821 11.5038 23.5607 12.2413 24.915 13.446L28.5304 9.83062C26.2475 7.70306 23.1939 6.39099 19.8271 6.39099C12.7683 6.39099 7.04517 12.1141 7.04517 19.1729C7.04517 26.2318 12.7683 31.9549 19.8271 31.9549C26.886 31.9549 32.6091 26.2318 32.6091 19.1729C32.6091 18.3159 32.5209 17.4793 32.3605 16.6696Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M8.51892 13.2236L12.7184 16.3034C13.8547 13.4901 16.6067 11.5038 19.8271 11.5038C21.7821 11.5038 23.5607 12.2413 24.915 13.446L28.5303 9.83062C26.2475 7.70306 23.1939 6.39099 19.8271 6.39099C14.9176 6.39099 10.6599 9.16276 8.51892 13.2236Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M19.8271 31.9548C23.1287 31.9548 26.1286 30.6913 28.3968 28.6366L24.4408 25.2891C23.1144 26.2978 21.4936 26.8434 19.8271 26.8421C16.5025 26.8421 13.6797 24.7222 12.6162 21.7638L8.448 24.9753C10.5634 29.1147 14.8594 31.9548 19.8271 31.9548Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M32.3605 16.6696H31.3309V16.6166H19.8271V21.7294H27.0509C26.5468 23.1459 25.6387 24.3836 24.4389 25.2898L24.4408 25.2885L28.3968 28.6361C28.1169 28.8904 32.6091 25.5639 32.6091 19.173C32.6091 18.3159 32.5209 17.4794 32.3605 16.6696Z"
                        fill="#1976D2"
                      />
                      <rect
                        x="0.813949"
                        y="0.159774"
                        width="38.0263"
                        height="38.0263"
                        rx="19.0132"
                        stroke="#C4C4C4"
                        stroke-width="0.319549"
                      />
                    </svg>
                  </button>
                  <button
                    disabled={globalCtx.isFetch ? "disabled" : ""}
                    className="hover:scale-110 duration-150"
                  >
                    <svg
                      width="39"
                      height="39"
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.794 11.3312V14.8437H13.2197V19.1384H15.794V31.9025H21.0781V19.1397H24.6251C24.6251 19.1397 24.9574 17.0805 25.1184 14.8284H21.0998V11.8911C21.0998 11.4526 21.675 10.8621 22.2451 10.8621H25.1261V6.39099H21.2097C15.6624 6.39099 15.794 10.6896 15.794 11.3312Z"
                        fill="#395185"
                      />
                      <rect
                        x="0.159774"
                        y="0.159774"
                        width="38.0263"
                        height="37.9739"
                        rx="18.987"
                        stroke="#C4C4C4"
                        stroke-width="0.319549"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="">
                <div className="w-full h-full flex items-center justify-center gap-x-1">
                  <p className="text-xs">Belum punya akun ?</p>
                  <button className="text-xs text-red-600 font-bold hover:underline">
                    Daftar
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-full">
                <div className="w-full h-full flex flex-col ">
                  <p className="text-xs">Butuh bantuan atau pertanyaan ?</p>
                  <div className="flex gap-x-1 items-center">
                    <p className="text-xs">Hubungi kami di</p>
                    <button className="text-xs text-red-600 font-bold hover:underline">
                      Whatsapp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
