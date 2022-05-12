// importing layout & component
import NavBar from "components/layout/navBar";
import RouteBar from "components/detail/RouteBar";
import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";

import ProductGalery from "components/detail/ProductGalery";
import ProductDetails from "components/detail/ProductDetails";
import AddOrder from "components/detail/AddOrder";

import Ulasan from "components/detail/Ulasan";
import UlasanPalingMembantu from "components/detail/UlasanPalingMembantu";
import PhotoReview from "components/detail/PhotoReview";

import Other from "components/detail/Other";

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <NavBar />
      <RouteBar />
      <div className="h-full pt-4 flex px-16 gap-x-6">
        <div className="h-full">
          <div className="h-full pt-4 flex gap-x-6">
            <div className="flex gap-x-6 h-full sticky top-32">
              <ProductGalery />
            </div>
            <div className="scrollbar flex gap-x-6 h-full">
              <ProductDetails />
            </div>
          </div>
          <div>
            {/* <Ulasan />
            <PhotoReview />
            <UlasanPalingMembantu /> */}
          </div>
        </div>
        <div className="flex gap-x-6 h-full sticky top-32">
          <AddOrder />
        </div>
      </div>
      <Other />
      <Footer />
      <Navigasi />
    </>
  );
}
