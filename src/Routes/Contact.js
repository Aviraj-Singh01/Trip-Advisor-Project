import Navbar from "../Component/Navbar";
 import Hero from "../Component/Hero";
 import AboutImg from "../Component/img/rajesthan.jpg"
 import Footer from "../Component/Footer";
import Contactform from "../Component/Contactform";

function Contact ()
{
return(
    <>
     <Navbar/>
     <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="Contact"
    btnClass="hide"
    />
    <Contactform/>
    <Footer/>
    </>
   
)
}
export default Contact;