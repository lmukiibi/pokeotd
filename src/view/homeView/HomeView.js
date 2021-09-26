import React from 'react'
import { useState, useContext } from 'react';
import { UserContext } from '../../shared/provider/UserProvider';
import { useHistory } from "react-router-dom"
import RoutingPath from "../../routes/RoutingPath"
import "./HomeView.css"
import "../../shared/global/Styles.css"

export const HomeView = () => {


    const [ username, setUsername ] = useState();
    const [ authenticatedUser, setAuthenticatedUser ] = useContext(UserContext);
    const history = useHistory();

    const Generate = () => {
        setAuthenticatedUser(username);
        localStorage.setItem("username", username);
        history.push(RoutingPath.resultView);
    };


    return (
        <main>
            <div className="center">
                <div>
                    <h1 id="sectionstyle" className="center">Welcome to<br/><span className="poke-title">Pokémon of the Day</span></h1>
                    <h3 className="center-two">A random poké generator</h3>
                </div>

                <br/>

                <div>
                    <input placeholder="Enter your name" onChange={(event) => setUsername(event.target.value)}/> 
                </div>

                <br/>

                <div>
                    <button onClick={() => Generate()}>Generate</button>
                </div>
            </div>


        </main>
    )
}
