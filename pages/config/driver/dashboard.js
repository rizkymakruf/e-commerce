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

  return retObject({
    isLogin: true,
    fullName: checkUids[0].fullname
  })

},sessionOptions);

const Dashboard = (props) => {

  return null
}

Dashboard.getLayout = getLayout
export default Dashboard
