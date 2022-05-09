// importing layout & component
import NavBar from "components/layout/navBar";
import Slider from "components/home/slider";
import BestProduct from "components/home/bestProduct";
import ProdukBaru from "components/home/produkBaru";
import ProductRekomendasi from "components/home/produkRekomendasi";
import BrandPilihan from "components/home/brandPilihan";
import KategoriPopuler from "components/home/kategoriPopuler";
import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <NavBar />
      <Slider slides={slides} />
      <BestProduct />
      <ProdukBaru />
      <ProductRekomendasi />
      <BrandPilihan />
      {/* slider */}
      <KategoriPopuler />
      <Footer />
      <Navigasi />
    </>
  );
}
