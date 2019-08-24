import React, {Component} from 'react'

class PokemonDetails extends Component {

  constructor() {
    super();
    this.state = {
      sprites: "",
      abilities: "",
      stats: "",
      types : [],
      name: "",
      fetched : false,
      loading : false,
      id : window.location.pathname.replace('/','')
    };
  }

  componentWillMount() {
    this.setState({
      loading : true
    });
    const dataurl = 'https://pokeapi.co/api/v2/pokemon/'.concat(this.state.id); 
    fetch(dataurl)
    .then(res=>res.json())
    .then(response=>{
      console.log(response);
      this.setState({
        types : response.types,
        abilities : response.abilities,
        stats: response.stats,
        sprites : response.sprites,
        name : response.name,
        loading : true,
        fetched : true
      });
    });

  }

  render() {
    const {fetched, loading, types, id, name, stats, abilities} = this.state;
    let content ;
    if(fetched){
      content = <div className="pokemon--species--container">
                  <div className="pokemon--species--sprite">              
                    <img src={`/sprites/${id}.png`} alt=""/>
                  </div>
                  <div className="pokemon--species--name">
                    {name}
                    <br/>
                    {types.map((types) => types.type.name)}
                    <br/>
                    {stats.map((stats) => stats.stat.name)}
                    <br/>
                    {abilities.map((abilities) => abilities.ability.name)}                                        
                  </div>                  
                </div>
     }else if(loading && !fetched){
        content = <p> Loading ...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>
              {content}
            </div> 
  }
}

export default PokemonDetails