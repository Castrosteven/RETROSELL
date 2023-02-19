import { SIGN_IN } from "@/mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [signin, { error, data }] = useMutation(SIGN_IN, {
    variables: {
      email: form.email,
      password: form.password,
    },
  });
  return (
    <div>
      <input type="email" placeholder="Enter Email" required />
      <input type="password" placeholder="Enter Password" required />
      <button
        onClick={() => {
          signin();
        }}
      >
        Login
      </button>
    </div>
  );
};
