// importing layout & component
import NavBar from "components/layout/navBar";
import Slider from "components/home/slider";
import Slider2 from "components/home/slider2";
import BestProduct from "components/home/bestProduct";
import ProdukBaru from "components/home/produkBaru";
import ProductRekomendasi from "components/home/produkRekomendasi";
import BrandPilihan from "components/home/brandPilihan";
import KategoriPopuler from "components/home/kategoriPopuler";
import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";
import { getLayout } from "components/layout/layout";

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const slide2 = Array.from(Array(SLIDE_COUNT).keys());

const Homes = () => {
  return (
    <>
      <Slider slides={slides} />
      <BestProduct />
      <ProdukBaru />
      <ProductRekomendasi />
      <BrandPilihan />
      <Slider2 slide2={slide2} />
      <KategoriPopuler />
    </>
  );
};

Homes.getLayout = getLayout;
export default Homes;
