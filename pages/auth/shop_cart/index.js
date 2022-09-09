// importing layout & component
import NavBar from "components/layout/navBar";
import RouteBar from "components/layout/RouteBar";
import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";

import Subtotal from "components/cart/Subtotal";
import KeranjangBelanja from "components/cart/KeranjangBelanja";
import RekomendasiBuatKamu from "components/cart/RekomendasiBuatKamu";
import TerakhirDilihat from "components/cart/TerakhirDilihat";
import { getLayout } from "components/layout/layout";
const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Home() {
  return (
    <>
      <div className="h-full pt-12 flex px-16 mt-24 gap-x-6 w-full">
        <div className="h-full w-full">
          <div className="h-full pt-4 flex-col gap-x-6 w-full">
            <div className="w-full">
              <KeranjangBelanja />
            </div>
            <div className="w-full">
              <TerakhirDilihat />
            </div>
            <div className="w-full">
              <RekomendasiBuatKamu />
            </div>
          </div>
        </div>
        <div className="flex gap-x-6 h-full sticky top-32">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Home;
Home.getLayout = getLayout;
