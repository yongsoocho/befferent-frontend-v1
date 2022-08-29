import Script from "next/script";

export default function Login() {
  return (
    <div>
      <div>
        {/*naver 로그인 jquery*/}
        <Script
          type="text/javascript"
          src="http://code.jquery.com/jquery-1.11.3.min.js"
          id="naver-button"
          strategy="lazyOnload"
        />
        {/*naver 로그인 script*/}
        <Script type="text/javascript" id="naver-login">{`
        var naver_id_login = new naver_id_login("A1O4I5e_wt7zMn_m3In4", "http://localhost:3000/login/callback");
        var state = naver_id_login.getUniqState();
        naver_id_login.setButton("green", 1, 40);
        naver_id_login.setDomain("http://localhost:3000");
        naver_id_login.setState(state);
        naver_id_login.setPopup();
        naver_id_login.init_naver_id_login();`}</Script>
        {/*kakao 로그인 script*/}
        <Script type="text/javascript" id="kakao-login">
          {`function loginWithKakao() {
            Kakao.Auth.login({
              success: function(authObj) {
                console.log(JSON.stringify(authObj))
              },
              fail: function(err) {
                console.log(JSON.stringify(err))
              },
            })
          }`}
        </Script>
        {/*카카오 로그인 초기화*/}
        <Script id="kakao-init">{`Kakao.init('0b5d40cc11eca82991587cbd7774533d');Kakao.isInitialized();`}</Script>
      </div>
      <div>
        <div id="naver_id_login" />
        <a id="custom-login-btn" href="#" onClick={() => loginWithKakao()}>
          <img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            width="222"
            alt="카카오 로그인 버튼"
          />
        </a>
      </div>
    </div>
  );
}
