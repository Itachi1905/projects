import React from 'react'
import "./Login.css"


const Login = () => {
    return (
        <section className="form_">
        <div className="bo_">
        <div className="border_">
        <form action="backend.php">
            <div class="log_in">Log In</div>
            <div class="customer">
                <label for="name"> UserName</label>
                <input type="text" name="myname" id="name"></input>
            </div>
            <div class="city">
                Password : <input type="password"></input>
            </div>
            <div class="but">
            <span class="submit"><input type="submit" value="Login Now"></input></span>
            </div>
        </form>
        </div>
        </div>
    </section>
    )
}

export default Login
