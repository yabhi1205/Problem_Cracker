import React from 'react'
import {auth,provider} from "../config";
import {signInWithPopup} from "firebase/auth";

const Main = () => {

    
  const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
        console.log(data)
    })
}

  return (
        <>
            <div className=" main_home">
                <div className="row ">
                    <div className="col">
                        <img src={require("../images/home.png")} className="home_img" alt="" />
                    </div>
                    <div className="col">
                        <div className="shape_home"></div>
                        <button onClick={handleClick} className="btn "> <i class="fa-brands fa-google"></i><span>Google signin</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main