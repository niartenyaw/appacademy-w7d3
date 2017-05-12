import { connect } from 'react-redux';
import * as Actions from '../../actions/pokemon_actions';
import ItemDetail from './item_detail';

const mapStateToProps = state => ({
  items: state.pokemonDetail.items
});

//const mapDispatchToProps 
