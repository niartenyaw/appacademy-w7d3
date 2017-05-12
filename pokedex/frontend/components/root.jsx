import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon_detail/pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="main-page">
        <Route path="/" component={ PokemonIndexContainer }/>
        <Route exact path="/pokemon/:pokemonId" component={ PokemonDetailContainer } />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
