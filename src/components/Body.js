import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from "react-redux"

const Body = ()=>{

    const dispatch = useDispatch();
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName} = user;
            dispatch(
                addUser({
                    uid,
                    email,
                    displayName
                })
            );
        } else {
            dispatch(removeUser());
        }
        });
    },[])

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    return(
        <RouterProvider router={appRouter}/>
    )
}

export default Body