import { Component } from "react";
import "../Component/Destination.css"
import Mountain1 from "../Component/img/ravi-shekhar-P0a6TT0CvKg-unsplash.jpg"
import Mountain2 from "../Component/img/gujrat.jpg"
import Mountain3 from "../Component/img/kashish-lamba-OQw4RwTNzzA-unsplash.jpg"
import Mountain4 from "../Component/img/kashish-lamba-OQw4RwTNzzA-unsplash.jpg"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                   <h2>{this.props.heading}</h2>
                   <p>{this.props.text}</p>
                </div>

                <div className="image">
               <img alt="img" src={this.props.img1}/>
               <img alt="img" src={this.props.img2}/>
               </div>
            </div>
        )
    }
}
export default DestinationData;