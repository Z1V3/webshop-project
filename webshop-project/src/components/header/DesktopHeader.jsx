"use client";

import { NavComponent } from '../NavComponent';

export const DesktopHeader = ({ session, className }) => {

  return (
    <div className={`min-h-[15vh] text-white items-end mb-16 ${className}`}>
      <div className="flex my-1 flex-grow shadow-2xl">
        <div className='w-[50vw] h-[20vh] -top-16 bg-slate-600/40 absolute ml-32 z-1 rounded-lg shadow-2xl'></div>
        <div className="relative z-5 flex gap-6 ml-16 items-center flex-grow justify-center flex-wrap bg-[#363636]/95 p-4 rounded-l-lg">
          <div className="relative z-5 shadow-2xl flex gap-6 ml-16 items-center flex-grow justify-center flex-wrap bg-[#4a4a4a]/90  p-4 rounded-lg">
            <NavComponent href="/" >Home</NavComponent>
            <NavComponent href="/products" >Browse all</NavComponent>
            <NavComponent href="/products/paintings" >Paintings</NavComponent>
            <NavComponent href="/products/decorations" >Decorations</NavComponent>
            <NavComponent href="/products/wearables" >Wearables</NavComponent>
            <NavComponent href="/about" >About</NavComponent>
            <NavComponent href="/contact" >Contact</NavComponent>
            <NavComponent href="/posts" >Posts</NavComponent>
          </div>
          <div className='flex gap-12 md:mx-8 lg:mx-32 items-center flex-grow justify-end text-2xl'>
            {session?.user ? (
              <div className=''>
                <p>Welcome, {session.user.name}!</p>
                <form action="/api/auth/signout">
                  <button type="submit" className="border-2 p-2 hover:scale-110 duration-200">Sign out</button>
                </form>
              </div>
            ) : (
              <div className='border-2 p-2 hover:scale-105 duration-200' style={{ fontSize: "calc(1px + 1vw)" }}>
                <a href="/login">
                  <button>Sign In</button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};