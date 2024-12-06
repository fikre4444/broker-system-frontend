import logo from '../assets/logo2.png'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="flex items-center bg-blue-100 rounded-tl-full rounded-br-full p-3 scale-95 cursor-pointer hover:bg-blue-200 duration-150">
      <img src={logo} alt="Website Logo" className="h-10 p-0" />
      <span className="flex flex-col justify-between items-center gap-0 text-lg font-bold text-blue-600">
        <span className="leading-none">Axumawit</span>
        <span className="leading-none text-[#70A652]">Broker</span>
      </span>
    </div>
  )
}

export default Logo
