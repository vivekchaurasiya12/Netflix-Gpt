import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
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

  
    return (
      <div>
        <RouterProvider router = {appRouter}/>
      </div>
    )
}
export default Body;