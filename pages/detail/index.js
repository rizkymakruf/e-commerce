// importing layout & component
import NavBar from "components/layout/navBar";
import RouteBar from "components/detail/RouteBar";
import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";

import ProductGalery from "components/detail/ProductGalery";
import ProductDetails from "components/detail/ProductDetails";
import AddOrder from "components/detail/AddOrder";

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <NavBar />
      <RouteBar />
      <div className="h-screen pt-36 flex px-16 gap-x-6">
        <div className="flex gap-x-6">
          <ProductGalery />
        </div>
        <div className="flex gap-x-6 overflow-y-scroll">
          <ProductDetails />
        </div>
        <div className="relative">
          <div className="flex gap-x-6">
            <AddOrder />
          </div>
        </div>
      </div>
      <Footer />
      <Navigasi />
    </>
  );
}
