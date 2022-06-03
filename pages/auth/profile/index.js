import NavigasiProfile from "components/profile/navigasiProfile";

import { getLayout } from "components/layout/layout";

function Profile() {
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
