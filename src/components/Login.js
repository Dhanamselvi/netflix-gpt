import Home from "./Home"
import {useRef, useState} from "react"
import {checkValidaData} from "../utils/validate"
import { updateProfile,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";   

const Login = () =>{
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email =  useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () =>{
        setIsSignIn(!isSignIn)
    }

    const handleButtonClick = () =>{
        // validate the  form data
        const message = checkValidaData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        
        // Sign In or Sign Up
        
        if(!isSignIn){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    const {uid,email,displayName} = auth.currentUser;
                    dispatch(
                        addUser({
                            uid:uid,
                            email:email,
                            displayName:displayName
                        })
                    )
                    navigate("/browse")
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
                  
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " : " + errorMessage);
            });
        }else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " : " + errorMessage)
            });
        }
    }

    return(
        <div>
            <Home/>
            <img src="../assets/BG_LOGO.jpg"
                 alt="BackgroundImage"
            />
            <form onSubmit={(e)=>e.preventDefault()}
                  className="absolute 
                                top-1/2 
                                left-1/2 
                                transform -translate-x-1/2 -translate-y-1/2 
                                bg-black 
                                bg-opacity-60 
                                p-5
                                rounded-lg
                                text-white">
                <h1 className="text-3xl font-bold mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && (
                    <input type="text" 
                           placeholder="Full Name"
                           className="my-2 block bg-gray-700 p-2 w-full"
                           ref={name}/>
                    )
                }
                <input ref={email}
                        type="email" 
                        placeholder="Email"
                        className="my-2 block bg-gray-700 p-2 w-full"/>
                <input ref={password}
                        type="password" 
                        placeholder="Password"
                        className="my-2 block bg-gray-700 p-2 w-full"/>
                <p>{errorMessage}</p>
                <button className="my-4 bg-red-500 rounded-lg w-full p-1"
                        onClick={handleButtonClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <button onClick={toggleSignInForm} 
                        className="cursor-pointer bg-transparent border-none text-white"
                        type="button">
                    {isSignIn ? "New to Netflix? Sign up now." : "Already Registered Sign In now."}
                </button>
            </form>
        </div>
    )

}
export default Login