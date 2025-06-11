import Google from "../assets/logo-google.png";

const SignInWithGoogle = ()=> {
    const signinGoogleHandler = (event)=> {
        event.preventDefault();
    }

    return (
        <div>
            <button className="w-full border-2 border-[#172029] p-1 text-white text-sm font-semibold flex items-center justify-center gap-2"
            onClick={signinGoogleHandler}>
                <img src={Google} className="w-5 h-auto"></img>
                <p>Sign in with Google</p>
            </button>
        </div>
    )
}

export default SignInWithGoogle;