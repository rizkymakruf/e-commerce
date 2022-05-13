import Navbar from "./navBar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
