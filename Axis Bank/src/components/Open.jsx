import React from 'react'
import "./Open.css"


const Open = () => {
    return (
        <section className="form">
        <div className="bo">
        <div className="border">
        <form action="backend.php">
            <div className="account">Account Opening</div>
            <div className="customer">
                <label for="name">Customer Name</label>
                <input type="text" name="myname" id="name"></input>
            </div>
            <div className="address">
                Address : <textarea name="myText" cols="30" rows="2"></textarea>
            </div>
            <div className="city">
                City : <input type="text"></input>
            </div>
            <div className="but">
            <span className="submit"><input type="submit" value="Submit Now"></input></span>
            <span className="reset"><input type="reset"></input></span>
            </div>
        </form>
        </div>
        </div>
    </section>
    )
}

export default Open
