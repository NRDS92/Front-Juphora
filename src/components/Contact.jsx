import Input from "./UI/Input"
import Button from "../components/UI/Button"

export default function Contact() {
  return (
    <div className='mt-10 mb-20 flex  justify-center items-center '>
      <div className=" flex flex-col md:flex-row justify-end items-center relative gap-5 md:gap-0">
        <div className='w-[400px] md:w-[800px] h-[470px] bg-secundary-purple rounded-2xl p-4 md:p-10 flex flex-col justify-center items-center md:items-start relative'>
          <div className=" flex flex-col gap-2 w-[70%] text-center items-center">
            <h2 className="text-3xl pb-5 text-white font-bold uppercase ">Kontact uns</h2>
              <div className="flex gap-2 w-full justify-between">
                <input className="bg-white rounded-2xl p-2 w-full " placeholder="Name" type="text" required />
                <input className="bg-white rounded-2xl p-2 w-full" placeholder="Vorname" type="text" required />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input className="bg-white rounded-2xl p-2  " type="email" placeholder="Email" required/>
                <textarea className="bg-white h-[100px]  rounded-2xl p-5" placeholder="Wie Konen wir helfen?" ></textarea>
              </div>
              <p className="mt-5">
                <Button buttonType="purple-long">SEND</Button>
              </p>
          </div>
        </div>

        <div className="  md:absolute bg-primary-green h-[300px] w-[350px] rounded-2xl p-5 -right-30   ">
          <div className="flex flex-col gap-5">
            <p>
                Kontaktieren Sie uns jederzeit gerne, wir stehen Ihnen für alle Fragen zur Verfügung.
            </p>
            <div>
              <p>info@juphora.com</p>
              <p>+49 1202354864</p>
            </div>
          </div>
          <div className="mt-10">
            <p>Schauen Sie sich unsere sozialen Netzwerke an</p>
            <div className="text-2xl text-center">
              <Button>
                  <i className="fa-brands fa-instagram"></i>
              </Button>
              <Button>
                  <i className="fa-brands fa-tiktok"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
