import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MovieDetails from "./MovieDetails"; 
const Body = ()=>{
   
    
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
        {
          path: "/movie/:movieId", // Add a route for movie details
          element: <MovieDetails />,
        },
    ])

  
    return (
      <div>
        <RouterProvider router = {appRouter}/>
      </div>
    )
}
export default Body;