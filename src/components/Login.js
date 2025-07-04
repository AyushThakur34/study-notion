    import { useEffect, useRef, useState } from "react";
    import SignInWithGoogle from "./SignInWithGoogle";
    import LandingPageImage from "./LandingPageImage";
    import LandingPageHeading from "./LandingPageHeading";
    import Password from "./Password";
    import SignButton from "./SignButton";
    import { useLocation, useNavigate } from "react-router-dom";
    import { toast } from "react-toastify";


    const Login = ()=> {
        const location = useLocation();
        const navigate = useNavigate();
        useEffect(() => {
        if (location.state?.accountCreated) {
            toast.success("Account Created!");
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location]);

        const formRef = useRef();

        const [formData, setFormData] = useState({
            email: "",
            password: ""
        });

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

        const forgotPassHandler = (event)=> {
            event.preventDefault();
        }

        const mainHeading = "Welcome Back";

        return (
            <div className="flex mt-[4rem] w-full justify-between">
                <div className="w-[35%]">
                    <LandingPageHeading heading={mainHeading} size="4xl"/>

                    {/* form */}
                    <form className="mt-8" ref={formRef}>
                        <div className="text-white">
                            <p className="text-sm">Email Address</p>
                            <input name="email" type="email" onChange={changeHandler} placeholder="Enter email address" required className="bg-[#151d25] rounded-md p-2 m-1 w-full"></input>
                        </div>

                        <div className="flex flex-col">
                            <Password heading={"Password"} value={"Enter Password"} setFormData={setFormData} name={"password"} changeHandler={changeHandler}/>
                            <button className="text-[#4092ab] text-xs place-self-end" onClick={forgotPassHandler}>Forgot Password</button>
                        </div>

                        <SignButton heading={"Sign In"} formData={formData} formRef={formRef}/>
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