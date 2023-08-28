import Navbar from "../Component/Navbar";
 import Hero from "../Component/Hero"
 import AboutImg from "../Component/img/8548945.jpg"
 import Footer from "../Component/Footer";
 import AboutUS from "../Component/AboutUs.js"
function About()
{
return(
    <>
    <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="About Us"
      btnClass="hide"
/> 
<AboutUS/>
<Footer/>
   </>   
   

);
}
export default About;