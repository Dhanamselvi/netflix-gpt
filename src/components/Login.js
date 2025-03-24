import Home from "./Home"
import {useState} from "react"

const Login = () =>{
    const [isSignIn, setIsSignIn] = useState(true)
    const handleToggler = () =>{
        setIsSignIn(!isSignIn)
    }
    return(
        <div>
            <Home/>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_small.jpg"
                 alt="BackgroundImage"
            />
            <form className="absolute 
                             top-1/2 
                             left-1/2 
                             transform -translate-x-1/2 -translate-y-1/2 
                             bg-black 
                             bg-opacity-60 
                             p-5
                             rounded-lg
                             text-white">
                <h1 className="text-3xl font-bold mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type="text" 
                       placeholder="Full Name"
                       className="my-2 block bg-gray-700 p-2 w-full"/>
                }
                <input type="email" 
                       placeholder="Email"
                       className="my-2 block bg-gray-700 p-2 w-full"/>
                <input type="password" 
                       placeholder="Password"
                       className="my-2 block bg-gray-700 p-2 w-full"/>
                <button className="my-4 bg-red-500 rounded-lg w-full p-1">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <button onClick={handleToggler} 
                        className="cursor-pointer bg-transparent border-none text-white"
                        type="button">
                    {isSignIn ? "New to Netflix? Sign up now." : "Already Registered Sign In now."}
                </button>
            </form>
        </div>
    )
}
export default Login