import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = ()=>{
    const dispatch = useDispatch();
    
    // HERE WE HAVE DONE THE WHOLE ROUTING PART FOR THIS PROJECT
    const appRouter  = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
    {
            path: "/browse",
            element:<Browse/>
        },
    ])

    useEffect(()=>{
      // AS we created the redux store and whenever user signin ,signout and signup we need to dispatch the action everytime so to avoid the complexity firebase provide a API that is onAuthStateChanged to use and call everytime whenver user states changes either user do login loout and signup ,just write once and it will take care of everything
         onAuthStateChanged(auth,(user)=>{
          if(user){
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid :uid,email:email,displayName:displayName, photoURL:photoURL}));
            // navigate("browse")
            //here after dispatching the add user we need user navigate to browse page that is home page but here we can use the navigate function directly as navigate can be used inside the routed component so thats why here we can write
          }else{
             dispatch(removeUser());
            //  navigate("/")
          }
         })
    },[])
    return (
      <div>
        <RouterProvider router = {appRouter}/>
      </div>
    )
}
export default Body;