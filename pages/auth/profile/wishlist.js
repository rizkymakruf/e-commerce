import NavigasiWishlist from "components/profile/navigasiWishlist";

import { getLayout } from "components/layout/layout";

function Wishlist() {
  return (
    <>
      <div className="mt-24">
        <div className="pb-24">
          <div className="">
            <div className="flex gap-10">
              <NavigasiWishlist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
Wishlist.getLayout = getLayout;
