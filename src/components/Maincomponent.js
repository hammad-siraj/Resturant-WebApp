import React, { Component } from 'react';
import Menu  from './menu'
import {DISHES} from './dishes'
import { Dishdetailed } from './dishDetailed';
import Appbar from './appbar'
import Footer from './footer'
class Main extends Component {
constructor(props){
super(props);
this.state ={



dishes:DISHES,
dishSelected:null


}


}


dishSelect=(dishId)=>{
    this.setState({
        dishSelected:dishId
    })}
    
    
    
render (){
console.log("main", this.state.dishSelected );
return(
<div> 
<Appbar/>

<Menu 

dishes={this.state.dishes} 
onClick={(dishId)=>this.dishSelect(dishId)}
/>
<Dishdetailed dishes={this.state.dishes.filter((dish)=>dish.id === this.state.dishSelected)[0]} />
<Footer/>
</div>


)

}
}
export default Main;
