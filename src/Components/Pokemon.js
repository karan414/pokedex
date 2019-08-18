import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Pokemon extends Component {
  render() {        
    const {pokemon,id} = this.props;
    return  <div className="pokemon--species">
              <Link to={id}>
                <div className="pokemon--species--container">
                  <div className="pokemon--species--sprite">
                    <img src={`/sprites/${id}.png`} alt={pokemon.name}/>
                  </div>
                  <div className="pokemon--species--name"> {pokemon.name} </div>
                </div>
              </Link>
            </div>
  }
}

export default Pokemon