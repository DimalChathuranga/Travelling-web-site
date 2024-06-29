import sigiriImg1 from "../assets/Sigiriya.jpg"
import sigiriImg2 from "../assets/DSC67702.jpg"
import img3 from "../assets/01.jpg"
import img4 from "../assets/LS_BLOG8_C1_800x520.jpg"
import "./Destination.css"
import Destinationdata from"./destinationdata"

const destination = () =>
{
    return(
            <div className="destination">
                <h1>Popular Destination</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame.</p>
                <Destinationdata
                className="first-des"
                heading="sigiriya"
                text="CSigiriya or Sinhagiri ( Sinha Gala Sinhala: Sigiriya , Tamil: Sigiriya/Singagiri) is an ancient stone fort located in North Matale District,
                near the city of Dambulla in the Central Province of Sri Lanka . 
                It is a site of historical and archaeological importance dominated by a massive rock column approximately 180 m (590 ft) high.
                According to the Kulavamsaya , an ancient Sri Lankan chronicle , the area was once a vast forest, 
                later turned into a mountain by storms and landslides,
                and was chosen by King Kasyapa (477-495 AD) for his new capital. 
                He built his palace on top of this rock and decorated its sides with colorful murals . 
                On a small plateau about half way up 
                this rock he built a gate in the form of a huge lion. The name of the place is derived from this structure; Sinhagiri , Lion Rock ( same derivation as Singapore's Sanskrit name Sinhapura )."
                img1={sigiriImg1}
                img2={sigiriImg2}
                
                />
                <Destinationdata
                className="first-des-reverse"
                heading="Anuradhapura"
                text="Anuradhapura (Sinhala: අනුරාධපුරය, romanized: Anurādhapuraya; Tamil: அனுராதபுரம், romanized: Aṉurātapuram) is a major city located in north central plain of Sri Lanka. It is the capital city of North Central Province and the capital of Anuradhapura District. The city lies 205 kilometers (127 mi) north of the current capital of Colombo in the North Central Province, on the banks of the historic Malwathu Oya. The city is now a World Heritage Site famous for its well-preserved ruins of the ancient Sinhalese civilization."
                img1={img3}
                img2={img4}
                
                />
            </div>
            
    );
}

export default destination;