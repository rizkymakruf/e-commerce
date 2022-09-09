export default function VoucherNav() {
  const voucher = [
    {
      dc: "50%",
      vcName: "VOUCHER DISCOUNT",
      exp: "19 Agustus 2022",
    },
    {
      dc: "75%",
      vcName: "VOUCHER DISCOUNT",
      exp: "1 Agustus 2022",
    },
    {
      dc: "90%",
      vcName: "VOUCHER ONGKIR",
      exp: "18 Juni 2022",
    },
    {
      dc: "99%",
      vcName: "VOUCHER DISCOUNT",
      exp: "19 Agustus 2022",
    },
    {
      dc: "100%",
      vcName: "VOUCHER DISCOUNT",
      exp: "1 Agustus 2022",
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
          {voucher.map((vcr, index) => {
            return (
              <div className="flex-col">
                <div className="flex w-full">
                  <div
                    className={`w-1/4 rounded-tl-lg py-10 flex items-center justify-center border-r-2 border-white border-dashed ${
                      vcr.dc === "50%"
                        ? "bg-red-800"
                        : vcr.dc === "75%"
                        ? "bg-amber-600"
                        : vcr.dc === "90%"
                        ? "bg-amber-900"
                        : vcr.dc === "99%"
                        ? "bg-yellow-600"
                        : vcr.dc === "100%" && "bg-yellow-500"
                    }`}
                  >
                    <p className="-rotate-90 text-white text-lg font-bold">
                      {vcr.dc}
                    </p>
                  </div>
                  <div className="w-3/4 rounded-tr-lg bg-red-600 py-10 flex-col flex items-center">
                    <p className="text-white font-bold text-xl text-center">
                      {vcr.vcName}
                    </p>
                  </div>
                </div>
                <div className="w-full flex px-3 py-3 justify-between bg-yellow-200 rounded-b-lg items-center">
                  <div className="flex-col">
                    <p className="text-xs">Berlaku sampai :</p>
                    <p className="text-xs">{vcr.exp}</p>
                  </div>
                  <button className="text-sm text-red-600">Salin</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
