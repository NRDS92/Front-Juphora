import AboutItem from "./AboutItem"
import Button from "./Button"
import ProdusctsFrei from "./ProductsFrei"



export default function Carrousel() {
  return (
    <div className=" flex flex-col gap-10 h-[400px] w-[80%]  my-10 md:my-20 pt-5 no-scrollbar bg-primary-grey rounded-4xl  items-center overflow-x-hidden overflow-y-auto">
        <AboutItem
            title="Our Ingridients" 
            text="Bei Juphora Dermocosmetic vertrauen wir auf die Kraft der Natur – verstärkt 
                durch moderne Wissenschaft. Deshalb bestehen all unsere Produkte aus sorgfältig 
                ausgewählten pflanzlichen Inhaltsstoffen, die für ihre hautfreundlichen und 
                dermatologisch wirksamen Eigenschaften bekannt sind. Jeder Bestandteil ist gezielt 
                gewählt, um sichtbare Ergebnisse zu erzielen – ohne die Hautverträglichkeit zu 
                beeinträchtigen.
                Unsere Extrakte stammen aus nachhaltigem Anbau und ihre Wirksamkeit wurde durch unabhängige Labortests bestätigt. Die Rezepturen sind darauf ausgelegt, die natürliche Regeneration der Haut zu fördern, Irritationen zu lindern, tiefenwirksam zu hydratisieren und das Gleichgewicht selbst bei anspruchsvoller Haut (z. B. bei Neurodermitis, Psoriasis oder nach ästhetischen Eingriffen) zu unterstützen.
                Zu unseren Hauptinhaltsstoffen gehören:"

            />

        <AboutItem
            title="WARUM WIR TUN, WAS WIR TUN!" 
            text="Wir, das Team von Naturwerk aus Wissenschaftlern, Ärzten und Experten auf den Gebieten der Phytomedizin und Dermatologie, haben uns jenem Wissen verschworen, welches seit Jahrtausenden über Naturstoffe bekannt und bewährt ist, konsequent und zielgerichtet einzusetzen. 
            Unsere Mission ist es, echte vegane Naturkosmetik und Nahrungsergänzungsmittel zu entwickeln, die der Haut und dem Körper nachhaltig helfen, optimal pflegen und schützen, ohne schädliche Inhaltsstoffe.
            Natur pur. Intelligent und funktional für Ihr Wohl konzipiert. Natürlich ganz natürlich. 
            Naturstoffe, die Wirkung zeigen. Dank der reinen Kraft der Natur."
            >
                <Button buttonType="purple-short" >CHECK ALL PRODUCTS</Button>
        </AboutItem>
        
        
        
    </div>
    
  )
}
