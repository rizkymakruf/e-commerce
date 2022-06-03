import NavigasiVoucher from "components/profile/navigasiVoucher";

import { getLayout } from "components/layout/layout";

function Voucher() {
  return (
    <>
      <div className="mt-24">
        <div className="pb-24">
          <div className="">
            <div className="flex gap-10">
              <NavigasiVoucher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Voucher;
Voucher.getLayout = getLayout;
