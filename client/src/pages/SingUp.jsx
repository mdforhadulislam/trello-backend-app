import React, { useState } from "react";
import { postApiCall } from "../api/apiRequestSend";
import { SingUpApiURL } from "../api/apiUrl";
import Button from "../components/Sing in-up/Button";
import InputBox from "../components/Sing in-up/InputBox";

const SingUp = () => {
  const [fromData,setFromData] = useState({
    name:"",
    username:"",
    email:"",
    password:""
  })

  const changeHendler  = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setFromData({
      ...fromData,
      [name]: value
    })
  }

  const submitHendler = (e)=>{
    e.preventDefault()

    postApiCall(SingUpApiURL,fromData).then(respons=>console.log(respons))
  }


  return (
    <div className="container mx-auto p-4 pb-2 bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-8">
        <h1 className="text-lg font-bold text-center">Sing Up</h1>

        <form className="flex flex-col mt-1">
          <InputBox
            title={""}
            name={"username"}
            placeholder={"Username"}
            type={"text"}
            action={changeHendler}
            value={fromData.username}
          />

          <InputBox
            title={""}
            name={"name"}
            placeholder={"Full-name"}
            type={"text"}
            action={changeHendler}
            value={fromData.name}
          />

          <InputBox
            title={""}
            name={"email"}
            placeholder={"Email"}
            type={"email"}
            action={changeHendler}
            value={fromData.email}
          />

          <InputBox
            title={""}
            name={"password"}
            placeholder={"Password"}
            type={"password"}
            action={changeHendler}
            value={fromData.password}
          />

          <Button title={"Register"} action={submitHendler} />

          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Register already?
              <a href="/auth/singin" className="ml-1 font-medium text-blue-400">
                Sign in now
              </a>
            </p>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SingUp;
