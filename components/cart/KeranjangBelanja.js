import { useState } from "react";

const KeranjangBelanja = () => {
  const order = [
    {
      store: "Coldbrew  Roasters",
      location: "Kuta, Bali",
      product_name:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      product_price: "Rp 130.000",
    },
    {
      store: "Coldbrew  Roasters",
      location: "Kuta, Bali",
      product_name:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      product_price: "Rp 130.000",
    },
    {
      store: "Coldbrew  Roasters",
      location: "Kuta, Bali",
      product_name:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      product_price: "Rp 130.000",
    },
    {
      store: "Coldbrew  Roasters",
      location: "Kuta, Bali",
      product_name:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      product_price: "Rp 130.000",
    },
    {
      store: "Coldbrew  Roasters",
      location: "Kuta, Bali",
      product_name:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      product_price: "Rp 130.000",
    },
    {
      store: "Coldbrew  Roasters",
      location: "Kuta, Bali",
      product_name:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      product_price: "Rp 130.000",
    },
  ];
  return (
    <div className="w-full">
      <div className="pb-3">
        <p className="text-xl font-bold">Keranjang Belanja</p>
      </div>
      <div className="flex w-full justify-between py-3">
        <div className="flex flex-row gap-x-6 items-center">
          <input
            type="checkbox"
            className="checked:bg-red-600 focus:bg-red-600 appearance-none h-5 w-5 rounded-full"
          />
          <p>Pilih Semuanya</p>
        </div>
        <div>
          <p className="font-bold">Hapus</p>
        </div>
      </div>

      {order.map((pro, index) => {
        return (
          <div className="flex flex-col py-2">
            <div className="">
              <div className="flex flex-row gap-x-6 items-center border-t border-b py-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 checked:bg-red-600 focus:bg-red-600 rounded-full"
                />
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="bg-gray-300 w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-red-600 font-semibold text-md">
                        {pro.store}
                      </p>
                      <p className="text-sm text-gray-400">Kuta, Bali</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="bg-gray-300 w-12 h-12 rounded-sm" />
                    <div>
                      <p className="text-md">
                        Single Origin Flores Manggarai Yellow Caturra 250gr
                        Coldbrew Roasters
                      </p>
                      <p className="text-md font-bold">Rp 130.000</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      placeholder="Tulis catatan disini...."
                      className="border border-gray-300 rounded-md outline-none py-1 px-2 text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute bottom-4 right-0 flex flex-row gap-x-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <div className="flex flex-row gap-x-3 items-center">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.273926"
                        y="0.971313"
                        width="26"
                        height="26"
                        rx="13"
                        fill="#D63031"
                      />
                      <path
                        d="M18.5481 13.8695H13.2736H7.99902"
                        stroke="white"
                        strokeWidth="1.39426"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="">1</div>
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.198242"
                        y="0.971313"
                        width="26"
                        height="26"
                        rx="13"
                        fill="#D63031"
                      />
                      <path
                        d="M13.1984 19.8032V13.8694M13.1984 13.8694V7.93555M13.1984 13.8694H18.4729M13.1984 13.8694H7.92383"
                        stroke="white"
                        strokeWidth="1.39426"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KeranjangBelanja;

// const E = () => {
//   const [name, setName] = useState("coffe");
//   return (
//     <div>
//       <p onMouseOver={() => setName("ikan")}>First Button</p>
//       <p onMouseOver={() => setName("babi")}>Second Button</p>
//       <p onMouseOver={() => setName("hiu")}>Third Button</p>
//       <p onMouseOver={() => setName("daging")}>Fourth Button</p>

//       {name === "ikan" ? (
//         <p>Ikan</p>
//       ) : name === "babi" ? (
//         <p>Babi</p>
//       ) : name === "hiu" ? (
//         <p>Hiu</p>
//       ) : (
//         name === "daging" && <p>Daging</p>
//       )}
//     </div>
//   );
// };

// export default E;
