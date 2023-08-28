import Navbar from "../Component/Navbar";
 import Hero from "../Component/Hero";
import Destination from "../Component/Destination";
import Trip from "../Component/Trip";
import Footer from "../Component/Footer";
function Home ()
{
return(
    <>
    
     <Navbar/>
      <Hero 
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
      title="Your Journey Your Story"
      text="Chosse your favourite destination"
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