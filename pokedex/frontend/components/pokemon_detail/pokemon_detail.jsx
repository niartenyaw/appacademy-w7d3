import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.pokemonId;

    if (newId !== this.props.match.params.pokemonId) {
      this.props.fetchSinglePokemon(newId);
    }
  }

  componentDidMount() {
    this.props.fetchSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    const detail = this.props.pokemonDetail;
    console.log(detail.items);
    let itemsRender = "";
    if (detail.items !== undefined) {
      itemsRender = detail.items.map(item => <li><img src={item.image_url} /></li>);
    }
    return (
      <div className="pokedex">
        <section className="poke-detail">
          <img src={detail.image_url} />
          <ul className="details">
            <li>
              <h2>{detail.name}</h2>
            </li>
            <li>
              <p>Type: {detail.poke_type}</p>
            </li>
            <li>
              <p>Attack: {detail.attack}</p>
            </li>
            <li>
              <p>Defense: {detail.defense}</p>
            </li>
            <li>
              <p>Moves: {detail.moves}</p>
            </li>
          </ul>
        <section className="items">
          <h3>Items</h3>
          <ul className="items-list">
            {
              itemsRender
            }
          </ul>
        </section>
      </section>
      </div>
    );
  }
}

export default PokemonDetail;
