import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import Pokedex from './Components/Pokedex'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Pokedex/></BrowserRouter>, document.getElementById('root'));