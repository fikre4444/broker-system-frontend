import React, { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { handleFirstName, handleLastName, handleEmail, handleUsername } from "../utils/validationUtil";
import { sleep } from "../utils/otherUtils";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } }= useForm();
  const [ isUploading, setIsUploading ] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  const handleProfilePictureChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      //compress the image first
      setProfilePictureUrl(null);
      const compressedImage = await compressImage(file);
      setProfilePicture(compressedImage);
      setProfilePictureUrl(URL.createObjectURL(compressedImage));
    }
  };

  const getUserDetails = (data) => {
    const userDetails = {...data, gender: data.gender ? data.gender : null};
    return userDetails;
  }

  const compressImage = async (image) => {
    const options = {
      maxSizeMB: 1,          // Maximum size in MB
      maxWidthOrHeight: 800, // Max width or height of the image
      useWebWorker: true,    // Enable multi-threading for faster compression
    };
    //this is where we compress the image
    const originalFileName = image.name; // Get the original name
    const originalFileExtension = image.name.split('.').pop(); 
    const startTime = performance.now();
    setIsUploading(true);
    const compressedImage = await imageCompression(image, options);
    const endTime = performance.now();
    console.log("Done with the compression it took");
    console.log((endTime - startTime).toFixed(2));
    const compressedFile = new File(
        [compressedImage],
        `${originalFileName.replace(`.${originalFileExtension}`, "")}.jpg`, // Ensure it's saved as a JPG
        { type: "image/jpeg" }
    ); 
    setIsUploading(false);       
    return compressedFile;
  }

  const getProfilePicture = async () => {
    if(profilePicture){ //if the profile picture was set
      return profilePicture;
    }
    return null;
  }

  const onSubmit = async (data) => {
    const userDetails = getUserDetails(data); //preparing the user details
    const profilePic = await getProfilePicture(); //preparing the profile pic and compressing it
    
    const formData = new FormData();

    formData.append("file", profilePic);
    formData.append(
      "registerDto",
      new Blob([JSON.stringify(userDetails)], { type: "application/json" })
    );
    console.log("registering is being done");
    console.log(formData);
    const registeringToast = toast.loading("Registering...");
    await sleep(2000);
    try{
      toast.update(registeringToast, {closeButton: true});
      const response = await axios.post("http://localhost:8080/api/register/register-with-profile-pic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if(response.status == 200) {
        // you need to redirect to the user there.
        toast.update(registeringToast, {
          type: "success",
          render: "Successfully Registered, Redirecting..",
          autoClose: 1000,
          isLoading: false,
        });
        console.log(response.data);
      }
    } catch (error) {
      toast.update(registeringToast, {
        type: "error",
        render: "Error while registering!",
        autoClose: 1000,
        isLoading: false
      })
      console.log(error);
    }


  }

  return (
    <div className="min-h-screen py-4 bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Your Account
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Join Axumawit Broker to explore houses, land, and animals with ease.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  {...register("firstName", {
                    required: "First Name is Required.",
                    validate: (value) => handleFirstName(value)
                  })}
                />
                {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName.message}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  {...register("lastName", {
                    required: "Last Name is required",
                    validate: (value) => handleLastName(value)
                  })}
                />
                {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName.message}</div>}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                {...register("username", {
                  required: "Username is required.",
                  validate: (value) => handleUsername(value)
                })}
              />
              {errors.username && <div className="text-red-500 text-sm">{errors.username.message}</div>}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                {...register("email", {
                  required: "Email is required.",
                  validate: (value) => handleEmail(value)
                })}
              />
              {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password Must a have a minimum length of 6"
                  }
                })}
              />
              {errors.password && <div className="text-red-500 text-sm">{errors.password.message}</div>}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                {...register("gender")}
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture (Optional)
              </label>
              <div className="flex items-center space-x-4 mt-2">
                {profilePictureUrl ? (
                    <img
                      src={profilePictureUrl}
                      alt="Profile Preview"
                      className="h-16 w-16 rounded-full object-cover border border-gray-300"
                    />
                  )
                :
                <div
                  className={`relative h-16 w-16 rounded-full object-cover bg-green-400 bg-opacity-50 ${
                    isUploading ? 'animate-pulse' : ''
                  }`}
                >
                  {isUploading && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        className="animate-spin h-8 w-8 border-4 border-gray-200 border-t-gray-600 rounded-full"
                        viewBox="0 0 24 24"
                      />
                    </div>
                  )}
                </div>
                }
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={
                !isSubmitting ? 
                "mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" :
                "mt-6 w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
              }
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
