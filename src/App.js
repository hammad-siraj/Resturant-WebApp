import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Appbar from './components/appbar'
import Main from './components/Maincomponent';
class App extends Component {

render (){

return(

<BrowserRouter>
<div> 

<Main/>

</div>
</BrowserRouter>

)

}
}
export default App;
