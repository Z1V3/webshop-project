"use client";

import { NavComponent } from '../NavComponent';

export const DesktopHeader = ({ session, className }) => {

  return (
    <div className={`min-h-[200px] text-white items-end text-xl mb-16 ${className}`}>
      <div className="flex my-1 flex-grow">
        <div className='w-[1600px] h-[290px] -top-16 bg-slate-600/20 absolute ml-32 z-1 rounded-lg'></div>
        <div className="relative z-5 flex gap-6 ml-16 items-center flex-grow justify-center flex-wrap bg-[#363636]/95 p-4 rounded-lg">
          <div className="relative z-5 flex gap-6 ml-16 items-center flex-grow justify-center flex-wrap bg-[#4a4a4a]/90  p-4 rounded-lg">
            <NavComponent href="/" className='p-1 border-b-2  border-white/50 hover:-translate-y-4 hover:scale-125 duration-100'>Home</NavComponent>
            <NavComponent href="/products" className='p-1 border-b-2  border-white/50 hover:-translate-y-4 hover:scale-125 duration-100'>Browse all</NavComponent>
            <NavComponent href="/paintings" className='p-1 border-b-2  border-white/50 hover:-translate-y-4 hover:scale-125 duration-100'>Paintings</NavComponent>
            <NavComponent href="/decorations" className='p-1 border-b-2  border-white/50 hover:-translate-y-4 hover:scale-125 duration-100'>Decorations</NavComponent>
            <NavComponent href="/wearables" className='p-1 border-b-2  border-white/50 hover:-translate-y-4 hover:scale-125 duration-100'>Wearables</NavComponent>
            <NavComponent href="/about" className='p-1 border-b-2  border-white/50 hover:-translate-y-4 hover:scale-125 duration-100'>About</NavComponent>
            <NavComponent href="/contact" className='p-1 border-b-2  border-white/50 hover:-translate-y-4 hover:scale-125 duration-100'>Contact</NavComponent>
            <NavComponent href="/posts" className='p-1 border-b-2  border-white/50 hover:-translate-y-4 hover:scale-125 duration-100'>Posts</NavComponent>
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
              <div className='border-2 p-2 hover:scale-105 duration-200'>
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