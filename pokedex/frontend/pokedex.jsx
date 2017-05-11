import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

import { fetchSinglePokemon, receiveSinglePokemon } from './actions/pokemon_actions';
window.fetchSinglePokemon = fetchSinglePokemon;
window.receiveSinglePokemon = receiveSinglePokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
