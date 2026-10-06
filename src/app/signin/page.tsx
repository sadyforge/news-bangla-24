"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email as string,
      password: user.password as string,
      callbackURL: "/",
    });

    if (data) {
      toast.success('sign in successfully')
      router.push("/");
    }

    if (error) {
   toast.error(error.message ?? "সাইন ইন ব্যর্থ হয়েছে");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>

      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-md">
          <label className="label">ইমেইল</label>

          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
            required
          />

          <label className="label">পাসওয়ার্ড</label>

          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="btn text-white bg-red-700 mt-4"
          >
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;