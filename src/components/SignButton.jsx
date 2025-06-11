import { useNavigate } from "react-router-dom";

const SignButton = (props)=> {
    let heading = props.heading;
    let formData = props.formData;
    const navigate = useNavigate();
    let formRef = props.formRef;

    const submitButtonHandler = (event) => {
        console.log(formData);
        
        if (formRef.current && formRef.current.reportValidity()) {
            if (heading === "Sign In") {
                navigate("/dashboard", { state: { loggedIn: true } });
            } else if (heading === "Sign Up") {
                navigate("/login", { state: { accountCreated: true } });
      }
    }
    }

    return (
        <div>
            <button onClick={submitButtonHandler} className="bg-[#ffd511] rounded-md mt-8 w-full p-1 font-semibold">{heading}</button>
        </div>
    )
}

export default SignButton;