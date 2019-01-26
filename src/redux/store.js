import { createStore,combineReducers,compose} from 'redux'
import {Comments} from './comments'
import {Dishes} from './dishes'
import {Leader}  from './leaders'
import {Promotions} from './promotions'

export const configureStore = ()=>{
    const enhancers = compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    const store = 

createStore(
combineReducers({
    dishes:Dishes,
    comments:Comments,
    leaders:Leader,
    promotions:Promotions

}),enhancers)
return store;
}