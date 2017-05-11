import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <li id={pokemon.id}>
        <Link to={`/pokemon/${pokemon.id}`}>
          <span>
            {pokemon.id}
          </span>
          <img src={pokemon.image_url}></img>
          <span>
            {pokemon.name}
          </span>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
