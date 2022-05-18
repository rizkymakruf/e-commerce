import FormLogin from "components/form/FormRegister";
import { useContext } from "react";
import { GlobalContext } from "context/global";
import { FetchError } from "lib/fetchJson";
import Image from "next/image";
import Link from "next/link";

// import images
import Logo from "/public/static/images/logo.png";
function Index() {
  const { globalCtx, globalAct } = useContext(GlobalContext);
  return (
    <div className="overflow-hidden">
      <Link href={"/"}>
        <div className="w-full pt-8 left-20 absolute">
          <button>
            <Image src={Logo} />
          </button>
        </div>
      </Link>
      <div className="w-full bg-white flex flex-col  items-center justify-between py-12 overflow-hidden">
        <FormLogin
          // Default Form
          globalCtx={globalCtx}
          globalAct={globalAct}
          onSubmit={async function handleSubmit(e) {
            e.preventDefault();
            globalAct.setIsFetch(true);

            const body = {
              username: e.currentTarget.username.value,
              password: e.currentTarget.password.value,
              uri: "login_office",
            };

            try {
              await fetchJson("/api/post", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              });
              router.replace("/config/dashboard");
            } catch (error) {
              if (error instanceof FetchError) {
                globalAct.setErrorMsg(error.data.message);
              } else {
                globalAct.setErrorMsg("An unexpected error happened");
              }
            }
            globalAct.setIsFetch(false);
          }}
        />
        <div>
          <p className="md:text-base text-sm text-center pt-24">
            © 2022 Hak Cipta Terpelihara PT. Semua Kopi Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
