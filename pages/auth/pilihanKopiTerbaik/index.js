import { getLayout } from "components/layout/layout";
import NavBar from "components/layout/navBar";
import Footer from "components/layout/footer";
import Navigation from "components/product/pilihanKopiTerbaik/navigation";
import Product from "components/product/pilihanKopiTerbaik/product";
import RouteBar from "components/layout/RouteBar";
import { useState } from "react";

export default function PilihanKopiTerbaik() {
  const [menu, setMenu] = useState("semua");
  return (
    <>
      <div>
        <NavBar />
        <RouteBar />
        <Navigation menu={menu} setMenu={setMenu} />
        <div className="px-14 py-24">
          <Product />
        </div>{" "}
        <Footer />
      </div>
    </>
  );
}
// PilihanKopiTerbaik.getLayout = getLayout;
