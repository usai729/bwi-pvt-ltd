import React, { useEffect, useState } from "react";
import bg from "../Assets/auth-login-bg.jpg";

import { AiOutlineArrowRight, AiOutlineLogin } from "react-icons/ai";

import AuthInput from "../Components/AuthInput";
import Alert from "../Components/Alert";
import Spinner from "../Components/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Functions/AuthFunc";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [alert, setAlert] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username?.length <= 0 || password?.length <= 0) {
      setAlert("Fill out all fields!");

      return;
    }

    dispatch(
      login(
        JSON.stringify({
          username: username,
          password: password,
        })
      )
    );

    if (!user.isAuth && user.error) {
      setAlert(user.error);

      return;
    }

    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert();
    }, 5000);
  }, [alert]);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center w-screen h-screen backdrop-blur-2xl">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-2 p-4 shadow-md rounded-md border-1p5 border-gray-300 bg-white w-[95vw] md:w-[50vw] lg:w-[25vw] "
        >
          <p className="text-2xl font-semibold flex items-center justify-between rounded-md rounded-b-none p-2 text-theme1">
            Log In <AiOutlineLogin />{" "}
          </p>
          {alert && <Alert text={alert} />}
          <AuthInput
            label={"Username"}
            type={"text"}
            placeholder={"kminchelle"}
            setU={setUsername}
            U={username}
          />
          <AuthInput
            label={"Password"}
            type={"password"}
            placeholder={"*****"}
            setP={setPassword}
            P={password}
          />
          <button
            type="submit"
            className="group p-2 rounded-md w-full flex items-center justify-center gap-1 text-theme1 font-semibold hover:text-white hover:bg-theme1 transition-all duration-200"
          >
            {!user.loading ? (
              <>
                Continue
                <AiOutlineArrowRight className="group-hover:translate-x-4 transition-all duration-200" />
              </>
            ) : (
              <Spinner />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
