import React from 'react'
import { useState, useEffect } from 'react';
import PokemonAPIService from '../../shared/api/service/PokemonAPIService';
import "../../shared/global/Styles.css"



export const Imagestrip = () => {


    const [serverData, setServerData] = useState();

    const fetchData = async () => {

        try {
            const { data } = await PokemonAPIService.GetAllCharacters();
            setServerData(data);
        }
        catch (error) {
            alert("Error from  server: " + error);
        }
    }


    const displayData = () => {
        return serverData?.results?.map((pokemon, i) => (
            <div key={pokemon.name}>
                <h3>
                    {"?"}{pokemon.name}{"?"} 
                </h3>
                

            </div>
        ))
    };
    
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            {displayData()}
        </div>
    ) 
}
