import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router";

export default function Protect(){
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const location = useLocation()
    
    async function fetchProfile(){
        try {
            let response = await fetch(import.meta.env.VITE_BACKEND_HOST+"/user/profile", {credentials: "include"});
            if(response.ok) throw new Error("Logged In");
            
            // if(location.pathname == "/login" || location.pathname=="/signup")  navigate("/account")
            setLoading(false);
        } catch (error) {
            navigate("/account")
        }
    }

    useEffect(()=>{
        fetchProfile()
    }, [])
    return(
       <>
        {loading && <p className="p-12 text-center">Loading...</p>}
        {!loading && <Outlet />}
       </>
    )
}