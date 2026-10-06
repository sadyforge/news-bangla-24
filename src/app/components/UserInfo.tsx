"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {user ? (
        <div className="avatar flex items-center gap-4">
          <Link href="/profile">
            <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2">
              <img
                src={user.image || "/default-avatar.png"}
                alt={user.name || "User"}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </Link>

          <h1 className="text-2xl">{user.name}</h1>

          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <Link href="/signin">
            <span className="cursor-pointer">সাইন ইন</span>
          </Link>

          <Link href="/signup">
            <button className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;