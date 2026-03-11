import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router";

export default function Protect(){
    // (1) jab tak backend par request ja rha h to tab tak hum loading dekhana h 
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();
     
    // (2) hume jis paga par jana ye reach karwata h 
    const location = useLocation()

    async function fetchProfile(){
        try {
            let response = await fetch(import.meta.env.VITE_BACKEND_HOST+"/user/profile", {credentials: "include"});
            if(!response.ok) throw new Error("Unauthorized!");
            
            // if(location.pathname == "/login" || location.pathname=="/signup")  navigate("/account")
            setLoading(false);
        } catch (error) {
            // (2)
            navigate("/login")
        }
    }

    useEffect(()=>{
        fetchProfile()
    }, [])
    return(
       <>
       {/* (1) */}
        {loading && <p className="p-12 text-center">Loading...</p>}
        {/* sab kuch thik h tab yr hume us paga par le jata h humne yaha request kiya h  */}
        {!loading && <Outlet />}
       </>
    )
}