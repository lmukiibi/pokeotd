import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import PokemonAPIService from "../../shared/api/service/PokemonAPIService"
import { useDebounce } from "../../shared/hooks/useDebounce"
import RoutingPath from "../../routes/RoutingPath"
import bgpic from "../../shared/img/manypokemons.jpg"
import { useLocation } from 'react-router'

import "../../shared/global/Styles.css"
import "./ResultView.css"

export const ResultView = () => {

    const [serverData, setServerData] = useState();

    const [username, setUsername] = useState();
    const debounceValue = useDebounce(username,2000);

    const Location = useLocation();
    const history = useHistory();   

    
    const fetchData = async () => {
        try {
        const { data } = await PokemonAPIService.SearchPokemon(randomNumber());
        setServerData(data);
        }
        catch (error){

        }
    };

    const returnHome = () => {
        history.push(RoutingPath.homeView);
    };
    
    useEffect(() => {
        fetchData();
    }, [])

    
    const randomNumber = () => {
        const min = Math.ceil(100);
        const max = Math.floor(1);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    
    const displayData = () =>
    {
        return (
            <div>
                <h2>Name: {serverData?.name}</h2>
                <img src={serverData?.sprites?.front_default} alt="LOADING"/>
                <h2>Weight: {serverData?.weight}</h2>
                <h2>Height: {serverData?.height}</h2>
            </div>
        );
    };

    return (
        <div>
        <img className="bgStyle" src={bgpic} alt="Background picture"/>
        <main>
            <div className="center">
                <div>
                    <h2 id="sectionstyle2">Congratulations <span className="name-style">{Location.state}</span> your pokemon of the day is </h2>
                </div>
                <br/>

                <div id="sectionstyle">{displayData()}</div>

                <br/>
                
                <br/>
                
                <div>
                    <button onClick={() => returnHome()}>Return home</button>
                </div>

            </div>
        </main>
        </div>
    )
}
