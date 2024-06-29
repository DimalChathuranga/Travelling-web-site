import "./tripstyle.css"
import Tripdata from "./tripdata"
import Trip1 from "../assets/jetvanaramaya-stupa-anuradhapura.jpg"
import Trip2 from "../assets/polonnaruwa-800x750.jpg"
import Trip3 from "../assets/GettyImages-520870128-1c1f8305c37949ab967d13de38ddf9eb.jpg"

function trip(){
    return(
        <div className="trip">
            <h1>Recent trips</h1>
            <p>You can discover unique destination using google map.</p>
            <div className="tripcard">
                    <Tripdata
                    image = {Trip1}
                    heading="Trip in Anuradapura"
                    text = "The sacred places are known as Jaya Sri Maha Bodhiya, Ruwanwelisaya, Thuparamaya, Lovamahapaya, Abhayagiri Dagaba, Jetavanarama, Mirisaveti Stupa and Lankarama. They are situated in Anuradhapura, the capital of the ancient Anuradhapura Kingdom."
                    />
                    <Tripdata
                    image = {Trip2}
                    heading="Trip in Polonnaruwa"
                    text = "Polonnaruwa was the second capital of Sri Lanka after the destruction of Anuradhapura in 993. It comprises, besides the Brahmanic monuments built by the Cholas, the monumental ruins of the fabulous garden-city created by Parakramabahu I in the 12th century."
                    />
                     <Tripdata
                    image = {Trip3}
                    heading="Trip in Galle"
                    text = "Galle was known as Gimhathiththa[1] before the arrival of the Portuguese in the 16th century, when it was the main port on the island. Ibn Batuta, a Moroccan Berber Muslim traveller in the 14th century, referred to it as Qali.[2] Galle reached the height of its development in the 18th century, during the Dutch colonial period. Galle is the best example of a fortified city built by the Portuguese in South and Southeast Asia, showing the interaction between Portuguese architectural styles and native traditions. The city was extensively fortified by the Dutch during the 17th century from 1649 onwards. The Galle fort is a World Heritage Site and is the largest remaining fortress in Asia built by European occupiers."
                    />
            </div>
            
        </div>
    )
}

export default trip;