export default function Selesai() {
  const listTransaksi = [
    {
      tanggal: "Belanja 20 Mei 2022",
      status: "Selesai",
      toko: "Coldbrew Roasters",
      product:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      total: "Rp 130.000",
      bg: "bg-green-600",
    },
    {
      tanggal: "Belanja 20 Mei 2022",
      status: "Selesai",
      toko: "Coldbrew Roasters",
      product:
        "Single Origin Flores Manggarai Yellow Caturra 250gr Coldbrew Roasters",
      total: "Rp 130.000",
      bg: "bg-green-600",
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
                  className={`px-2 text-sm text-white rounded-lg ${
                    list.status === "Selesai"
                      ? "bg-green-500"
                      : list.status === "Dikemas"
                      ? "bg-orange-500"
                      : list.status === "Dikirim"
                      ? "bg-blue-500"
                      : list.status === "Belum Bayar"
                      ? "bg-yellow-500"
                      : list.status === "Dibatalkan" && "bg-red-500"
                  }`}
                >
                  {list.status}
                </button>
              </div>
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
                <button className="mx-2 px-2 text-sm font-semibold text-red-600 rounded-lg">
                  Lihat Transaksi
                </button>
                <button className="mx-2 px-4 text-sm font-semibold bg-red-600 text-white rounded-xl">
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
