import { createContext, useContext, useState } from 'react';
import useToggle from '../hooks/useToggle';

const PokemonContext = createContext();

export function usePokemonContext() {
  return useContext(PokemonContext);
}

export default function PokemonProvider({ children }) {
  const [modal, setModal] = useState({ isOpen: false, pokemon: {} });
  const value = {
    currentPokemon: modal.pokemon,
    openModal: (pokemon) => setModal({ isOpen: true, pokemon }),
    isModalOpen: modal.isOpen,
    closeModal: () => setModal((prev) => ({ ...prev, isOpen: false })),
  };
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}
