import { Component } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import { MenuItems } from "../Component/MenuItems";

class Navbar  extends Component{
    state ={clicked: false};
    handleClick =() =>{
        this.setState({clicked: !this.state.clicked})
    }
//    to extend the component we use render
    render(){
        
        return(
            
                 <nav className="NavbarItems">
                <h1 className="navbar-logo">Trip</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i 
                    className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                                </Link>
                            </li> 
                        )
                    })}
                    {/* <button>Sign Up</button> */}
                </ul>
            </nav>
            
        )
    }
}
export default Navbar;


