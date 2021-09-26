import React, { useContext } from "react"
import RoutingPath from "../../../routes/RoutingPath"
import { UserContext } from "../../../shared/provider/UserProvider"
import "./DesktopNavigation.css"
import "../../../shared/global/Styles.css"
import { useHistory } from "react-router-dom"
import { Profile } from "../../profile/Profile"

export const DesktopNavigation = () => {
    
    const [ authenticatedUser, setAuthenticatedUser ] = useContext(UserContext);
    const history = useHistory();

    
    const RenderLogin = () => {
        if (authenticatedUser) return <span className="navbar-login-desktop"><Profile/></span>
        return(
            <input placeholder="Enter name" to={RoutingPath.signInView} activeClassName="selected" className="navbar-login-desktop">
                Sign in
            </input>
        )
    };

    return (

        <nav className="navbar-desktop">
            <span className="navbar-logo-desktop"> Pokemon Of The Day </span>
            <ul className="navbar-list-deskop">
                <li><button onClick={() => history.push(RoutingPath.homeView)}> Home </button></li>
                <li><button onClick={() => history.push(RoutingPath.resultView)}> Result </button></li>
            </ul>
            {RenderLogin()}
        </nav>
    )
}