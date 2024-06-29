import Navbar from "../components/navbar/navbar"
import Hero from "../components/Hero/hero";
import Serviceimg from "../assets/iStock-1019326950.jpg"
import Footer from "../components/footer"

function Service(){
    return(
        <>
             <Navbar/>
            <Hero
                cName="hero-mid"
                heroimage={Serviceimg}
                title="Service"
               
            />
             <Footer/>
        </>
    )
}

export default Service;