import NavigasiNotifikasi from "components/profile/navigasiNofikasi";

import { getLayout } from "components/layout/layout";

function Notifikasi() {
  return (
    <>
      <div className="mt-24">
        <div className="pb-24">
          <div className="">
            <div className="flex gap-10">
              <NavigasiNotifikasi />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifikasi;
Notifikasi.getLayout = getLayout;
