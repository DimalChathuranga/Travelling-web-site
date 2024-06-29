import Navbar from "../components/navbar/navbar"
import Hero from "../components/Hero/hero";
import Homeimg from "../assets/Solo-Travel-in-Nature-acbfea52bfaf.jpg"
import Destination from "../components/destination"
import Trip from "../components/trip"
import Footer from "../components/footer"
function Home(){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroimage={Homeimg}
                title="Your Journey your story"
                text="Choose your favourite destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
            
        </>
    )
}

export default Home;