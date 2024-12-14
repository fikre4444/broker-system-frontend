import { useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));
  const [gotResponse, setGotResponse] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [profile, setProfile] = useState("");
  const [imageUrl, setImageUrl] = useState(null);


  const getDatathen = async () => {
    console.log("the jwt is "+jwt)
    const response = await axios.get(`${baseUrl}/api/user/say-hello`, {
      headers: {
        "authorization": `Bearer ${jwt}`, // Ensure proper capitalization
      },
    });
    if(response.status === 200){
      console.log(response.data);
      setGotResponse(true);
      setResponseData(response.data);
    }
    else {
      console.log("an error occured");
    }
  }

  const handleViewProfile = async () => {
    const response = await axios.get(`${baseUrl}/api/user/get-profile`, {
      headers: {
        "authorization": `Bearer ${jwt}`, // Ensure proper capitalization
      },
    });
    console.log(response.data);
    setProfile(JSON.stringify(response.data));
    // const serverImageUrl = response.data.profilePicUrl;
    // const imageName = serverImageUrl.substring(serverImageUrl.lastIndexOf("\\")+1);
    await getMyProfilePic();
  }

  const getMyProfilePic = async () => {
    const response = await axios.get(
      `${baseUrl}/api/user/get-my-profile-pic`,
      {
        headers: {
          "authorization": `Bearer ${jwt}`, // Ensure proper capitalization
        },
        responseType: "blob", // Ensures binary data is fetched
      }
    );
    const imageBlob = new Blob([response.data], { type: "image/jpeg" });
    const imageObjectURL = URL.createObjectURL(imageBlob);

    setImageUrl(imageObjectURL); // Update state with the URL
    
  }


  return (
    <div>
      <h1>This will be after login</h1>
      <h1>{jwt}</h1>

      <button onClick={() => {getDatathen()}}>get data</button>
      {gotResponse && <div>{responseData}</div>}

      <button onClick={() => {handleViewProfile()}}>View Profile</button>
      <div>{profile}</div>
      <img src={imageUrl} alt="image"/>
    </div>
  )
}

export default UserDashboard
