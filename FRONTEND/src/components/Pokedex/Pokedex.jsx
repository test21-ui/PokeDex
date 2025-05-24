import { Search } from "../Search/Search"
import { PokemonList } from "../PokemonList/PokemonList"

export const Pokedex = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-gray-800">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Pokedex</h1>
            <Search />
            <div className="mt-8 w-full max-w-4xl">
                <PokemonList />  
            </div>
        </div>
    )
}

