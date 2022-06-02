export default function TambahAlamat() {
  return (
    <>
      <div className="w-full p-3 rounded-xl border border-gray-300 flex gap-x-3">
        <div className="w-7/12">
          <div className="mb-2">
            <p className="text-lg font-semibold">Tambah Alamat Baru</p>
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
              <div className="flex gap-3">
                <button className="px-2 py-1 bg-white text-sm text-gray-400 border border-gray-300 rounded-md">
                  Rumah
                </button>
                <button className="px-2 py-1 bg-white text-sm text-gray-400 border border-gray-300 rounded-md">
                  Apartement
                </button>
                <button className="px-2 py-1 bg-red-600 text-sm text-white border border-gray-300 rounded-md">
                  Coffee Shop
                </button>
                <button className="px-2 py-1 bg-white text-sm text-gray-400 border border-gray-300 rounded-md">
                  Kos
                </button>
                <button className="px-2 py-1 bg-white text-sm text-gray-400 border border-gray-300 rounded-md">
                  Kantor
                </button>
              </div>
              <div className="pt-14 flex justify-end gap-3">
                <button className="p-2 bg-white text-sm font-semibold text-gray-400 border border-gray-300 rounded-md">
                  Tambah Catatan Pesanan
                </button>
                <button className="p-2 bg-red-600 text-sm font-semibold text-white border border-gray-300 rounded-md">
                  Tambah Alamat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
