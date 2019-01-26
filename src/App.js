import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from './components/Maincomponent';
import {configureStore} from './redux/store'
import {Provider} from 'react-redux'
const store = configureStore();

class App extends Component {

render (){

return(
<Provider store={store}>
<BrowserRouter>

<Main/>

</BrowserRouter>
</Provider>
)

}
}
export default App;
