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
  return (
    <div className='relative'>
      <PokemonProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Navigate replace to='/gen-i' />} />
            <Route path='/:genId' element={<PokemonList />} />
          </Routes>
        </Router>
        <Modal />
      </PokemonProvider>
    </div>
  );
}
