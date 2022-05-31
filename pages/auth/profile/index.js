import NavBar from "components/layout/navBar";
import Footer from "components/layout/footer";
import NavigasiProfile from "components/profile/navigasiProfile";
import { useState } from "react";

export default function Profile() {
  const [menu, setMenu] = useState("semua");
  return (
    <>
      <NavBar />
      {/* <RouteBar /> */}
      <div className="mt-24">
        <div className="pb-24">
          <div className="">
            <div className="flex gap-10">
              <NavigasiProfile />
            </div>
          </div>
        </div>{" "}
        <Footer />
      </div>
    </>
  );
}
