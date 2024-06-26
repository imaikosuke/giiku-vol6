import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/FirebaseConfig";

const SignOutButton = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const signOut = async () => {
    try {
      await auth.signOut();
      Cookies.remove("user");
    } catch (error) {
      console.error("Sign out error:", error);
    }

    if (Cookies.get("user") === undefined) {
      onClose();
      router.push("/signin");
    }
  };
  return (
    <button onClick={signOut} className="bg-red-500 text-white px-4 py-2 rounded">
      Sign out
    </button>
  );
};

export default SignOutButton;
