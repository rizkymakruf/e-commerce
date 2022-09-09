import { useState } from "react";

export default function AkunNav() {
  const [type1, setType1] = useState(false);
  const [type2, setType2] = useState(false);
  const [type3, setType3] = useState(false);
  return (
    <>
      <div className="grid grid-cols-2">
        {/* form */}
        <div className="flex-col gap-y-2">
          <div>
            <p className="text-xl font-bold pb-2">Akun</p>
          </div>
          <div className="flex-col space-y-2">
            <div className="flex-col space-y-1">
              <p className="text-sm">Nama Lengkap</p>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="Billie Eillish"
                type={"text"}
              />
            </div>
            <div className="flex-col space-y-1">
              <p className="text-sm">Tanggal Lahir</p>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="01/02/2000"
                type={"date"}
              />
            </div>
            <div className="flex-col space-y-1">
              <p className="text-sm">Jenis Kelamin</p>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="w-4 h-4 checked:bg-red-600 focus:bg-red-600 rounded-full"
                  />
                  <p>Laki-Laki</p>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="w-4 h-4 checked:bg-red-600 focus:bg-red-600 rounded-full"
                  />
                  <p>Perempuan</p>
                </div>
              </div>
            </div>
            <div className="flex-col space-y-1">
              <p className="text-sm">Nomor Handphone</p>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="0812345678920"
                type={"text"}
              />
              <div className="relative">
                <div className="absolute right-2 bottom-3">
                  <button className="text-xs text-red-600 font-semibold flex items-center">
                    Ubah
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-col space-y-1">
              <p className="text-sm">Email</p>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="billieeilish@gmail.com"
                type={"email"}
              />
              <div className="relative">
                <div className="absolute right-2 bottom-3">
                  <button className="text-xs text-red-600 font-semibold flex items-center">
                    Verifikasi
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold py-2">Ubah Kata Sandi Anda</p>
            </div>

            <div className="flex-col space-y-1">
              <p className="text-sm">Kata Sandi Saat Ini</p>
              <div className="relative">
                <div className="absolute right-4 top-2 z-10">
                  <button
                    onClick={() => setType1(!type1)}
                    className="outline-none"
                  >
                    {type1 ? (
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
                type={`${type1 ? "text" : "password"}`}
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="Kata sandi saat ini"
              />
            </div>
            <div className="flex-col space-y-1">
              <p className="text-sm">Kata Sandi Baru</p>
              <div className="relative">
                <div className="absolute right-4 top-2 z-10">
                  <button
                    onClick={() => setType2(!type2)}
                    className="outline-none"
                  >
                    {type2 ? (
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
                type={`${type2 ? "text" : "password"}`}
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="Kata sandi baru"
              />
            </div>
            <div className="flex-col space-y-1">
              <p className="text-sm">Konfirmasi Kata Sandi Baru</p>
              <div className="relative">
                <div className="absolute right-4 top-2 z-10">
                  <button
                    onClick={() => setType3(!type3)}
                    className="outline-none"
                  >
                    {type3 ? (
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
                type={`${type3 ? "text" : "password"}`}
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="Konfirmasi Kata sandi baru"
              />
            </div>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-end ">
          <button className="bg-red-600 text-white text-sm font-semibold px-3 h-10 rounded-xl hover:bg-red-800 ">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </>
  );
}
