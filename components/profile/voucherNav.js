export default function VoucherNav() {
  const listTransaksi = [
    {
      dc: "50%",
      vcName: "VOUCHER<br/>DISCOUNT",
      exp: "Berlaku sampai : 19 Agustus 2022",
    },
  ];
  return (
    <>
      <div className="flex-col gap-y-2">
        <div>
          <p className="text-xl font-bold pb-2">Voucher</p>
        </div>
        {/* container */}
        <div className="grid grid-cols-3 gap-3">
          <div className="w-full">
            <div className="flex">
              <div className="w-1/4 rounded-tl-lg bg-red-800 py-10 flex items-center justify-center border-r-2 border-white border-dashed">
                <p className="-rotate-90 text-white text-lg font-bold">50%</p>
              </div>
              <div className="w-3/4 rounded-tr-lg bg-red-600 py-10 flex-col flex items-center">
                <p className="text-white font-bold text-xl">
                  VOUCHER
                  <br />
                  DISCOUNT
                </p>
              </div>
            </div>
            <div className="flex px-3 py-3 justify-between bg-yellow-200 rounded-b-lg items-center">
              <p className="text-xs">Berlaku sampai : 19 Agustus 2022</p>
              <button className="text-sm text-red-600">Salin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
