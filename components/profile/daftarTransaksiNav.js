import { useState } from "react";

import Semua from "./listTransaksi/semua";
import BelumBayar from "./listTransaksi/belumBayar";
import Dikemas from "./listTransaksi/dikemas";
import Dikirim from "./listTransaksi/dikirim";
import Selesai from "./listTransaksi/selesai";
import Dibatalkan from "./listTransaksi/dibatalkan";

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
                } hover:bg-red-600 hover:text-white w-full py-2 px-3 rounded-xl font-semibold leave="transition ease duration-500" hover:scale-110 duration-200`}
                onClick={() => setListTransaksi("semua")}
              >
                <p className="text-sm font-normal">Semua</p>
              </button>
              <button
                className={`${
                  listTransaksi === "belumbayar"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 hover:text-white w-full py-2 px-3 rounded-xl font-semibold leave="transition ease duration-500" hover:scale-110 duration-200`}
                onClick={() => setListTransaksi("belumbayar")}
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
                } hover:bg-red-600 hover:text-white w-full py-2 px-3 rounded-xl font-semibold leave="transition ease duration-500" hover:scale-110 duration-200`}
                onClick={() => setListTransaksi("dikemas")}
              >
                <p className="text-sm font-normal whitespace-nowrap">Dikemas</p>
              </button>
              <button
                className={`${
                  listTransaksi === "dikirim"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 hover:text-white w-full py-2 px-3 rounded-xl font-semibold leave="transition ease duration-500" hover:scale-110 duration-200`}
                onClick={() => setListTransaksi("dikirim")}
              >
                <p className="text-sm font-normal whitespace-nowrap">Dikirim</p>
              </button>
              <button
                className={`${
                  listTransaksi === "selesai"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 hover:text-white w-full py-2 px-3 rounded-xl font-semibold leave="transition ease duration-500" hover:scale-110 duration-200`}
                onClick={() => setListTransaksi("selesai")}
              >
                <p className="text-sm font-normal whitespace-nowrap">Selesai</p>
              </button>
              <button
                className={`${
                  listTransaksi === "dibatalkan"
                    ? "bg-red-600 text-white"
                    : "text-[#414141]"
                } hover:bg-red-600 hover:text-white w-full py-2 px-3 rounded-xl font-semibold leave="transition ease duration-500" hover:scale-110 duration-200`}
                onClick={() => setListTransaksi("dibatalkan")}
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
                <BelumBayar />
              </div>
            ) : listTransaksi === "dikemas" ? (
              <div className="w-full p-1">
                <Dikemas />
              </div>
            ) : listTransaksi === "dikirim" ? (
              <div className="w-full p-1">
                <Dikirim />
              </div>
            ) : listTransaksi === "selesai" ? (
              <div className="w-full p-1">
                <Selesai />
              </div>
            ) : (
              listTransaksi === "dibatalkan" && (
                <div className="w-full p-1">
                  <Dibatalkan />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
