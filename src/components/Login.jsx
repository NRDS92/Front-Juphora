import { useState } from "react"
import loginImg from "../assets/loginImg.png"
import Button from "./UI/Button"

export default function Login() {
    const [login, setLogin] = useState(true)

  return (
    <div className={`${login ? " bg-secundary-purple ": " bg-primary-green "} mx-5 px-5 md:mx-30 my-10 p-10 flex gap-10 rounded-2xl justify-center text-white`}>
      <img className=" hidden md:flex w-[28%] -top-4 " src={loginImg} alt=""/>
      <div className="flex flex-col items-center w-[60%] text-center gap-2">
        {login ?
            <h3 className="text-2xl font-bold">Create Account</h3>:
            <h3 className="text-2xl font-bold">Login</h3>
            }
        <form className="flex flex-col justify-center items-center gap-5">
        <Button onClick={()=>setLogin(!login)}>
            <div className="flex items-center">
                <i className="fa-regular fa-hand-point-up rotate-45 text-xl"></i>
                {login ?
                    <p>Have you already an Account?</p>:
                    <p>Create Account</p>
                }
            </div>
        </Button>
            <div className="flex flex-col gap-2  text-primary-purple ">
                {login ?
                    <div className="flex flex-col md:flex-row gap-2">
                        <input className="bg-white rounded-2xl p-2" placeholder="Name" type="text" required />
                        <input className="bg-white rounded-2xl p-2" placeholder="Vorname" type="text" required />
                    </div>:
                    null
                }
                <div className="flex flex-col gap-2">
                    <input className="bg-white rounded-2xl p-2 " type="email" placeholder="Email" required/>
                    <input className="bg-white rounded-2xl p-2 " type="" placeholder="Password" required/>
                </div>
            </div>
            {
                login?
                <Button buttonType="purple-long">Create Account</Button>:
                <Button buttonType="purple-long">Login</Button>
            }

            <div className="flex w-[100%] items-center justify-center">
                <div className="border-2 border-white w-[20%] h-0"></div>
                <p className="mx-2"> or use one of these options </p>
                <div className="border-2 border-white w-[20%] h-0"></div>
                
            </div>
            <div className="flex justify-center gap-10 ">
                <button className="px-10 py-3 border-2 border-white rounded-2xl">
                <i className="fa-brands fa-chrome"></i>
                Google</button>
                <button className="px-10 py-3 border-2 border-white rounded-2xl">
                <i className="fa-brands fa-apple"></i>
                Apple</button>
            </div>
        </form>
        
      </div>
    </div>
  )
}
