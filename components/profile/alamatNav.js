export default function AlamatNav() {
  return (
    <>
      <div className="flex-col gap-y-2 w-full">
        <div>
          <p className="text-xl font-bold pb-2">Alamat</p>
        </div>
        <div className="w-full flex pt-2 gap-3">
          {/* nama */}
          <div>
            <p className="text-md font-semibold">Billie Eillish</p>
            <p className="text-sm font-normal">085158770819</p>
          </div>
          {/* alamat */}
          <div>
            <p className="text-sm">
              {"("}rumah{")"}
            </p>
            <p className="text-sm">
              Jalan Tanjung , dusun lugonto, kecamatan rogojampi, kabupaten
              banyuwangi JAWA TIMUR, KAB. BANYUWANGI Rogojampi 68462 Indonesia
            </p>
            <p></p>
          </div>
          {/* button */}
          <div className="flex-none">
            <button className="bg-red-600 text-white text-sm py-2 px-3 rounded-full">
              Ubah Alamat
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
