import { GlobalContext } from "context/global";
import { useContext } from "react";

export default function Alamat() {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  return (
    <>
      <div className="w-full p-3 rounded-xl border border-gray-300">
        <div className="mb-2">
          <p className="font-bold text-lg">Alamat Pengiriman</p>
        </div>
        <div className="flex justify-between text-sm">
          <div>
            <p className="font-semibold">Farhan Ahsani</p>
            <p>+62 851-5877-0819</p>
          </div>
          <div>
            <p>
              {"("}Rumah{")"}
            </p>
            <p>
              Jalan Tanjung , dusun lugonto, kecamatan rogojampi, kabupaten
              banyuwangi
            </p>
            <p>JAWA TIMUR, KAB. BANYUWANGI Rogojampi 68462 Indonesia</p>
          </div>
          <div>
            <button
              className="font-semibold text-red-600"
              onClick={() =>
                globalAct.setModal({ modal: "openAddAddress", type: "" })
              }
            >
              Ubah Alamat
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
