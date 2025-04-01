import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    
    const handleSignOut =()=>{
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }
    return(   
        <div className="flex justify-between items-center bg-black h-16 relative">
            <h1 className="text-3xl font-bold text-white     absolute top-5 left-5">{user.displayName}</h1>
            <button onClick={handleSignOut} className="font-bold text-black bg-white rounded-md px-4 py-2 absolute top-5 right-5 hover:bg-gray-200 transition duration-300 ease-in-out">
                SignOut
            </button>
        </div>
    )

}

export default Header;