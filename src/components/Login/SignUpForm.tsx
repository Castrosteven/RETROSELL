import { SIGN_UP } from "@/mutations";
import { UserCreateInput } from "@/__generated__/graphql";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export const SignupForm = () => {
  const [form, setForm] = useState<UserCreateInput>({
    email: "",
    name: "",
    password: "",
  });
  const [signup, { error, data }] = useMutation(SIGN_UP, {
    variables: {
      data: {
        email: form.email,
        name: form.name,
        password: form.password,
      },
    },
  });
  return (
    <div className="flex flex-col  ">
      <input
        type="email"
        placeholder="Enter Email"
        required
        value={form.email}
        onChange={(e) => {
          setForm((current) => ({ ...current, email: e.target.value }));
        }}
      />
      <input
        type="password"
        placeholder="Enter Password"
        required
        value={form.password}
        onChange={(e) => {
          setForm((current) => ({ ...current, password: e.target.value }));
        }}
      />
      <input type="password" placeholder="Confirm Password" required />
      <button
        onClick={() => {
          signup();
        }}
      >
        Sign up
      </button>
    </div>
  );
};
