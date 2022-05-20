import { getLayout } from "components/layout/layout";
import NavBar from "components/layout/navBar";
import Footer from "components/layout/footer";
import NavigasiProfile from "components/profile/navigasiProfile";
import Product from "components/product/productTerbaru/product";
import RouteBar from "components/layout/RouteBar";
import { useState } from "react";

export default function Profile() {
  const [menu, setMenu] = useState("semua");
  return (
    <>
      <NavBar />
      {/* <RouteBar /> */}
      <div className="mt-24">
        <div className="pb-24">
          <div className="mx-10 py-8">
            <div className="flex gap-10">
              <NavigasiProfile />
              <div className="w-8/12 h-80 bg-green-300 shadow-md"></div>
            </div>
          </div>
        </div>{" "}
        <Footer />
      </div>
    </>
  );
}
// PilihanKopiTerbaik.getLayout = getLayout;
