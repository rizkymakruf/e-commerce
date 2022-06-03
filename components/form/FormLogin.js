import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import BgCoffee from "../../public/static/images/bg-coffee1.jpg";

export default function FormLogin({ myRef, globalCtx, globalAct, onSubmit }) {
  const router = useRouter();
  const [type, setType] = useState(false);
  return (
    <>
      <div className="flex w-full">
        <div className="w-2/4 h-screen">
          <div className="w-2/4 h-screen absolute z-20 flex items-center justify-center">
            <div className="bg-black w-3/4 h-5/6 rounded-lg bg-opacity-20 backdrop-blur-sm p-10">
              <Link href={"/"}>
                <button className="flex items-center gap-x-3">
                  <div className="">
                    <svg
                      width="60"
                      height="58"
                      viewBox="0 0 40 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.2308 5.43952V32.5222C39.2308 33.2883 39.0757 34.0544 38.7655 34.7056C38.339 35.625 37.6799 36.4294 36.8657 37.004C35.974 37.6169 34.8883 38 33.6864 38H6.27466C3.25045 38 0.769043 35.5484 0.769043 32.5222V5.43952C0.769043 2.45161 3.25045 0 6.27466 0H33.6864C36.7494 0 39.2308 2.45161 39.2308 5.43952Z"
                        fill="#D63031"
                      />
                      <path
                        d="M13.9518 16.3569C14.5334 18.2339 14.8048 20.1109 14.6497 21.9113C14.4946 23.4436 13.9906 24.8992 13.0213 26.0867C11.6255 27.8105 9.49302 28.7681 6.70144 28.998C6.35249 29.0363 5.96477 29.0363 5.57705 29.0363C4.14249 29.0363 2.55284 28.8448 0.808105 28.5V25.4738C5.69337 26.5847 9.14407 26.1633 10.6949 24.248C12.556 21.9113 11.7806 16.9698 8.79512 12.1815C6.66267 8.73387 6.23618 5.63105 7.59319 3.02621C8.21354 1.83871 9.14407 0.842742 10.2685 0H17.5188C14.6497 0.727823 11.3928 2.06855 10.2685 4.32863C9.41547 5.97581 9.80319 8.08266 11.3541 10.6109C12.3621 12.2964 13.3314 14.2883 13.9518 16.3569Z"
                        fill="white"
                      />
                      <path
                        d="M22.6748 38.0001H19.6894C19.418 34.7824 18.8364 32.0243 18.1385 29.6493C17.9059 28.9215 17.6732 28.1937 17.4406 27.5425C16.5488 25.2058 15.5408 23.3287 14.6102 21.8731C13.0206 19.4215 11.7023 18.3106 11.6636 18.2723L13.5634 16.0122C13.6022 16.0505 13.7185 16.1271 13.9123 16.3187C14.9204 17.2763 17.8671 20.3791 20.0771 26.1634C20.5423 27.3509 20.9688 28.6533 21.3566 30.0707C21.9769 32.4457 22.4422 35.0505 22.6748 38.0001Z"
                        fill="white"
                      />
                      <path
                        d="M30.8172 22.8691C28.1807 24.861 25.6218 26.4316 23.6832 27.5808C28.0257 28.5384 34.6557 30.6453 38.7655 34.7058C38.339 35.6251 37.6799 36.4295 36.8657 37.0041C32.8334 32.7904 25.1953 30.8368 21.3957 30.109C20.0386 29.8408 19.1469 29.7259 19.1081 29.7259L18.1388 29.611C17.9062 28.8832 17.6735 28.1554 17.4409 27.5041L18.6428 26.9295C18.6816 26.9295 19.2244 26.6614 20.1162 26.1634C21.5895 25.359 24.0321 23.9799 26.785 22.1029C27.5992 21.5283 28.4521 20.9537 29.3051 20.3025C32.9497 17.5445 36.7106 14.0586 39.2307 10.0747V15.0929C37.0207 17.736 34.2292 20.3408 30.8172 22.8691Z"
                        fill="white"
                      />
                      <path
                        d="M29.9643 22.0645L27.2503 23.252C27.0952 22.869 26.9401 22.5242 26.785 22.1411C23.7996 14.3266 24.3812 4.21371 24.8077 0H27.7931C27.638 1.53226 27.4442 4.02218 27.4442 6.97178C27.4442 11.1089 27.8319 16.0887 29.3052 20.3407C29.4991 20.9153 29.7317 21.5282 29.9643 22.0645Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <p className="text-white font-bold text-3xl text-left">
                      SEMUA KOPI
                    </p>
                    <p className="text-white font-bold text-3xl text-left">
                      INDONESIA
                    </p>
                  </div>
                </button>
              </Link>
              <div className="w-1/4 py-5">
                <hr />
              </div>
              <div className="gap-y-2">
                <p className="text-white text-sm">We are</p>
                <p className="text-white text-3xl py-2">
                  Invite only right now.
                </p>
                <p className="text-white text-sm">
                  10 Million+ people have joined our network
                </p>
                <p className="text-white text-sm">
                  We invite you to join the tribe
                </p>
              </div>
              <div className="pt-52">
                <p className="text-white">Don't have an account ?</p>
                <Link href={"/auth/register"}>
                  <button className="font-bold text-white">Register</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              className="w-full shadow-lg "
              src={BgCoffee}
              layout={"responsive"}
              objectFit={"cover"}
            />
          </div>
        </div>

        <div className="w-2/4 h-screen bg-white">
          <div className="h-auto p-24">
            <form onSubmit={onSubmit}>
              <div className="w-full h-full select-none">
                <div className="w-full h-full p-6">
                  <div className="w-44 pb-4">
                    <p className="text-3xl font-bold">LogIn</p>
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
                              width="17"
                              height="12"
                              viewBox="0 0 17 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.3706 5.7637C14.694 2.6642 11.7537 0.788574 8.5 0.788574C5.24627 0.788574 2.30099 2.6642 0.639303 5.7637L0.5 5.99753L0.629353 6.23634C2.30597 9.33584 5.24627 11.2115 8.5 11.2115C11.7537 11.2115 14.699 9.36071 16.3706 6.23634L16.5 5.99753L16.3706 5.7637ZM8.5 10.1916C5.699 10.1916 3.12687 8.62937 1.63433 5.99753C3.12687 3.36569 5.699 1.8035 8.5 1.8035C11.301 1.8035 13.8433 3.37066 15.3607 5.99753C13.8433 8.62937 11.296 10.1916 8.5 10.1916Z"
                                fill="#D63031"
                              />
                              <path
                                d="M8.64414 9.42536C10.529 9.42536 12.0571 7.89734 12.0571 6.01242C12.0571 4.12751 10.529 2.59949 8.64414 2.59949C6.75922 2.59949 5.2312 4.12751 5.2312 6.01242C5.2312 7.89734 6.75922 9.42536 8.64414 9.42536Z"
                                fill="#D63031"
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
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
                      <div className="w-full h-full flex-col items-center justify-between">
                        <div className="flex gap-x-2 items-center pb-3">
                          <input type={"checkbox"} className="rounded-full" />
                          <p className="text-xs">Ingatkan saya</p>
                        </div>
                        <Link href={"/"}>
                          <button
                            onClick={() => router.push("/auth/", "/auth/")}
                            // disabled={globalCtx.isFetch ? "disabled" : ""}
                            className="w-full px-8 h-10 bg-red-600 overflow-hidden text-white rounded-md hover:bg-red-700"
                          >
                            Masuk
                          </button>
                        </Link>
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
                              strokeWidth="0.319549"
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
                              strokeWidth="0.319549"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* <div className="">
                      <div className="w-full h-full flex items-center justify-center gap-x-1">
                        <p className="text-xs">Belum punya akun ?</p>
                        <button className="text-xs text-red-600 font-bold hover:underline">
                          Daftar
                        </button>
                      </div>
                    </div> */}
                    <div className="flex items-center justify-center w-full h-full pt-16">
                      <div className="w-full h-full flex flex-col justify-center ">
                        <p className="text-xs text-center">
                          Butuh bantuan atau pertanyaan ?
                        </p>
                        <div className="flex gap-x-1 items-center justify-center">
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
        </div>
      </div>
    </>
  );
}
