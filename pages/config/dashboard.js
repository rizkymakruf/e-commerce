import { useContext, useState, useEffect, useRef } from "react";
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import fetchJson, { FetchError } from "lib/fetchJson";

import { GlobalContext } from "context/global";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

import { checkUid } from "lib/arangoDb";
import { redirect, retObject, checkerToken } from "lib/listFunct";

import { getLayout } from 'components/layout/sideNav';

import CoinPriceChart from 'components/chart/coinPriceChart';
import Line from 'components/chart/line';

export const getServerSideProps = withIronSessionSsr(async function ({req, res, query}) {

  var user = await req.session.user;
  if (!user || !user.access_token) {
    return redirect("/administration")
  }

  const validationToken = await checkerToken( user )
  if (validationToken.error) {
    await req.session.destroy();
    return redirect("/administration")
  }

  if ( validationToken.status === "refresh" ) {
    user = { isLoggedIn: true, access_token: validationToken.access_token, refresh_token: validationToken.refresh_token };
    req.session.user = user;
    await req.session.save();
  }

  const uid = JSON.parse(atob(user.access_token.split('.')[1]));
  const checkUids = await checkUid(uid.user_id);

  if (checkUids.length < 1 || checkUids[0].blocked || checkUids[0].group !== "admin") {
    return redirect("/")
  }

  const _cg_api = 'https://api.coingecko.com/api/v3';

  const marketData = await fetch(
    `${_cg_api}/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly`
  ).then((res) => res.json());

  return retObject({
    isLogin: true,
    fullName: checkUids[0].fullname,
    marketData: marketData
  })

},sessionOptions);

const Dashboard = (props) => {

  const router = useRouter();
  const { globalCtx, globalAct } = useContext(GlobalContext);

  useEffect(() => {
    globalAct.setIsFetch(false)
    globalAct.setErrorMsg("")
    if (props.fullName && props.fullName.length > 0){
      globalAct.setFullname(props.fullName)
    }
  },[])


  return (
    <div className="w-full h-full p-4 relative overflow-scroll">

      <div className="w-full h-96 relative mb-4">
        <CoinPriceChart {...props.marketData} />
      </div>

      <div className="w-full h-auto relative flex flex-row gap-4">

        <div className="w-full h-32 border-2 border-gray-50 shadow-md rounded-md relative flex justify-end items-end">
          <div className="w-48 h-20 absolute pb-5 pr-4">
            <Line {...props.marketData} />
          </div>
        </div>

        <div className="w-full h-32 border-2 border-white shadow-md rounded-md relative flex justify-end items-end">
          <div className="w-48 h-20 absolute pb-5 pr-4">
            <Line {...props.marketData} />
          </div>
        </div>

        <div className="w-full h-32 border-2 border-white shadow-md rounded-md relative flex justify-end items-end">
          <div className="w-48 h-20 absolute pb-5 pr-4">
            <Line {...props.marketData} />
          </div>
        </div>

      </div>

    </div>
  )
}

Dashboard.getLayout = getLayout
export default Dashboard
