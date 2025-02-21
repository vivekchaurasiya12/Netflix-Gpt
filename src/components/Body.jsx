import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";
const Body = ()=>{
    // HERE WE HAVE DONE THE WHOLE ROUTING PART FOR THIS PROJECT
    const appRouter  = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
          path: "/header",
          element:<Header/>
      },
        {
            path: "/browse",
            element:<Browse/>
        }
    ])
    return (
      <div>
        <RouterProvider router = {appRouter}/>
      </div>
    )
}
export default Body;