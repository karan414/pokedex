import React, {Component} from 'react'

class PokemonDetails extends Component {
  constructor() {
    super();
    this.state = {
      types : [],
      fetched : false,
      loading : false
    };
  }
  componentWillMount() {
    this.setState({
      loading : true
    });
    const dataurl = 'https://pokeapi.co/api/v2/pokemon/'.concat(window.location.pathname.replace('/','')) 
    fetch(dataurl)
    .then(res=>res.json())
    .then(response=>{
      this.setState({
        types : response.types,
        loading : true,
        fetched : true
      });
    });
  }
  render() {
    const {fetched, loading, types} = this.state;
    let content ;
    if(fetched){
      content = <div>
                  {types.map((types) => types.type.name)}
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