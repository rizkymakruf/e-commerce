import { GlobalContext } from "context/global";
import { useContext, useEffect } from "react";

import Link from "next/link";

export default function Payment(props) {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  const pay = [
    {
      mtd: "BCA Virtual Account",
    },
    {
      mtd: "BRI Virtual Account",
    },
    {
      mtd: "BNI Virtual Account",
    },
    // {
    //   mtd: "MANDIRI Virtual Account",
    // },
  ];
  return (
    <>
      <div
        className={`duration-700 bg-yellow-300/0 p-5 fixed z-50 rounded-xl flex items-center justify-center w-full ${
          globalCtx.modal.modal === "openPayment"
            ? "-translate-y-16 bottom-0"
            : "translate-y-full overflow-hidden bottom-0"
        }`}
      >
        <div className="flex justify-between bg-white w-7/12 rounded-xl py-5 h-auto items-center">
          <div className="flex w-full justify-center gap-4">
            <div className="w-full px-8">
              {/* head */}
              <div className="flex items-center gap-2 pb-3">
                <div>
                  <button
                    className="items-center flex"
                    onClick={() => globalAct.setModal({ modal: "", type: "" })}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="text-lg text-black font-semibold">Pembayaran</p>
                </div>
              </div>
              <div className="">
                <div>
                  <p className="text-2xl font-semibold text-gray-800">
                    Metode Pembayaran
                  </p>
                </div>
                {/* Metode Pembayaran */}
                <div className="p-4 rounded-lg border border-gray-300 space-y-4 my-2 h-auto">
                  <p>Transfer Virtual Account</p>
                  {pay.map((pay, index) => {
                    return (
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                          <div className="w-12 h-8 bg-gray-400" />
                          <div>
                            <p>{pay.mtd}</p>
                          </div>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            className="checked:bg-red-600 focus:bg-red-600 appearance-none h-4 w-4 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  <div className="space-y-1 py-2">
                    <p className="text-md font-semibold text-gray-800">
                      Ringkasan Pembayaran
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Total Tagihan</p>
                    <p>Rp 360.000</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Biaya Layanan</p>
                    <p>Rp 1.000</p>
                  </div>
                </div>
                <div className="">
                  <div className="space-y-1 py-2">
                    <p className="text-md font-semibold text-gray-800">
                      Detail Pesanan
                    </p>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-semibold text-red-600">
                        Total Bayar
                      </p>
                      <p className="text-2xl font-extrabold text-gray-800">
                        Rp 361.000
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute bottom-0 right-0">
                        <button className="py-1 px-8 text-white bg-red-600 rounded-lg">
                          Bayar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
