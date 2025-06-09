import { useState } from "react";
import SignInWithGoogle from "./SignInWithGoogle";
import LandingPageImage from "./LandingPageImage";
import LandingPageHeading from "./LandingPageHeading";

const SignUp = ()=> {

    const [user, setUser] = useState("student");
    const mainHeading = "Join the millions learning to code with StudyNotion for free";

    const handleUserState = ()=> {
        if(user === "student") setUser("instructor");
        else setUser("student");
    }
    
    return (
        <div className="flex mt-[4rem] w-full justify-between">
            <div className="w-[35%]">
                <LandingPageHeading heading={mainHeading} size={"2xl"}/>

                {/* user */}
                <div>
                    
                </div>

                <SignInWithGoogle/>
            </div>

            <LandingPageImage/>
        </div>
    )
}

export default SignUp;