import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import SocialLogin from './social/SocialLogin';
import { Link } from 'react-router';
import axios from 'axios';
import useAxios from '../hooks/useAxios';

const Register = () => {
    const axiosSecure=useAxios()

    const { userRegister,updateUser } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

   const handelRegister = (data) => {
  const photoFile = data.photo[0];

  userRegister(data.email, data.password)
    .then(result=> {
      
      console.log(result);
      
      
      const formData = new FormData();
      formData.append("image", photoFile);

      const image_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_bb_key}`;

      
      axios.post(image_api_url, formData)
        .then(res => {
          const imageUrl = res.data.data.url; 

          const userData={
            email:data.email,
            displayName: data.name,
            photoURL: imageUrl 


          }

          axiosSecure.post("/user",userData)
          .then(result=>{
            if (result.data.insertedId) {
                console.log("user crearted database");
                reset()
                
                
            }
          })


          const updateData = {
            displayName: data.name,
            photoURL: imageUrl 
          };

         
          updateUser(updateData)
            .then(() => {
              console.log("Profile updated successfully!");
            })
            .catch(err => {
              console.log("Update Error:", err);
            });

        })
        .catch(err => {
          console.log("Image Upload Error:", err);
        });

    })
    .catch(error => {
      console.log("Register Error:", error);
    });
};


    return (
        <div className="card w-full mx-auto max-w-sm p-4 shadow-md">
            <h3 className="text-2xl font-bold text-center">Create an Account</h3>
            <p className="text-center">Register with ZapShift</p>

            <form className="w-full" onSubmit={handleSubmit(handelRegister)}>
                <fieldset className="fieldset">

                    {/* Name */}
                    <label className="label">Name</label>
                    <input
                        type="text"
                        className="input w-full"
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                    />
                    {errors.name && (
                        <p className="text-red-500">Name is required</p>
                    )}

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input w-full"
                        {...register("email", { required: true })}
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-red-500">Email is required</p>
                    )}

                    {/* Photo URL */}
                    <label className="label">Profile Photo</label>
                    <input
                        type="file"
                        className="file-input w-full"
                        {...register("photo", { required: true })}
                    />
                    {errors.photo && (
                        <p className="text-red-500">Photo is required</p>
                    )}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input w-full"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
                        })}
                        placeholder="Password"
                    />

                    {errors.password?.type === "required" && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                        <p className="text-red-500">
                            Password must be at least 6 characters
                        </p>
                    )}
                    {errors.password?.type === "pattern" && (
                        <p className="text-red-500">
                            Must contain uppercase, lowercase & number
                        </p>
                    )}

                    <button className="btn btn-neutral mt-4 w-full">Register</button>
                </fieldset>

                <p className="mt-2 text-sm">
                    Already have an account? 
                    <Link className="text-blue-500 underline pl-1" to="/login">
                        Login
                    </Link>
                </p>
            </form>

            <SocialLogin />
        </div>
    );
};

export default Register;
