import Axios from "axios"

const PokemonAPI = Axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

export default PokemonAPI;