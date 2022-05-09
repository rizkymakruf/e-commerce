// importing layout & component
import NavBar from "components/layout/navBar";

import Footer from "components/layout/footer";
import Navigasi from "components/layout/navigasi";

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <NavBar />
      <Footer />
      <Navigasi />
    </>
  );
}
