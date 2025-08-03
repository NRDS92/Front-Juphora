import FooterLink from "./UI/FooterLink";
import juphoraLogo from "../assets/JuphoraLogo.png"
import Button from "./UI/Button";

export default function Footer() {
  return (
    <div className='bg-primary-grey py-5 px-10 flex h-[100px] md:h-[170px] justify-between items-center'>
        <div className='flex flex-col text-primary-purple'>
            <img className=" w-[100px] md:w-[200px]" src={juphoraLogo} alt="Logo" />
        </div>
        <div className='flex flex-col text-primary-purple'>
        <FooterLink to="/" >Home</FooterLink>
        <FooterLink to="/about-us" >About Us</FooterLink>
        <FooterLink to="/contact" >Conatct Us</FooterLink>
        </div>
        <div className='flex flex-col text-primary-purple items-center'>
        <h3 className="flex font-bold text-xs md:text-xl gap-3 ">Follow Us</h3>
            <div className="text-2xl">
                <Button>
                    <i className="fa-brands fa-instagram"></i>
                </Button>
                <Button>
                    <i className="fa-brands fa-tiktok"></i>
                </Button>
                
            </div>
        </div>
      
    </div>
  )
}
