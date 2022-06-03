import NavigasiDaftarTransaksi from "components/profile/navigasiDaftarTransaksi";

import { getLayout } from "components/layout/layout";

function DaftarTransaksi() {
  return (
    <>
      <div className="mt-24">
        <div className="pb-24">
          <div className="">
            <div className="flex gap-10">
              <NavigasiDaftarTransaksi />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DaftarTransaksi;
DaftarTransaksi.getLayout = getLayout;
