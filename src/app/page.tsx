"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
  const { data: session } = useSession();
  useEffect(() => {


  }, [session])
  if (session) {
    console.log(session);
    return (
      <div className="min-h-screen w-full  relative text-black flex flex-col items-center justify-center gap-4">
        {/* @ts-ignore */}
        <p className="text-black">Signed in as {session.session.user.email}</p>
        {/* @ts-ignore */}

        <p className="text-black">COURSES : {session.courses.join(", ")}</p>

        {/* @ts-ignore */}
        <img src={session.session.user.image} alt="user avatar" />
        <button className=" border-amber-200 border-4 rounded-2xl py-2   px-10 bg-blue-800" onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full  relative text-black flex flex-col items-center justify-center gap-4">
      <p>Not Signed in</p>
      <p><button onClick={() => signIn("google")}>Sign in</button></p>
    </div>
  );
}
