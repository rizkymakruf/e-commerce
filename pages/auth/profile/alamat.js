import NavigasiAlamat from "components/profile/navigasiAlamat";

import { getLayout } from "components/layout/layout";

function Alamat() {
  return (
    <>
      <div className="mt-24">
        <div className="pb-24">
          <div className="">
            <div className="flex gap-10">
              <NavigasiAlamat />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alamat;
Alamat.getLayout = getLayout;
