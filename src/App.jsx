import { useState } from "react";
import Input from "./components/Input";

function App() {
  const initialInput = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const initialInputerror = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputerror);

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log("input.username", input.username);

    if (!input.username) {
      setInputError((prev) => ({ ...prev, username: "username is required" }));
    }

    if (!input.password) {
      setInputError((prev) => ({ ...prev, password: "password is required" }));
    } else if (input.password.length < 6) {
      setInputError((prev) => ({
        ...prev,
        password: "password ต้องมากกว่า 6 ตัว",
      }));
    }

    if (!input.confirmPassword) {
      setInputError((prev) => ({
        ...prev,
        confirmPassword: "password is required",
      }));
    } else if (input.confirmPassword !== input.password) {
      setInputError((prev) => ({
        ...prev,
        confirmPassword: "password ไม่ตรงกัน",
      }));
    }
  };

  // console.log("input", input);

  return (
    <>
      <h1 className="text-3xl">Register</h1>
      <form onSubmit={handelSubmit} className="space-y-3">
        <div className="flex flex-col">
          <label>username</label>
          <Input
            valueInput={input.username}
            placeholder="username"
            error={inputError.username}
            handelChange={handelChange}
            nameInput={"username"}
            typeInput={"text"}
          />
        </div>

        <div className="flex flex-col">
          <label>password</label>
          <Input
            valueInput={input.password}
            placeholder="password มากกว่า 6 ตัว"
            error={inputError.password}
            handelChange={handelChange}
            nameInput={"password"}
            typeInput={"password"}
          />
        </div>

        <div className="flex flex-col">
          <label>confirm password</label>
          <Input
            valueInput={input.confirmPassword}
            placeholder="confirm Password"
            error={inputError.confirmPassword}
            handelChange={handelChange}
            nameInput={"confirmPassword"}
            typeInput={"password"}
          />
        </div>

        <button className="bg-green-300 w-full py-1 px-2 rounded-md">
          submit
        </button>
      </form>
    </>
  );
}

export default App;
