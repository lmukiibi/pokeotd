import http from "../PokemonAPI"

const SearchPokemon = (pokemon) => {

    return http.get("pokemon/" + pokemon);
}

const GetAllCharacters = () => {
    return http.get("pokemon?limit=100");
}

export default { SearchPokemon, GetAllCharacters };