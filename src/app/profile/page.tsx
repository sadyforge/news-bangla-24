
"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show,setShow]=useState(false)

  const handleShowForm=()=>{
    setShow(!show)
  }
//   way of proxy
//   if(!user){
//     redirect("/signin")
//   }

  const handleProfile=async(e:React.SubmitEvent<HTMLElement>)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const newUserData=Object.fromEntries(formData.entries()) as{name:string;image:string}
    await authClient.updateUser({
        ...newUserData
    })
    toast.success("Successfully user updated")
     e.target.reset();
    // router.push("/profile")
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <p className="text-gray-500 mt-2">Please sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
  <div>
      <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Profile Card */}
        <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-red-600 via-red-500 to-orange-500"></div>

          {/* Profile Info */}
          <div className="px-6 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-end gap-5 -mt-16">
              
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full border-4 border-base-100 overflow-hidden shadow-lg bg-base-300">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "User"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <div className="pb-2">
                <h1 className="text-3xl font-bold">
                  {user.name}
                </h1>
                <p className="text-base-content/60">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Account Information */}
            <div>
              <h2 className="text-xl font-semibold mb-5">
                Account Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="p-4 rounded-xl bg-base-200">
                  <p className="text-sm text-base-content/50">
                    Name
                  </p>
                  <p className="font-medium mt-1">
                    {user.name}
                  </p>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-base-200">
                  <p className="text-sm text-base-content/50">
                    Email
                  </p>
                  <p className="font-medium mt-1 break-all">
                    {user.email}
                  </p>
                </div>

                {/* Email Status */}
                <div className="p-4 rounded-xl bg-base-200">
                  <p className="text-sm text-base-content/50">
                    Email Status
                  </p>

                  <div className="mt-2">
                    {user.emailVerified ? (
                      <span className="badge badge-success">
                        Verified
                      </span>
                    ) : (
                      <span className="badge badge-warning">
                        Not Verified
                      </span>
                    )}
                  </div>
                </div>

                {/* Account ID */}
                <div className="p-4 rounded-xl bg-base-200">
                  <p className="text-sm text-base-content/50">
                    Account ID
                  </p>
                  <p className="font-medium mt-1 break-all text-sm">
                    {user.id}
                  </p>
                </div>
              </div>
            </div>
                

            {/* Member Since */}
            <div className="mt-6 p-5 rounded-xl border border-base-300">
              <p className="text-sm text-base-content/50">
                Member Since
              </p>
              <p className="font-semibold mt-1">
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
<div className="flex mb-8 justify-center items-center">
        <button onClick={handleShowForm} className="btn btn-secondary">Edit Profile</button>  </div> 

{show &&<div className="flex justify-center my-4">
     <form onSubmit={handleProfile} >
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

       

          <button
            type="submit"
            className="btn text-white bg-red-700 mt-4"
          >
            নিবন্ধন করুন
          </button>
        </fieldset>
          
       
      </form>
   
</div>}

  </div>
  );
};

export default ProfilePage;

