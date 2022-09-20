import React, { useState } from "react";
import Button from "../components/Sing in-up/Button";
import InputBox from "../components/Sing in-up/InputBox";

const SingIn = () => {
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
  });

  const inputHendler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFromData({
      ...fromData,
      [name]: value,
    });
  };

  const submitHendler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4 pb-2 bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-8">
        <h1 className="text-lg font-bold text-center">Sing In</h1>

        <form className="flex flex-col mt-1">
          <InputBox
            title={""}
            name={"email"}
            placeholder={"Email"}
            type={"email"}
            action={inputHendler}
            value={fromData.email}
          />

          <InputBox
            title={""}
            name={"password"}
            placeholder={"Password"}
            type={"password"}
            action={inputHendler}
            value={fromData.password}
            styles={{ fontWeight: "900", letterSpacing: "3px" }}
          />

          <Button title={"Sing In"} action={submitHendler} />

          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Sing In already?
              <a href="/auth/singup" className="ml-1 font-medium text-blue-400">
                Sign Up now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
