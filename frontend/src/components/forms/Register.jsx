import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const [regUser, setRegUser] = useState(() => {
    return JSON.parse(localStorage.getItem("reg-user")) || []
  });

  const onSubmit = (data) => {
    setRegUser([...regUser, data])
    localStorage.setItem("reg-user", JSON.stringify([...regUser, data]));
    toast.success("Registered successfully")
    navigate("/login")
    reset();
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <div className="p-8 w-full max-w-[410px]">
        <div className='flex flex-col items-center justify-center gap-5 '>
          <img className='w-10 object-cover' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="spotify logo" />
          <h2 className="text-5xl font-extrabold text-[#FFFFFF] text-center mb-6">
            Sign up to start listening
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-white">
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full px-4 py-3 rounded-md border border-neutral-500"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="w-full px-4 py-3 rounded-md border border-neutral-500"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full px-4 py-3 rounded-md border border-neutral-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3BE477] py-3 rounded-full font-bold text-lg text-black hover:scale-105 transition-transform cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="text-center text-neutral-400 font-semibold mt-5 flex flex-col gap-2">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-neutral-200 font-semibold text-lg hover:scale-105 transition cursor-pointer">
            Signin
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register
