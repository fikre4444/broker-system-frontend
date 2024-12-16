import { useEffect } from "react";
import Features from "../components/Features"
import Hero from "../components/Hero"
import axios from 'axios';


const Homepage = () => {

  useEffect(() => {
    const a = async () => {
      const response = await axios.get("https://9096-196-190-32-86.ngrok-free.app/api/hello/say-hello", {
      	headers: {
	      "ngrok-skip-browser-warning": "true", // Skip Ngrok's browser warning
	    }
      });
      if(response.status == 200){
        console.log(response.data);
      }
    };

    a();
  }, [])

  return (
    <div>
      <Hero />
      <Features />
    </div>
  )
}

export default Homepage;
