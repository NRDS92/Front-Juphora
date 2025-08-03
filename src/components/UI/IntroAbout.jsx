import lavenderImg from '../../assets/lavender.png'
import Button from './Button'
import aboutUsImg from "../../assets/AboutUsImg.png"

export default function IntroAbout() {
  return (
    <div className='mt-5 md:mt-0 flex justify-center'>
        <img className='absolute w-[45%] left-[-23%]' src={lavenderImg} alt='Lavanda' />
        <div className='flex flex-col md:flex-row pt-20 px-10 md:px-50 justify-center items-center '>
            <div className='flex flex-col gap-3 md:gap-5 justify-center items-center'>
                <h3 className='text-center  md:text-xl'>ÜBER UNS</h3>
                <div>
                    <h2 className='text-3xl md:text-5xl'>Wissenschaft. Natur.</h2>
                    <h2 className='text-2xl md:text-4xl'>Haut - Neu Gedacht.</h2>
                </div>
                <p className='text-justify text-xs md:text-xl w-[320px] '>
                Bei Juphora glauben wir an eine Zukunft, in der Hautpflege botanische Reinheit mit medizinischer Präzision vereint. Erfahren Sie mehr über unsere Mission, unsere dermatologischen Wurzeln und wie wir jedes Produkt mit Sorgfalt und Ziel entwickeln.
                </p>
                <Button buttonType="purple-short">meah erfaren</Button>
            </div>
            <img src={aboutUsImg} alt='About Us'/>
        </div>
    </div>
    
  )
}
