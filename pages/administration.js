import { useContext, useState, useEffect, useRef } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import fetchJson, { FetchError } from "lib/fetchJson";

import { GlobalContext } from "context/global";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

import { checkUid } from "lib/arangoDb";
import { redirect, retObject, checkerToken } from "lib/listFunct";

import FormLogin from "components/form/FormLogin";

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
  query,
}) {
  var user = await req.session.user;
  if (!user || !user.access_token) {
    return retObject({ isLogin: false });
  }

  const validationToken = await checkerToken(user);
  if (validationToken.error) {
    await req.session.destroy();
    return redirect("/administration");
  }

  if (validationToken.status === "refresh") {
    user = {
      isLoggedIn: true,
      access_token: validationToken.access_token,
      refresh_token: validationToken.refresh_token,
    };
    req.session.user = user;
    await req.session.save();
  }

  const uid = JSON.parse(atob(user.access_token.split(".")[1]));
  const checkUids = await checkUid(uid.user_id);

  if (
    checkUids.length < 1 ||
    checkUids[0].blocked ||
    checkUids[0].group !== "admin"
  ) {
    return redirect("/");
  }

  return retObject({
    isLogin: true,
    fullName: checkUids[0].fullname,
  });
},
sessionOptions);

const Administration = (props) => {
  const router = useRouter();

  {
    /* Default */
  }
  const { globalCtx, globalAct } = useContext(GlobalContext);
  useEffect(() => {
    globalAct.setIsFetch(false);
    globalAct.setErrorMsg("");
    router.prefetch("/config/dashboard");
  }, []);
  {
    /* Default */
  }

  const logout = async () => {
    const body = {
      uri: "bo/logout",
    };
    try {
      const lg = await fetchJson("/api/prot/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/administration");
    } catch (error) {
      if (error instanceof FetchError) {
        globalAct.setErrorMsg(error.data.message);
      } else {
        globalAct.setErrorMsg("An unexpected error happened");
      }
    }
  };

  return (
    <div className="w-full min-h-screen relative bg-white flex flex-row">
      <div className="w-full min-h-screen"></div>
      <div className="w-full min-h-screen relative flex flex-row justify-center items-center gap-4">
        <div className="w-0.5 h-64 bg-gray-100 rounded-full" />
        <div className="w-96 h-auto relative">
          {props.isLogin ? (
            <div className="w-full h-32 relative select-none ">
              <div className="w-full h-full p-3 backdrop-blur bg-white/30 rounded-md border overflow-hidden">
                <p className="text-sm">Hi {props.fullName},</p>
                <div className="w-full h-full relative flex justify-between items-center gap-3">
                  <Link href="/config/dashboard">
                    <button className="w-full h-auto bg-blue-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg">
                      Dashboard
                    </button>
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="w-full h-auto bg-red-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};
export default Administration;
