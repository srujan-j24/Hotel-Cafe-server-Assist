import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { logout } from "@/store/authSlice";
import authService from "@/appwrite/auth";
import { useNavigate } from "react-router-dom";
import { ExitIcon } from "@radix-ui/react-icons";
function LogoutButton() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = async ()=>{
        try {
            await authService.logout();
            dispatch(logout())
            navigate("/")
        } catch (error) {
            alert("logout failed");
        }
    }
    return (
        <Button onClick={handleClick} size="icon" variant="transparent">
            <ExitIcon className="h-[1.2rem] w-[1.2rem]"></ExitIcon>
        </Button>
    );
}

export default LogoutButton;