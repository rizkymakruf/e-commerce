import { useState } from "react";
import Link from "next/link";

const Ekspedisi = () => {
  const [note, setNote] = useState(false);
  const [val, setVal] = useState(1);

  const Add = () => {
    if (val > stock) {
      alert("Oppss! Kamu memasukan jumlah barang melebihi stock.");
    } else {
      setVal(val++);
    }
  };

  const Remove = () => {
    setVal(val - 1);
  };

  const stock = 10;

  return (
    <div className="relative pt-5">
      <div className="">
        <div className="flex flex-col justify-center w-full gap-y-4">
          <div className="bg-white w-72 h-auto rounded-xl p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-x-4">
              <p className="text-sm font-bold text-red-600">
                Pilih Jasa Pengiriman
              </p>
            </div>
            <div className="flex-col">
              <div className="py-2 border-b-2">
                <div className="flex flex-row items-center gap-x-2 w-full ">
                  <input
                    type="checkbox"
                    className="checked:bg-red-600 focus:bg-red-600 appearance-none h-4 w-4 rounded-full"
                  />
                  <div className="w-10 h-5 bg-gray-400"></div>
                  <p className="text-sm font-bold">JNE Reguler</p>
                </div>
                <div className="pt-4">
                  <p className="text-xs">Estimasi tiba besok - 5 Mei</p>
                </div>
                <div className="relative">
                  <div className="absolute bottom-1 right-0 flex-col gap-x-4 items-center">
                    <p className="font-semibold text-red-600 text-sm">GRATIS</p>
                    <p className="line-through text-xs">Rp 31.000</p>
                  </div>
                </div>
              </div>
              <div className="py-2 border-b-2">
                <div className="flex flex-row items-center gap-x-2 w-full ">
                  <input
                    type="checkbox"
                    className="checked:bg-red-600 focus:bg-red-600 appearance-none h-4 w-4 rounded-full"
                  />
                  <div className="w-10 h-5 bg-gray-400"></div>
                  <p className="text-sm font-bold">SiCepat Reguler</p>
                </div>
                <div className="pt-4">
                  <p className="text-xs">Estimasi tiba besok - 5 Mei</p>
                </div>
                <div className="relative">
                  <div className="absolute bottom-1 right-0 flex-col gap-x-4 items-center">
                    <p className="font-semibold text-red-600 text-sm">GRATIS</p>
                    <p className="line-through text-xs">Rp 31.000</p>
                  </div>
                </div>
              </div>
              <div className="py-2 border-b-2">
                <div className="flex flex-row items-center gap-x-2 w-full ">
                  <input
                    type="checkbox"
                    className="checked:bg-red-600 focus:bg-red-600 appearance-none h-4 w-4 rounded-full"
                  />
                  <div className="w-10 h-5 bg-gray-400"></div>
                  <p className="text-sm font-bold">JNE Trucking</p>
                </div>
                <div className="pt-4">
                  <p className="text-xs">Estimasi tiba besok - 5 Mei</p>
                </div>
                <div className="relative">
                  <div className="absolute bottom-1 right-0 flex-col gap-x-4 items-center">
                    <p className="font-semibold text-red-600 text-sm">GRATIS</p>
                    <p className="line-through text-xs">Rp 31.000</p>
                  </div>
                </div>
              </div>
              <div className="py-2 border-b-2">
                <div className="flex flex-row items-center gap-x-2 w-full ">
                  <input
                    type="checkbox"
                    className="checked:bg-red-600 focus:bg-red-600 appearance-none h-4 w-4 rounded-full"
                  />
                  <div className="w-10 h-5 bg-gray-400"></div>
                  <p className="text-sm font-bold">SiCepat Cargo</p>
                </div>
                <div className="pt-4">
                  <p className="text-xs">Estimasi tiba besok - 5 Mei</p>
                </div>
                <div className="relative">
                  <div className="absolute bottom-1 right-0 flex-col gap-x-4 items-center">
                    <p className="font-semibold text-red-600 text-sm">GRATIS</p>
                    <p className="line-through text-xs">Rp 31.000</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <Link href={"/auth/payment"}>
                <button className="bg-red-600 w-full rounded-md border border-red-600">
                  <div className="flex items-cente justify-center gap-2 py-2">
                    <p className="text-white">Pilih Metode Pembayaran</p>
                  </div>
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ekspedisi;
