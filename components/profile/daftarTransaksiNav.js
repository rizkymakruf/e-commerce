import { useState } from "react";

import Semua from "./listTransaksi/semua";

export default function DaftarTransaksiNav() {
  const [listTransaksi, setListTransaksi] = useState("semua");
  return (
    <>
      <div className="flex-col gap-y-2 w-full">
        <div>
          <p className="text-xl font-bold pb-2">Daftar Transaksi</p>
        </div>
        {/* container */}
        <div>
          {/* navigasi */}
          <div className="py-2 px-3 rounded-xl border border-gray-300 flex mb-3 w-full">
            <div className="space-y-1 flex items-center gap-2 w-full justify-between">
              <button
                className={`${
                  listTransaksi === "semua"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 w-full py-2 px-3 rounded-full font-semibold duration-200`}
                onMouseOver={() => setListTransaksi("semua")}
                // onMouseOver={() => setCategory("coffee")}
              >
                <p className="text-sm font-normal">Semua</p>
              </button>
              <button
                className={`${
                  listTransaksi === "belumbayar"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 w-full py-2 px-3 rounded-full font-semibold duration-200`}
                onMouseOver={() => setListTransaksi("belumbayar")}
                // onMouseOver={() => setCategory("coffee")}
              >
                <p className="text-sm font-normal whitespace-nowrap">
                  Belum Bayar
                </p>
              </button>
              <button
                className={`${
                  listTransaksi === "dikemas"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 w-full py-2 px-3 rounded-full font-semibold duration-200`}
                onMouseOver={() => setListTransaksi("dikemas")}
                // onMouseOver={() => setCategory("coffee")}
              >
                <p className="text-sm font-normal whitespace-nowrap">Dikemas</p>
              </button>
              <button
                className={`${
                  listTransaksi === "dikirim"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 w-full py-2 px-3 rounded-full font-semibold duration-200`}
                onMouseOver={() => setListTransaksi("dikirim")}
                // onMouseOver={() => setCategory("coffee")}
              >
                <p className="text-sm font-normal whitespace-nowrap">Dikirim</p>
              </button>
              <button
                className={`${
                  listTransaksi === "selesai"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 w-full py-2 px-3 rounded-full font-semibold duration-200`}
                onMouseOver={() => setListTransaksi("selesai")}
                // onMouseOver={() => setCategory("coffee")}
              >
                <p className="text-sm font-normal whitespace-nowrap">Selesai</p>
              </button>
              <button
                className={`${
                  listTransaksi === "dibatalkan"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 w-full py-2 px-3 rounded-full font-semibold duration-200`}
                onMouseOver={() => setListTransaksi("dibatalkan")}
                // onMouseOver={() => setCategory("coffee")}
              >
                <p className="text-sm font-normal whitespace-nowrap">
                  Dibatalkan
                </p>
              </button>
            </div>
          </div>
          <div>
            {/* view */}
            {listTransaksi === "semua" ? (
              <div className="w-full p-1">
                <Semua />
              </div>
            ) : listTransaksi === "belumbayar" ? (
              <div className="w-full p-1">
                <div>belum bayar</div>
              </div>
            ) : listTransaksi === "dikemas" ? (
              <div className="w-full p-1">
                <div>dikemas</div>
              </div>
            ) : listTransaksi === "dikirim" ? (
              <div className="w-full p-1">
                <div>dikirim</div>
              </div>
            ) : listTransaksi === "selesai" ? (
              <div className="w-full p-1">
                <div>selesai</div>
              </div>
            ) : (
              listTransaksi === "dibatalkan" && (
                <div className="w-full">
                  <div>dibatalkan</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
