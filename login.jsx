
import { useState } from "react"
const [userLogin, setUserLogin] = useState("")

export default function Login(){
    setUserLogin("You logged in")
    return(<div>
        <button onClick={Login}>
        {userLogin}
        </button> </div>)
}


