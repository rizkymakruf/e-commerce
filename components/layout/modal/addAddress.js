import { useContext, useEffect } from "react";
import Link from "next/link";
import { GlobalContext } from "context/global";

export default function AddAddress(props) {
  const { globalCtx, globalAct } = useContext(GlobalContext);
  useEffect(() => {
    console.log("Nilai global context modal  : ", globalCtx.modal.modal);
  }, [globalCtx.modal.modal]);

  return (
    <>
      <div
        className={`duration-700 bg-yellow-300/0 p-5 fixed z-50 rounded-xl flex items-center justify-center w-full ${
          globalCtx.modal.modal === "openAddAddress"
            ? "-translate-y-2/4 bottom-0"
            : "translate-y-full overflow-hidden bottom-0"
        }`}
      >
        <div className="flex justify-between bg-white w-10/12 rounded-xl py-5 h-auto items-center">
          <div className="flex w-full justify-center gap-4">
            <div className="w-6/12">
              {/* head */}
              <div className="flex items-center gap-2">
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
                  <p className="text-lg text-black font-semibold">
                    Tambah Almat Baru
                  </p>
                </div>
              </div>
              <div className="">
                <div className="py-1">
                  <p className="text-sm font-semibold">
                    Provinsi, Kota, dan Kecamatan
                  </p>
                  <input
                    className="w-full border border-gray-400 rounded-lg p-2 text-sm"
                    placeholder="Pilih alamat...."
                  />
                </div>
                <div className="py-1">
                  <p className="text-sm font-semibold">Kode Pos</p>
                  <input
                    className="w-full border border-gray-400 rounded-lg p-2 text-sm"
                    placeholder="Pilih Kode Pos...."
                  />
                </div>
                <div className="py-1">
                  <p className="text-sm font-semibold">Detail Alamat</p>
                  <textarea
                    className="w-full h-20 border border-gray-400 rounded-lg p-2 text-sm"
                    placeholder="Alamat Lengkap...."
                  />
                </div>
              </div>
            </div>
            <div className="w-5/12">
              <div className="">
                <div className="py-1">
                  <p className="text-sm font-semibold">Nama Penerima</p>
                  <input
                    className="w-full border border-gray-400 rounded-lg p-1 text-sm"
                    placeholder="Nama Penerima..."
                  />
                </div>
                <div className="py-1">
                  <p className="text-sm font-semibold">Nomor Handphone</p>
                  <input
                    className="w-full border border-gray-400 rounded-lg p-1 text-sm"
                    placeholder="No Handphone..."
                  />
                </div>
                <div className="py-1">
                  <p className="text-sm font-semibold">Alamat Sebagai</p>
                  <div className="flex-row flex gap-3">
                    <button className="p-2 bg-white text-sm text-gray-400 border border-gray-300 rounded-md">
                      Rumah
                    </button>
                    <button className="p-2 bg-white text-sm text-gray-400 border border-gray-300 rounded-md">
                      Apartement
                    </button>
                    <button className="p-2 bg-red-600 text-sm text-white border border-gray-300 rounded-md">
                      Coffee Shop
                    </button>
                    <button className="p-2 bg-white text-sm text-gray-400 border border-gray-300 rounded-md">
                      Kos
                    </button>
                    <button className="p-2 bg-white text-sm text-gray-400 border border-gray-300 rounded-md">
                      Kantor
                    </button>
                  </div>
                  <div className="pt-14 flex justify-end gap-3">
                    <button className="p-2 bg-red-600 text-sm text-white border border-gray-300 rounded-md">
                      Tambah Alamat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <p>Apakah anda ingin keluar add ?</p>
          </div>
          <div className="flex gap-3">
            <Link href={"/auth/login"} passHref>
              <button
                className="bg-red-600 text-white py-1 px-3 rounded-lg"
                onClick={() =>
                  props.globalAct.setModal({ modal: "", type: "" })
                }
              >
                YES
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
