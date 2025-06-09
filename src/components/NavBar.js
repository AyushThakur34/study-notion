import { NavLink } from "react-router-dom";

const NavBar = ()=> {
    return (
        <div className="flex justify-between items-baseline text-white">
            <div>   
                <NavLink to="/">
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                            <p className="text-[#000812] text-3xl font-bold pb-1">S</p>
                        </div>
                        <h3 className="text-2xl font-semibold">StudyNotion</h3>
                    </div>
                </NavLink>
            </div>

            <div className="flex gap-4 ">
                <div>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/about">About</NavLink>
                </div>
                <div>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="bg-[#151d25] p-2 rounded-md">
                    <NavLink to="/login">
                        <button>Login</button>
                    </NavLink>
                </div>

                <div className="bg-[#151d25] p-2 rounded-md">
                    <NavLink to="/signup">
                        <button>Sign up</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar;