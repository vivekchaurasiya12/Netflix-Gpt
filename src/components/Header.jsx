import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {IMAGE, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user);
      const showGptSearch = useSelector((state)=>state.gpt.showGptSearch);
    const handleSignout = ()=>{
        signOut(auth).then(()=>{
        }).catch((error)=>{
            navigate("/error");
        });
    }

    useEffect(()=>{
        // AS we created the redux store and whenever user signin ,signout and signup we need to dispatch the action everytime so to avoid the complexity firebase provide a API that is onAuthStateChanged to use and call everytime whenver user states changes either user do login loout and signup ,just write once and it will take care of everything
         const unsubscribe =  onAuthStateChanged(auth,(user)=>{
            if(user){
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid :uid,email:email,displayName:displayName, photoURL:IMAGE}));
               navigate("/browse")
              //here after dispatching the add user we need user navigate to browse page that is home page but here we can use the navigate function directly as navigate can be used inside the routed component so thats why here we can write
            }else{
               dispatch(removeUser());
               navigate("/")
            }
           })
         return ()=> unsubscribe();
      },[]);

        const handleGptSearchClick = ()=>{
            dispatch(toggleGptSearchView());
        }

        const handleLanguageChange = (e)=>{
          dispatch(changeLanguage(e.target.value));
        }

    return(
        <div className="absolute px-5 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center z-10">      
        <img src={LOGO} 
           alt="Netflix Logo" 
           className="w-48 h-auto sm:w-48 md:w-56" 
        />
       
       {user &&
    //    this div will render when user is either login or signup then it will show the signout button
        <div className="flex items-center gap-2">
            {showGptSearch &&  <select className="bg-gray-500 text-white p-1 rounded-2xl" onChange={handleLanguageChange}>
                {
                    SUPPORTED_LANGUAGES.map((language)=>(
                        <option key = {language.label} value={language.identifier} >{language.label}</option>
                    ))
                }
          
            </select>}
           

        <button onClick={handleGptSearchClick} className="bg-red-500 text-white px-3 py-1 rounded-2xl text-sm sm:text-base">{showGptSearch ?  "Home Page":"GPT Search" } </button>
        <img src={user?.photoURL} alt="image" className="w-6 h-6 z-10 "/>
        <button onClick={handleSignout} className="bg-red-500 text-white px-3 py-1 rounded-2xl text-sm sm:text-base">
            Sign Out
        </button>
        </div>
}
     </div>
     
     
    )
}
export default Header;