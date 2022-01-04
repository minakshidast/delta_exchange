import { loginUser } from "../Redux/Auth/action"

 
function Login(){
const handleLogin =(e)=> {
    e.preventDefault()
   dispatch(loginUser({username, password}))
}
    return(
        <div>
            <input type="text"/>
            <input type="password"/>
            <button onClick={handleLogin}>Sign In</button>
        </div>
    )
}
export {Login}