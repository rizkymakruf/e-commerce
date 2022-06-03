// importing view navigasi
import NotifikasiNav from "./notifikasiNav";

import Navigator from "./navigator";

export default function NavigasiNotifikasi() {
  return (
    <>
      <div className="w-full flex gap-10 p-10">
        <Navigator />
        {/* menu selection hover */}

        <div className="w-9/12 shadow-md rounded-xl p-5">
          <NotifikasiNav />
        </div>

        {/* {profilMenu === "akun" ? (
          <div className="w-9/12 shadow-md rounded-xl p-5">
            <AkunNav />
          </div>
        ) : profilMenu === "alamat" ? (
          <div className="w-9/12 h-auto shadow-md rounded-xl p-5">
            <AlamatNav />
          </div>
        ) : profilMenu === "daftarTransaksi" ? (
          <div className="w-9/12 h-auto shadow-md rounded-xl p-5">
            <DaftarTransaksiNav />
          </div>
        ) : profilMenu === "wishlist" ? (
          <div className="w-9/12 h-auto shadow-md rounded-xl p-5">
            <WishlistNav />
          </div>
        ) : profilMenu === "notifikasi" ? (
          <div className="w-9/12 h-auto shadow-md rounded-xl p-5">
            <NotifikasiNav />
          </div>
        ) : (
          profilMenu === "voucher" && (
            <div className="w-9/12 h-auto shadow-md rounded-xl p-5">
              <VoucherNav />
            </div>
          )
        )} */}
      </div>
    </>
  );
}
