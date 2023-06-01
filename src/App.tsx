import React from 'react';
import AppRouter from './AppRouter';
import PokemonProvider from './context/PokemonProvider';

const App: React.FC = () => {
  return (
    <PokemonProvider>
      <AppRouter/>
    </PokemonProvider>
  )
};

export default App;
