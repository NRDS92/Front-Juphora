import lavenderImg from "../assets/lavender.png"
import lavenderImg2 from "../assets/lavender2.png"
import Carrousel from "./UI/Carrousel"
import ProductsFrei from "./UI/ProductsFrei"


export default function AboutUs() {
  return (
    <div className="flex flex-col">
        <img className="absolute w-[40%] left-[-18%]" src={lavenderImg} alt='lavender' />
        <img className=" absolute right-0 w-[12%] " src={lavenderImg2} alt='lavender' />
        <div className=" flex flex-col items-center mx-1 md:mx-4">
            <h2 className="text-2xl font-bold">ÜBER UNS</h2>
            <div className="flex flex-col text-justify my-5 gap-5 px-10 md:px-40 py-3 ">
                <h2 className="text-sm md:text-xl text-center">JUPHORA weil Natur wirkt</h2>
                <p className="text-sm md:text-xl ">Beginne mit JUPHORA und dein Körper macht den Rest.
                    JUPHORA ist Kosmetik, die nachweislich einen positiven Effekt 
                    auf das Wohlbefinden der Haut hat und die deshalb wesentlich 
                    mehr kann als „nur“ pflegen. Genau hierfür haben wir den 
                    Begriff FUNKTIONALE KOSMETIK geprägt. 
                    Eine Kosmetik, die nicht vertuscht und verdeckt, sondern 
                    die Selbstheilungskräfte über die Körperoberfläche 
                    wirkungsvoll anregt. Um diesen Effekt zu erzielen, 
                    stimuliert JUPHORA gezielt körpereigene Prozesse, 
                    insbesondere biologische Regenerationsprozesse der 
                    Haut – und zwar auf vollkommen natürliche Weise.
                </p>
            </div>
            <div className="flex flex-col text-center  gap-5 px-20 md:px-40  ">
                <h2 className="text-xl ">UNSERE PHILOSOPHIE</h2>
                <p className="text-sm md:text-xl ">
                „Als größtes menschliches Organ verdient die Haut größte 
                Aufmerksamkeit. Also führe deiner Haut nur das zu, 
                was du auch bedenkenlos essen würdest.“
                Professor Hans Rausch
                </p>
                <p className="text-sm md:text-xl ">
                    Professor Hans Rausch; Visiting Professor University Nan Chang, China.
                </p>                
            </div>
            <Carrousel />
            <ProductsFrei />
        </div>
    </div>
  )
}
