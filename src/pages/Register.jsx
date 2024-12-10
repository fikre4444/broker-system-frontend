import React, { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import axios from 'axios';


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");


  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);



  // useEffect(() => {
  //   console.log("the profile pic has been changed");
  //   console.log(profilePicture)
  //   if(profilePicture){
  //     const image = profilePicture.host;
  //     console.log(image);
  //   }
  // }, [profilePicture])

  const handleProfilePictureChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      //compress the image first
      // # TODO might need to add a compressing image animation
      const compressedImage = await compressImage(file);
      setProfilePicture(compressedImage);
      setProfilePictureUrl(URL.createObjectURL(compressedImage));
    }
  };

  const getUserDetails = () => {
    const userDetails = {
      "firstName" : firstName,
      "lastName" : lastName,
      "username" : username,
      "password" : password,
      "email" : email,
      "gender" : gender ? gender : null
    };

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
    const compressedImage = await imageCompression(image, options);
    const endTime = performance.now();
    console.log("Done with the compression it took");
    console.log((endTime - startTime).toFixed(2));
    const compressedFile = new File(
        [compressedImage],
        `${originalFileName.replace(`.${originalFileExtension}`, "")}.jpg`, // Ensure it's saved as a JPG
        { type: "image/jpeg" }
    );        
    return compressedFile;
  }

  const getProfilePicture = async () => {
    if(profilePicture){ //if the profile picture was set
      return profilePicture;
    }
    return null;
  }

  const handleRegister = async () => {
    console.log("handling that shit");
    const userDetails = getUserDetails(); //preparing the user details
    const profilePic = await getProfilePicture(); //preparing the profile pic and compressing it
    //we will use form data to send, since we also send a profile picture
    const formData = new FormData();

    formData.append("file", profilePic);
    formData.append(
      "registerDto",
      new Blob([JSON.stringify(userDetails)], { type: "application/json" })
    );

    const response = await axios.post("http://localhost:8080/api/register/register-with-profile-pic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
    });

    if(response.status == 200) {
      console.log(response.data);
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
                value={firstName}
                onChange={(e) => {setFirstName(e.target.value)}}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={lastName}
                onChange={(e) => {setLastName(e.target.value)}}
              />
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
              value={username}
              onChange={(e) => {setUsername(e.target.value)}}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {setGender(e.target.value)}}
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
              {profilePictureUrl && (
                <img
                  src={profilePictureUrl}
                  alt="Profile Preview"
                  className="h-16 w-16 rounded-full object-cover border border-gray-300"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => {handleRegister()}}
          >
            Register
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
