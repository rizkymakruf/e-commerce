// importing layout & component
import NavBar from "components/layout/navBar";
import RouteBar from "components/layout/RouteBar";
import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";

import Subtotal from "components/cart/Subtotal";
import KeranjangBelanja from "components/cart/KeranjangBelanja";

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <NavBar />
      <RouteBar />
      <div className="h-full pt-4 flex px-16 gap-x-6 w-full">
        <div className="h-full w-full">
          <div className="h-full pt-4 flex gap-x-6 w-full">
            <div className="w-full">
              <KeranjangBelanja />
            </div>
          </div>
        </div>
        <div className="flex gap-x-6 h-full sticky top-32">
          <Subtotal />
        </div>
      </div>
      <Footer />
      <Navigasi />
    </>
  );
}
