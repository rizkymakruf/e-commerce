import Pp from "../../public/static/images/pp.png";
import Link from "next/link";
import Image from "next/image";

export default function NavigasiProfile() {
  return (
    <>
      <div className="w-4/12 h-auto bg-yellow-300 drop-shadow-md rounded-lg">
        <div className="flex-col items-center p-5">
          <div className="flex items-center gap-x-3">
            <div className="w-14 h-14">
              <Image src={Pp} className={"rounded-full"} />
            </div>
            <div className="flex-col items-center">
              <p className="text-lg font-bold text-black">Billie Eilish</p>
              <p className="text-sm font-semibold text-red-600">
                billieeillish@gmial.com
              </p>
            </div>
          </div>
          <div className="py-3">
            <hr />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-white text-[#414141]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-md">Akun</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-white text-[#414141]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-md">Alamat</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-white text-[#414141]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div>
                <p className="text-md">Daftar Transaksi</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-white text-[#414141]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-md">Wishlist</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-white text-[#414141]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div>
                <p className="text-md">Notifikasi</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-white text-[#414141]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-md">Voucher</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2 py-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-white text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <div>
                <p className="text-md text-red-600">Voucher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
