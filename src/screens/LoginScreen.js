import React,{useState} from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const[signIn,setSignIn]=useState(false);

    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img 
                    className="loginscreen_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="logo"/>
                    <button onClick={()=> setSignIn(true)} className="button_signIn">Sign In</button>
                    <div className="loginscreen_gradient"/>
            </div>
            <div className="loginscreen_body">
                {signIn? (
                    <SignUpScreen/>
                ):(
                <>
                    <h1>Unlimited Films,TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3> Ready to watch? Enter email to create and restart you membership.</h3>
                    <div className="loginscreen_input">
                        <form>
                            <input type="email"
                                placeholder="Email address"/>
                            <button onClick={()=> setSignIn(true)} className="loginscreen_getstarted">Get Started</button>
                        </form>
                    </div>
                </>)}
            </div>

        </div>
    )
}

export default LoginScreen
