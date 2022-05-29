export default function Semua() {
  const listTransaksi = [
    {
      tanggal: "Belanja 20 Mei 2022",
      status: "Selesai",
      toko: "Coldbrew Roasters",
      product:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      total: "Rp 130.000",
    },
    {
      tanggal: "Belanja 27 Mei 2022",
      status: "Dikemas",
      toko: "Coldbrew Roasters",
      product:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      total: "Rp 150.000",
    },
    {
      tanggal: "Belanja 28 Mei 2022",
      status: "Belum Bayar",
      toko: "Coldbrew Roasters",
      product:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      total: "Rp 180.000",
    },
    {
      tanggal: "Belanja 28 Mei 2022",
      status: "Dikirim",
      toko: "Coldbrew Roasters",
      product:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      total: "Rp 100.000",
    },
    {
      tanggal: "Belanja 28 Mei 2022",
      status: "Dibatalkan",
      toko: "Coldbrew Roasters",
      product:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      total: "Rp 50.000",
    },
  ];
  return (
    <>
      {/* container */}
      {listTransaksi.map((list, index) => {
        return (
          <div className="flex-col w-full space-y-2 border-b border-b-gray-300 py-3">
            {/* date & status */}
            <div className="flex gap-2 items-center">
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  {list.tanggal}
                </p>
              </div>
              <div>
              <button
              className={`${
                list.status === "Selesai" 
                ? "bg-green-600 text-white" : list.status === "Dikemas" ? "bg-yellow-500" : ""
                  
              } px-2 text-sm text-black rounded-lg`}
              onMouseOver={() => setProfilMenu("voucher")}
              // onMouseOver={() => setCategory("coffee")}
            >
                  {list.status}
              </button>
            </div>
            {/* toko */}
            <div className="flex items-center gap-2 w-full">
              <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
              <div className="text-sm font-semibold">{list.toko}</div>
            </div>
            {/* product */}
            <div className="flex items-center gap-2 w-full">
              <div className="w-10 h-10 bg-slate-400"></div>
              <div className="text-sm">{list.product}</div>
            </div>
            {/* detail */}
            <div className="flex pt-3 justify-between w-full">
              <div className="flex-col">
                <p>Total Belanja</p>
                <p className="text-lg font-semibold">{list.total}</p>
              </div>
              <div className="flex pt-6">
                <button className="mx-2 px-2 text-sm font-semibold bg-red-600 text-white rounded-lg">
                  Lihat Transaksi
                </button>
                <button className="mx-2 px-2 text-sm font-semibold bg-red-600 text-white rounded-lg">
                  Beli Lagi
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
