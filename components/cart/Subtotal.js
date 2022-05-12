import { useState } from "react";

const ProductGalery = () => {
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
    <div className="relative">
      <div className="">
        <div className="flex flex-col justify-center w-full gap-y-4">
          <div className="bg-white w-72 h-auto rounded-xl border-2 border-gray-300 p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-x-4">
              <p className="text-sm font-bold">Subtotal</p>
              <p className="text-sm">(3 Produk)</p>
            </div>
            <div className="flex flex-row justify-between w-full">
              <p className="text-sm">Total Harga Produk</p>
              <p className="text-sm font-bold">Rp 390.000</p>
            </div>
            <div>
              <button className="bg-red-600 w-full rounded-md border border-red-600">
                <div className="flex items-cente justify-center gap-2 py-2">
                  <p className="text-white">Beli</p>
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
