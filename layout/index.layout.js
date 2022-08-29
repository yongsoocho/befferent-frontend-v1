import Head from "next/head";
import { useRouter } from "next/router";
import Drawer from "../components/Drawer.component";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/user.context";

export default function Layout({ children }) {
  const { asPath } = useRouter();
  const { user, sessionLogin } = useContext(UserContext);

  useEffect(() => {
    sessionLogin();
  });

  if (asPath.startsWith("/admin-board")) {
    return (
      <div className="relative bg-white h-screen text-black overflow-hidden">
        <Head>
          <title>관리자</title>
        </Head>
        <Drawer />
        <div className="box-border p-5 pl-64">{children}</div>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>hi</title>
        </Head>
        {children}
      </div>
    );
  }
}
