import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const OAuth2LoginHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const jwt = queryParams.get('token');

  useEffect(() => {
    localStorage.setItem("jwt", jwt);
    navigate("/user-dashboard");
  }, [])


  return (
    <div>
      <div>
        Handled Successfully Redirecting...
      </div>
    </div>
  )
}

export default OAuth2LoginHandler
