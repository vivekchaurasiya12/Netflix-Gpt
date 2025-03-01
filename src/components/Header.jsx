import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    
    const handleSignout = ()=>{
        signOut(auth).then(()=>{
         navigate("/");
        }).catch((error)=>{
            navigate("/error");
        });
    }
    return(
        <div className="absolute px-5 py-2 bg-gradient-to-b from-black to-transparent w-full flex justify-between items-center">      
        <img           src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
           alt="Netflix Logo" 
           className="w-56 h-auto sm:w-48 md:w-56" 
        />
        
       
        
           <button onClick={handleSignout} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm sm:text-base">
              Sign Out
           </button>
        
     </div>
     
     
    )
}
export default Header;