import Navbar from "./navBar";
import Footer from "./footer";

import { GlobalContext } from "context/global";
import { useContext } from "react";
import Modal from "./modal";

export default function Layout({ children }) {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  return (
    <>
      <div className="fixed z-50">
        <Modal />
      </div>

      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
