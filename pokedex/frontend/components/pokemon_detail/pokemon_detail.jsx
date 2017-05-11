import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.pokemonId;

    if (newId === this.props.match.params.pokemonId) {
      this.props.fetchSinglePokemon(newId);
    }
  }

  componentDidMount() {
    this.props.fetchSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    const detail = this.props.pokemonDetail;
    return (
      <section>
        <img src={detail.image_url} />
        <ul>
          <li>
            <p>{detail.name}</p>
          </li>
          <li>
            <p>Type: {detail.type}</p>
          </li>
          <li>
            <p>Attack: {detail.attack}</p>
          </li>
          <li>
            <p>Defense: {detail.defense}</p>
          </li>
          <li>
            <p>Defense: {detail.defense}</p>
          </li>
        </ul>
        <section className="items">
          <h3>Items</h3>
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
