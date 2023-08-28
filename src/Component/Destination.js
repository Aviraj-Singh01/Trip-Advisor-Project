import "./Destination.css"
import Mountain1 from "../Component/img/ravi-shekhar-P0a6TT0CvKg-unsplash.jpg"
import Mountain2 from "../Component/img/gujrat.jpg"
import Mountain3 from "../Component/img/depositphotos_365043330-stock-photo-nahargarh-fort-sunset-aerial-view.jpg"
import Mountain4 from "../Component/img/depositphotos_365043330-stock-photo-nahargarh-fort-sunset-aerial-view.jpg"
import DestinationData from "./DestinationData"
const Destination =() =>{
    return(
        <div className="desstination">
            <h1>Popular Destination</h1>
            <p>Tour gives you the opportunity to see alot within a time frame</p>
            <DestinationData
            className="first-des"
            heading="Jal Mahal, Jaipur"
            text="Jal Mahal (meaning Water Palace) is 
            a palace in the middle of the Man Sagar 
            Lake in Jaipur city, the capital of the 
            state of Rajasthan, India. The palace was
             originally constructed around 1699; the 
             building and the lake around it were later 
             renovated and enlarged in the early 18th 
             century by Maharaja Jai Singh II of Amber"
            img1={Mountain1}
            img2={Mountain2}
            />
             <DestinationData
             className="first-des-reverse"
            heading="Nahargarh Fort , Jaipur"
            text="Nahargarh Fort stands on the edge of 
            the Aravalli Hills, overlooking the city of 
            Jaipur in the Indian state of Rajasthan. Along
             with Amer Fort and Jaigarh Fort, Nahargarh once 
             formed a strong defence ring for the city. The fort
              was originally named Sudershangarh, but it became 
              known as Nahargarh, which means 'abode of tigers'. 
              The popular belief is that Nahar here stands for 
              Nahar Singh Bhomia,[1] whose spirit haunted the 
              place and obstructed construction of the fort.
              Nahar's spirit was pacified by building a temple in his memory 
            within the fort, which thus became known by his name."
            img1={Mountain3}
            img2={Mountain4}
            />

        </div>
    )
}
export default Destination;