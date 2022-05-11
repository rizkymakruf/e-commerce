import { useState } from "react";

const ProductGalery = () => {
  const [note, setNote] = useState(false);
  const [val, setVal] = useState(1);

  const Add = () => {
    setVal(val++);
  };

  const Remove = () => {
    setVal(val - 1);
  };

  return (
    <div className="relative">
      <div className="">
        <div className="flex flex-col justify-center w-full gap-y-4">
          <div className="bg-white w-72 h-auto rounded-xl border-2 border-gray-300 p-4 flex flex-col gap-4">
            <div>
              <p className="text-xl font-bold">Atur jumlah</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 bg-red-600 py-1 px-4 rounded-md">
                <button onClick={Remove} disabled={val < 1}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.847656"
                      y="0.851868"
                      width="23.2962"
                      height="23.2962"
                      rx="11.6481"
                      fill="white"
                    />
                    <path
                      d="M17.2216 12.4086H12.4956H7.76953"
                      stroke="#D63031"
                      strokeWidth="1.18151"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <p className="text-white">{val}</p>
                <button onClick={Add}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.856201"
                      y="0.851868"
                      width="23.2962"
                      height="23.2962"
                      rx="11.6481"
                      fill="white"
                    />
                    <path
                      d="M12.5043 17.7254V12.4086M12.5043 12.4086V7.09186M12.5043 12.4086H17.2304M12.5043 12.4086H7.77832"
                      stroke="#D63031"
                      strokeWidth="1.18151"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-x-2">
                <p>Stock</p>
                <p className="font-bold">10</p>
              </div>
            </div>
            <div>
              <div className="relative">
                <div
                  className={`absolute z-10 ${
                    note ? "w-full" : "w-0"
                  } duration-500`}
                >
                  <div>
                    <button
                      className={`absolute right-3 top-2.5 duration-500 ${
                        note ? "opacity-100" : "opacity-0"
                      }`}
                      onClick={() => setNote(false)}
                      disabled={!note}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <input
                    disabled={!note}
                    className={`duration-500 bg-white w-full p-2 border border-red-600 outline-none rounded-md ${
                      note ? "opacity-100" : "opacity-0"
                    }`}
                    placeholder="Masukkan Catatan"
                  />
                </div>
              </div>
              <div className={`relative w-full`}>
                <div className={"w-full"}>
                  <button
                    className={`bg-red-600 outline-none rounded-md border-2 border-red-600 duration-1000 w-full`}
                    onClick={() => setNote(true)}
                  >
                    <p className={`py-[7px] text-white`}>Tambah Catatan</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p className="font-bold">Rp 130.000</p>
            </div>
            <div>
              <button className="bg-red-600 w-full rounded-md">
                <div className="flex items-cente justify-center gap-2 py-2">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6846 20.3209V12.5555M11.6846 12.5555V4.7901M11.6846 12.5555H19.45M11.6846 12.5555H3.91919"
                      stroke="white"
                      stroke-width="2.36301"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-white">Keranjang</p>
                </div>
              </button>
            </div>
            <div>
              <button className="bg-white w-full rounded-md border border-red-600">
                <div className="flex items-cente justify-center gap-2 py-2">
                  <p className="text-red-600">Beli Langsung</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGalery;
