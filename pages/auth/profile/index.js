import NavBar from "components/layout/navBar";
import Footer from "components/layout/footer";
import NavigasiProfile from "components/profile/navigasiProfile";
import { useState, useContext } from "react";
import { GlobalContext } from "context/global";

import { getLayout } from "components/layout/layout";

//MODAL
import AddAddress from "components/layout/modal/addAddress";
import LogOut from "components/layout/modal/logOut";
function Profile() {
  const { globalCtx, globalAct } = useContext(GlobalContext);
  const [menu, setMenu] = useState("semua");
  return (
    <>
      <div className="mt-24">
        <div className="pb-24">
          <div className="">
            <div className="flex gap-10">
              <NavigasiProfile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
Profile.getLayout = getLayout;
