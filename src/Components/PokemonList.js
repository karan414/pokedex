import React, {Component} from 'react'
import Pokemon from './Pokemon'

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      species : [],
      fetched : false,
      loading : false
    };
  }
  componentWillMount() {
    this.setState({
      loading : true
    });
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=892', {mode: "cors"})
    .then(res => res.json())
    .then(response=>{
      this.setState({
        species : response.results,
        loading : true,
        fetched : true
      });
    });
  }
  render() {      
    const {fetched, loading, species} = this.state;
    let content ;
    if(fetched){
      content = <div className="pokemon--species--list">
                    {species.map((pokemon,index)=>
                      <Pokemon key={pokemon.name} id={pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')} pokemon={pokemon}/>
                    )}
                </div>
     }else if(loading && !fetched){
        content = <p> Loading ...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>{content}</div>
  }
}

export default PokemonList