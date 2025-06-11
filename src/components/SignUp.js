import { useRef, useState } from "react";
import SignInWithGoogle from "./SignInWithGoogle";
import LandingPageImage from "./LandingPageImage";
import LandingPageHeading from "./LandingPageHeading";
import Password from "./Password";
import SignButton from "./SignButton";

const SignUp = ()=> {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        currUser: "student",
        firstName: "",
        lastName: "",
        email: "",
        createPassword: "",
        confirmPassword: ""
    });

    const [user, setUser] = useState("student");
    const mainHeading = "Join the millions learning to code with StudyNotion for free";

    const changeHandler = (event)=> {
        const {name, value} = event.target;
        setFormData(prevFormData =>{
            return {
                ...prevFormData,
                [name] : value
            }
        })
        console.log(value);
    };

    const handleUserState = (event)=> {
        event.preventDefault();
        if(event.target.value != user) {
            if(user === "student") setUser("instructor");
            else setUser("student");
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [event.target.name] : event.target.value
                }
            })
        }
    }
    
    return (
        <div className="flex mt-[4rem] w-full justify-between">
            <div className="w-[35%]">
                <LandingPageHeading heading={mainHeading} size={"2xl"}/>

                <form ref={formRef}>
                    {/* user */}
                    <div className="text-white gap-x-1 flex mt-4 font-semibold
                    rounded-xl w-fit p-1 bg-[#151d25]">
                        <button className={`rounded-xl py-1 px-4 ${user === "student" ? `bg-[#000812]` : `bg-inherit`}`}
                        value={"student"} onClick={handleUserState} onChange={changeHandler} name="currUser">Student</button>
                        <button className={`rounded-xl py-1 px-4 ${user === "instructor" ? `bg-[#000812]` : `bg-inherit`}`}
                        value={"instructor"} name="currUser" onClick={handleUserState}>Instructor</button>
                    </div>

                    
                    <div className="flex gap-x-4 text-white mt-6">
                        <div>
                            <p className="text-white text-sm">First Name</p>
                            <input onChange={changeHandler} name="firstName" type="text" required className="bg-[#151d25] rounded-md p-2 m-1 w-full" placeholder="Enter First Name"></input>
                        </div>

                        <div>
                            <p className="text-white text-sm">Last Name</p>
                            <input onChange={changeHandler} name="lastName" type="text" required className="bg-[#151d25] rounded-md p-2 m-1 w-full" placeholder="Enter Second Name"></input>
                        </div>
                    </div>

                    <div className="text-white mt-2">
                        <p className="text-sm">Email Address</p>
                        <input onChange={changeHandler} name="email" type="email" placeholder="Enter email address" required className="bg-[#151d25] rounded-md p-2 m-1 w-full"></input>
                    </div>

                    <div className="flex gap-x-4">
                        <Password heading={"Create Password"} value={"Enter Password"} name={"createPassword"} changeHandler={changeHandler}/>
                        <Password heading={"Confirm Password"} value={"Enter Password"} name={"confirmPassword"} changeHandler={changeHandler}/>
                    </div>
                </form>

                <SignButton heading={"Sign Up"} formData={formData} setFormData={setFormData} formRef={formRef}/>;
                <SignInWithGoogle/>
            </div>

            <LandingPageImage/>
        </div>
    )
}

export default SignUp;