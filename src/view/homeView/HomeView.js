import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../shared/provider/UserProvider';
import { useHistory } from "react-router-dom"
import { useDebounce } from "../../shared/hooks/useDebounce"
import RoutingPath from "../../routes/RoutingPath"
import PokemonAPIService from "../../shared/api/service/PokemonAPIService"
import "./HomeView.css"
import "../../shared/global/Styles.css"
import bgpic from "../../shared/img/manypokemons.jpg"

import { Imagestrip } from '../../components/imagestrip/Imagestrip'

export const HomeView = () => {


    const [ username, setUsername ] = useState();
    const [ authenticatedUser, setAuthenticatedUser ] = useContext(UserContext);
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const debounceValue = useDebounce(username, 0);

    const Generate = () => {
        setAuthenticatedUser(username);
        history.push(RoutingPath.resultView, username);
    };


    
    const fetchData = async () => {
        setLoading(true);
        try {
        setLoading(false);
        }
        catch (error){

        }

    };

    
    useEffect(() => {
        fetchData();
    }, [debounceValue]);

    
    return (
        <div>
        <img className="bgStyle" src={bgpic} alt="Background picture"/>
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
                
                <br/>

                <div>
                    {Imagestrip()}
                </div>
            </div>

        </main>
        </div>
    )
}
