// importing layout & component
import NavBar from "components/layout/navBar";
import RouteBar from "components/detail/RouteBar";
import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";

import KeranjangBelanja from "components/cart/KeranjangBelanja";
import Subtotal from "components/cart/Subtotal";

export default function Home() {
  return (
    <>
      <NavBar />
      <RouteBar />
      <div className="w-full h-full px-16 gap-x-6 pt-4 flex flex-row">
        <div>
          <KeranjangBelanja />
        </div>
        <div className="sticky top-0">
          <Subtotal />
        </div>
      </div>
      <Footer />
      <Navigasi />
    </>
  );
}
