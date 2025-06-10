import { useState } from "react";
import SignInWithGoogle from "./SignInWithGoogle";
import LandingPageImage from "./LandingPageImage";
import LandingPageHeading from "./LandingPageHeading";

const SignUp = ()=> {

    const [user, setUser] = useState("student");
    const mainHeading = "Join the millions learning to code with StudyNotion for free";

    const handleUserState = (event)=> {
        event.preventDefault();
        if(event.target.value != user) {
                if(user === "student") setUser("instructor");
                else setUser("student");
        }
    }
    
    return (
        <div className="flex mt-[4rem] w-full justify-between">
            <div className="w-[35%]">
                <LandingPageHeading heading={mainHeading} size={"2xl"}/>

                {/* user */}
                <div className="text-white gap-x-1 flex mt-4 font-semibold
                rounded-xl w-fit p-1">
                    <button className={`rounded-xl py-1 px-4 ${user === "student" ? `bg-[#151d25]` : `bg-inherit`}`}
                     value={"student"} onClick={handleUserState}>Student</button>
                    <button className={`rounded-xl py-1 px-4 ${user === "instructor" ? `bg-[#151d25]` : `bg-inherit`}`}
                     value={"instructor"} onClick={handleUserState}>Instructor</button>
                </div>

                <SignInWithGoogle/>
            </div>

            <LandingPageImage/>
        </div>
    )
}

export default SignUp;