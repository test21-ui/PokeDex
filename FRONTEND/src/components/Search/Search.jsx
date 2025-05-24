export const Search = () => {
    return (
        <div className="flex items-center justify-center w-full h-16 bg-gray-100 dark:bg-gray-800">
        <input
            type="text"
            placeholder="Search Pokémon..."
            className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        </div>
    );
}