// importing layout & component
import NavBar from "components/layout/navBar";
import RouteBar from "components/layout/RouteBar";
import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";

import Subtotal from "components/payment/Subtotal";
import Ekspedisi from "components/payment/ekspedisi";
import ProductList from "components/payment/productList";
import Alamat from "components/payment/alamat";
import TambahAlamat from "components/payment/tambahAlamat";

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <NavBar />
      <RouteBar />
      <div className="h-full pt-4 flex px-16 gap-x-6 w-full">
        <div className="h-full w-full">
          <div className="h-full flex-col gap-x-6 w-full">
            <div className="w-full mb-2">
              <Alamat />
            </div>
            <div className="w-full my-2">
              <TambahAlamat />
            </div>
            <div className="w-full">
              <ProductList />
            </div>
            {/* <div className="w-full">
              <TerakhirDilihat />
            </div>
            <div className="w-full">
              <RekomendasiBuatKamu />
            </div> */}
          </div>
        </div>
        <div className="flex-col gap-x-6 h-full sticky top-32">
          <Subtotal />
          <Ekspedisi />
        </div>
      </div>
      <Footer />
      <Navigasi />
    </>
  );
}
