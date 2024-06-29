import Navbar from "../components/navbar/navbar"
import Hero from "../components/Hero/hero";
import Aboutimg from "../assets/Is-Sri-Lanka-worth-visiting.jpg"
import Footer from "../components/footer"
import Aboutus from "../components/Aboutus";

function About(){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroimage={Aboutimg}
                title="About"
               
            />
            <Aboutus/>
             <Footer/>
        </>
    )
}

export default About;