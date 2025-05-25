import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pokedex } from './components/Pokedex/Pokedex';
import { PokemonDetails } from './components/PokemonDetails/PokemonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;