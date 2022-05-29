import { useState } from "react";

export default function AkunNav() {
  const [type, setType] = useState(false);
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
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="Kata sandi saat ini"
              />
            </div>
            <div className="flex-col space-y-1">
              <p className="text-sm">Kata Sandi Baru</p>
              <div className="relative">
                <div className="absolute right-4 top-2 z-10">
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
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="Kata sandi baru"
              />
            </div>
            <div className="flex-col space-y-1">
              <p className="text-sm">Konfirmasi Kata Sandi Baru</p>
              <div className="relative">
                <div className="absolute right-4 top-2 z-10">
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
                className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="Konfirmasi Kata sandi baru"
              />
            </div>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-end ">
          <button className="bg-red-600 text-white text-sm font-semibold px-2 h-10 rounded-lg hover:bg-red-800 ">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </>
  );
}
