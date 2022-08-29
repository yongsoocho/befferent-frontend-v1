import Script from "next/script";

export default function LoginCallback() {
  return (
    <div>
      <Script id="naver-callback">{`
      var naver_id_login = new naver_id_login("A1O4I5e_wt7zMn_m3In4", "http://localhost:3000/login/callback");
      alert(naver_id_login.oauthParams.access_token);
      console.dir(naver_id_login.oauthParams, { depth: 3 });
      console.log(naver_id_login.oauthParams);
      alert(naver_id_login.oauthParams)
      naver_id_login.get_naver_userprofile("naverSignInCallback()");
      function naverSignInCallback() {
        alert(naver_id_login.getProfileData('email'));
        alert(naver_id_login.getProfileData('nickname'));
        alert(naver_id_login.getProfileData('age'));
      }`}</Script>
      <h1>Hi</h1>
    </div>
  );
}
