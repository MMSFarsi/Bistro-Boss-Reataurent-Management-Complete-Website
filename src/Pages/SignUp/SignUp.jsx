import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin";


const SignUp = () => {
  const axiosPublic=useAxiosPublic()
  const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate=useNavigate()
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        updateUserProfile(data.name, data.photo)
          .then(() => {
          //  create user entry in DB
          const userInfo={
            name: data.name,
            email: data.email

          }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
              if(res.data.insertedId){
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Profile Updated",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')
              }
            })

           
          })
          .catch(error => console.log(error))
      })
  }


  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>


      <div className="py-10 min-h-screen flex items-center justify-center">
        <div className="card w-[300px] lg:w-[400px]  p-6 border-[#676767] border bg-white dark:bg-gray-100 shadow-xl rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}

                placeholder="Your Name"
                className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"

              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Photo URL</label>
              <input
                type="url"
                name="photo"
                {...register("photo")}
                placeholder="Photo URL"
                className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
                })}
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"

              />
              {errors.password && <span>Password Must be at least charcater or less than 20</span>}
            </div>
            <div>
              <button className="w-full py-2 px-4 bg-[#484848] text-white font-semibold rounded-lg transition">
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-[#000000]">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  )
};

export default SignUp;
