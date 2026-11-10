
import { useState } from "react"

const [userLogout, setUserLogout] = useState("")

export default function Logout(){
    setUserLogout("You logged out in")
    return(<div>{userLogout} </div>)
}