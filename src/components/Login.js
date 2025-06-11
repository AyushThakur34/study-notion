import { useState } from "react";
import SignInWithGoogle from "./SignInWithGoogle";
import LandingPageImage from "./LandingPageImage";
import LandingPageHeading from "./LandingPageHeading";
import Password from "./Password";
import SignButton from "./SignButton";

const Login = ()=> {
    const [isVisible, setIsVisible] = useState(false);
    
    const forgotPassHandler = (event)=> {
        event.preventDefault();
    }

    const mainHeading = "Welcome Back";

    return (
        <div className="flex mt-[4rem] w-full justify-between">
            <div className="w-[35%]">
                <LandingPageHeading heading={mainHeading} size="4xl"/>

                {/* form */}
                <form className="mt-8">
                    <div className="text-white">
                        <p className="text-sm">Email Address</p>
                        <input type="email" placeholder="Enter email address" required className="bg-[#151d25] rounded-md p-2 m-1 w-full"></input>
                    </div>

                    <div className="flex flex-col">
                        <Password heading={"Password"} value={"Enter Password"}/>
                        <button className="text-[#4092ab] text-xs place-self-end" onClick={forgotPassHandler}>Forgot Password</button>
                    </div>

                    <SignButton heading={"Sign In"}/>
                </form>

                <div className="mt-8">
                    <SignInWithGoogle/>
                </div>
            </div>

            <LandingPageImage/>
        </div>
    )
}

export default Login;