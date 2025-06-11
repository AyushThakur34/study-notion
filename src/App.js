import { Route, Routes, NavLink } from "react-router-dom";
import MainHeader from "./components/MainHeader.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Login from "./components/Login.js";
import PageNotFound from "./components/PageNotFound.js";
import SignUp from "./components/SignUp.js";  
import Contact from "./components/Contact.js";
import Dashboard from "./components/Dashboard.jsx";
import { ToastContainer } from "react-toastify";

    const App = ()=> {
    return (
      <div className="bg-[#000812] w-screen h-screen relative overflow-auto">
        <div className="w-8/12 mx-auto pt-2 max-w-[1080px]">
          <Routes>
            <Route path="/" element={<MainHeader/>}>
              <Route index element={<Home/>} />
              <Route path="about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<SignUp/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
            <ToastContainer/>
      </div>
    );
  }

  export default App;
