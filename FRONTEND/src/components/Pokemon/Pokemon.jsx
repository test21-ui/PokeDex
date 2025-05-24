export const Pokemon = ({ pokemonList }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pokemonList.map(pokemon => (
                <div key={pokemon.id} className="p-4 border rounded shadow">
                    <img src={pokemon.image} alt={pokemon.name} />
                    <h3 className="font-bold">{pokemon.name}</h3>
                    <p>{pokemon.types.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};
