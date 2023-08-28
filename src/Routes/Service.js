import Navbar from "../Component/Navbar";
 import Hero from "../Component/Hero"
 import AboutImg from "../Component/img/gujrat.jpg"
 import Footer from "../Component/Footer";
 import Trip from "../Component/Trip.js"
function Service ()
{
return(
   <>
   <Navbar/>
 <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="Service"
    btnClass="hide"
    />
    <Trip/>
   <Footer/>
   </>
    
)
}
export default Service;