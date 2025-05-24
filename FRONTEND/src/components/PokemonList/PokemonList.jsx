import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../Pokemon/Pokemon";

export const PokemonList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function DownloadPokemons() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
                const pokemonList = response.data.results;

                const pokemonDetails = await Promise.all(
                    pokemonList.map(async (pokemon) => {
                        const detailsResponse = await axios.get(pokemon.url);
                        return detailsResponse.data;
                    })
                );

                const res = pokemonDetails.map((pokeData) => {
                    return {
                        id: pokeData.id,
                        name: pokeData.name,
                        types: pokeData.types.map(typeInfo => typeInfo.type.name),
                        image: pokeData.sprites.front_default
                    };
                });

                setPokemonList(res);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to download Pokémon data:", error);
                setIsLoading(false);
            }
        }

        DownloadPokemons();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pokémon List</h2>
            {isLoading ? 'Loading...' : 'Downloaded' }
            <Pokemon pokemonList={pokemonList} />
        </div>
    );
};
