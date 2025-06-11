const SignButton = (props)=> {
    let heading = props.heading;
    let formData = props.formData;

    const submitButtonHandler = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <button onClick={submitButtonHandler} className="bg-[#ffd511] rounded-md mt-8 w-full p-1 font-semibold">{heading}</button>
        </div>
    )
}

export default SignButton;