import React from 'react'
import useAuth from '../../hooks/useAuth'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import { useNavigate } from 'react-router-dom'

const SocialLogin = () => {
    const {signWithGoogle}=useAuth()
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const handleGoogle=()=>{
        signWithGoogle()
        .then(result=>{
            console.log(result);
            const userInfo={
                email: result.user.email,
                name:result.user.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
    }
  return (
    <div className="flex items-center justify-center mt-6">
            <button
    onClick={handleGoogle}
              className="flex items-center justify-center w-full py-2 px-4 bg-white border rounded-lg shadow hover:shadow-lg transition gap-2"
            >
              <span>
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />
              </span>
              <span className="font-medium text-gray-800">Register with Google</span>
            </button>
          </div>
  )
}

export default SocialLogin