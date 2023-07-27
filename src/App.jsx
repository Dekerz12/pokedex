import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PokemonList from './components/PokemonList';
import { useState } from 'react';
import Modal from './components/Modal';
import PokemonProvider from './context/PokemonContext';
export default function App() {
  const [generation, setGeneration] = useState('generation-i');

  return (
    <div className='relative'>
      <PokemonProvider>
        <Router>
          <Navigation onClick={setGeneration} />
          <Routes>
            <Route path='/' element={<Navigate replace to='/gen-i' />} />
            <Route
              path='/:genId'
              element={<PokemonList generation={generation} />}
            />
          </Routes>
        </Router>
        <Modal />
      </PokemonProvider>
    </div>
  );
}
