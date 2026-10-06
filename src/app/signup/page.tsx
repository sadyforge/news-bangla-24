"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name as string,
      image: user.image as string,
      email: user.email as string,
      password: user.password as string,
      callbackURL: "/",
    });

    if (data) {
   toast.success('sign up successfully')
      router.push("/");
    }

    if (error) {
      
   toast.error(error.message ?? "সাইন ইন ব্যর্থ হয়েছে");
    }
  };

  const handleSignUpWithGoogle=async()=>{
     await authClient.signIn.social({
    provider: "google",
  });
  
}
  const handleSignUpWithGithub=async()=>{
      await authClient.signIn.social({
        provider: "github"
    })

}

  return (
    <div className="flex flex-col items-center justify-center my-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>

      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-md">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
            required
          />

          <label className="label">ImageURL</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image"
          />

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
            সাইন আপ করুন
          </button>
        </fieldset>
            <button
            onClick={handleSignUpWithGoogle}
            type="submit"
            className="btn text-white bg-red-700 mt-4"
          >
              Google দিয়ে সাইন আপ করুন
          </button>
       
            <button
            onClick={handleSignUpWithGithub}
            type="submit"
            className="btn text-white btn-secondary ml-12 mt-4"
          >
              Github দিয়ে সাইন আপ করুন
          </button>
       
      </form>
   
        
    </div>
  );
};

export default SignUpPage;