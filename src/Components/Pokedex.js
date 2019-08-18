import React, {Component} from 'react'
import PokemonList from './PokemonList'
import {Route} from 'react-router-dom'
import PokemonDetails from './PokemonDetails';

class Pokedex extends Component {
  render() {
    return  <div className='pokeapp'>
              <Route exact path="/" component={PokemonList}/>
              <Route path="/1" component={PokemonDetails}/>
            </div>
  }
}

export default Pokedex