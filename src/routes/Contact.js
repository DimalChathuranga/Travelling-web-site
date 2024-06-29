import Navbar from "../components/navbar/navbar"
import Hero from "../components/Hero/hero";
import Contactimg from "../assets/191029145211-sri-lanka-tourism-images-viceroy-train-rolling-tea-estates-01-1.jpg"
import Footer from "../components/footer"
import Contactform from "../components/contactform"

function Contact(){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroimage={Contactimg}
                title="Contact"
               
            />
            <Contactform/>
             <Footer/>
        </>
    )
}

export default Contact;