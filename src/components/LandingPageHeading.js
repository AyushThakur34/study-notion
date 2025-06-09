const LandingPageImage = (props)=> {
    const mainHeading = props.heading;
    const fontSize = props.size;

    return (
        <div>
            <h2 className={`text-white font-bold text-${fontSize}`}>{mainHeading}</h2>
            <p className="text-white mt-4">Build Skills for today, tomorrow and beyond.</p>
            <p className="text-[#4092ab] italic">Education to future proof your carrier</p>
        </div>
    );
}

export default LandingPageImage;