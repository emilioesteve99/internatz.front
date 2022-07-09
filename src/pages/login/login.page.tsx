import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import logo from "../../logo.svg";
import "primeflex/primeflex.css";
import { AuthService } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isJustLogged = AuthService.userJustLogged();
    if (isJustLogged) {
      navigate("/translations");
    }
  }, []);

  return (
    <div
      className="flex align-items-center justify-content-center"
      style={{
        marginTop: "20vh",
      }}
    >
      <div className="p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-2">
          <img src={logo} alt="Logo" height={50} className="mb-2" />
          <div className="text-900 text-3xl font-medium mb-2">
            Welcome to Internatz
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            className="w-full mb-3"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            className="w-full mb-3"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
            onClick={async (event) => {
              event.preventDefault();
              const logged = await AuthService.login(email, password);
              if (!logged) return;
              navigate("/translations");
            }}
          />
        </div>
      </div>
    </div>
  );
}
