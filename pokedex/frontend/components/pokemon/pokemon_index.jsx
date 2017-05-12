import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <nav className="poke-index">
        <ul>
          {this.props.pokemon.map(
            poke => <PokemonIndexItem key={poke.id} pokemon={poke} />
          )}
        </ul>
      </nav>
    );
  }
}

export default PokemonIndex;
