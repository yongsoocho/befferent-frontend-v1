import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/*naver 로그인 sdk*/}
        <Script
          type="text/javascript"
          src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
          charSet="utf-8"
          id="naver-sdk"
          strategy="beforeInteractive"
        />
        {/*kakao 로그인 sdk*/}
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          id="kakao-sdk"
          strategy="beforeInteractive"
        />
        {/* toss payment sdk */}
        <Script
          src="https://js.tosspayments.com/v1"
          id="toss-sdk"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
