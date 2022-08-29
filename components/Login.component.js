import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://localhost:8000";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("email")) {
      setEmail(window.localStorage.getItem("email"));
    }
  }, []);

  const onClickAdminLogin = () => {
    axios
      .post(`${url}/auth/manager-login`, {
        email,
        password,
      })
      .then(({ data }) => {
        console.log("login success", data);
      })
      .catch((e) => {
        console.log("login fail", e);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-80 h-56 admin_before before:content-['로그인']">
        <input
          className="admin_input mt-8"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="admin_input"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="admin_btn" onClick={onClickAdminLogin}>
          로그인
        </button>
      </div>
    </div>
  );
}
