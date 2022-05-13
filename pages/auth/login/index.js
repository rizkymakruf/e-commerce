import FormLogin from "components/form/FormLogin";
import { useContext } from "react";
import { GlobalContext } from "context/global";
import { FetchError } from "lib/fetchJson";
function Index() {
  const { globalCtx, globalAct } = useContext(GlobalContext);
  return (
    <div className="overflow-hidden">
      <div className="w-full h-screen bg-white flex flex-col  items-center justify-between py-12 overflow-hidden">
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
          <p className="md:text-base text-sm px-4 text-center">
            © 2022 Hak Cipta Terpelihara PT. Semua Kopi Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
