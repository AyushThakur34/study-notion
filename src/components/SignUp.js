import { useState } from "react";
import SignInWithGoogle from "./SignInWithGoogle";
import LandingPageImage from "./LandingPageImage";
import LandingPageHeading from "./LandingPageHeading";
import Password from "./Password";
import SignButton from "./SignButton";

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

                <form>
                    {/* user */}
                    <div className="text-white gap-x-1 flex mt-4 font-semibold
                    rounded-xl w-fit p-1 bg-[#151d25]">
                        <button className={`rounded-xl py-1 px-4 ${user === "student" ? `bg-[#000812]` : `bg-inherit`}`}
                        value={"student"} onClick={handleUserState}>Student</button>
                        <button className={`rounded-xl py-1 px-4 ${user === "instructor" ? `bg-[#000812]` : `bg-inherit`}`}
                        value={"instructor"} onClick={handleUserState}>Instructor</button>
                    </div>

                    
                    <div className="flex gap-x-4 text-white mt-6">
                        <div>
                            <p className="text-white text-sm">First Name</p>
                            <input type="text" required className="bg-[#151d25] rounded-md p-2 m-1 w-full"></input>
                        </div>

                        <div>
                            <p className="text-white text-sm">Last Name</p>
                            <input type="text" required className="bg-[#151d25] rounded-md p-2 m-1 w-full"></input>
                        </div>
                    </div>

                    <div className="text-white mt-2">
                        <p className="text-sm">Email Address</p>
                        <input type="email" placeholder="Enter email address" required className="bg-[#151d25] rounded-md p-2 m-1 w-full"></input>
                    </div>

                    <div className="flex gap-x-4">
                        <Password heading={"Create Password"} value={"Enter Password"}/>
                        <Password heading={"Confirm Password"} value={"Enter Password"}/>
                    </div>
                </form>

                <SignButton heading={"Sign Up"}/>;
                <SignInWithGoogle/>
            </div>

            <LandingPageImage/>
        </div>
    )
}

export default SignUp;