import "../Component/Trip.css"
import TripData from "./TripData";
import Trip1 from "../Component/img/depositphotos_65494315-stock-photo-city-palace-in-jaipur.jpg"
import Trip2 from "../Component/img/jaipur.jpg"
import Trip3 from "../Component/img/rajesthan.jpg"
 function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations
                using Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading ="Trip in Jaipur"
                text="Nahargarh Fort , Jaipur
                Nahargarh Fort stands on the edge of 
                the Aravalli Hills, overlooking the city of 
                Jaipur in the Indian state of Rajasthan. Along
                 with Amer Fort and Jaigarh Fort, Nahargarh once 
                 formed a strong defence ring for the city. The fort
                  was originally named Sudershangarh, but it became 
                  known as Nahargarh, which means 'abode of tigers'. 
                  The popular belief is that Nahar here stands for 
                  Nahar Singh Bhomia,[1] whose spirit haunted the 
                  place and obstructed construction of the fort"
                />

               <TripData
                image={Trip2}
                heading ="Trip in Udaipur"
                text="Nahargarh Fort , Jaipur
                Nahargarh Fort stands on the edge of 
                the Aravalli Hills, overlooking the city of 
                Jaipur in the Indian state of Rajasthan. Along
                 with Amer Fort and Jaigarh Fort, Nahargarh once 
                 formed a strong defence ring for the city. The fort
                  was originally named Sudershangarh, but it became 
                  known as Nahargarh, which means 'abode of tigers'. 
                  The popular belief is that Nahar here stands for 
                  Nahar Singh Bhomia,[1] whose spirit haunted the 
                  place and obstructed construction of the fort"
                />

                <TripData
                image={Trip3}
                heading ="Trip in Jaisalmer"
                text="Nahargarh Fort , Jaipur
                Nahargarh Fort stands on the edge of 
                the Aravalli Hills, overlooking the city of 
                Jaipur in the Indian state of Rajasthan. Along
                 with Amer Fort and Jaigarh Fort, Nahargarh once 
                 formed a strong defence ring for the city. The fort
                  was originally named Sudershangarh, but it became 
                  known as Nahargarh, which means 'abode of tigers'. 
                  The popular belief is that Nahar here stands for 
                  Nahar Singh Bhomia,[1] whose spirit haunted the 
                  place and obstructed construction of the fort"
                />
               
            </div>
        </div>
    )
 }
 export default Trip;
