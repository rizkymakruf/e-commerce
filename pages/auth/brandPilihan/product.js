import { getLayout } from "components/layout/layout";
import NavBar from "components/layout/navBar";
import Footer from "components/layout/footer";
import Product from "components/product/brandPilihan/product";
import RouteBar from "components/layout/RouteBar";
import { useState } from "react";

export default function productRekomendasi() {
  const [menu, setMenu] = useState("semua");
  return (
    <>
      <div>
        <NavBar />
        <RouteBar />
        <div className="pb-24">
          <Product />
        </div>{" "}
        <Footer />
      </div>
    </>
  );
}
// PilihanKopiTerbaik.getLayout = getLayout;
