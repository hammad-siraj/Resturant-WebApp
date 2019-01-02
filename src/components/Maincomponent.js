import React, { Component } from 'react';
import Menu  from './menu'
import {DISHES} from '../shared/dishes';
import About from './aboutus'
import {BrowserRouter,Switch,Route,Redirect,Router,withRouter,} from 'react-router-dom';
import { Dishdetailed } from './dishDetailed';
import Appbar from './appbar'
import Footer from './footer'
import COMMENTS from '../shared/comments'
import PROMOTIONS from '../shared/promotions'
import LEADERS from '../shared/leader'
import Home from './home'
import Contact from './contact'

class Main extends Component {
constructor(props){
super(props);
this.state ={



dishes:DISHES,
dishSelected:null,
promotion:PROMOTIONS,
comment:COMMENTS,
leader:LEADERS,

}


}


dishSelect=(dishId)=>{
    this.setState({
        dishSelected:dishId
    })}
    
    
    
render (){    
console.log("main", this.state.dishSelected );


const  Homepage =()=>{
return(

<Home dish={this.state.dishes.filter((dish)=>
dish.featured)[0]}
     
    promotion={this.state.promotion.filter((promo)=>promo.featured)[0]}

            leader={this.state.leader.filter((leader)=>leader.featured)[0]}

/>

)

}
const Aboutpage =()=>{
return(

    <About leaders={this.state.leader}/>
)

}

const DishwithId =({match})=>{
    return(

<Dishdetailed 
dishid={this.state.dishes.filter((dish)=> dish.id === parseInt( match.params.dishid , 10) )[0]}
comment={this.state.comment.filter((comments)=>comments.dishId===parseInt(match.params.dishid,10))[0]}
/>

    )
    
    }
    
return(
<div> 
<Appbar/>

<div> 
<Switch>
<Route exact path='/home' render={()=>{return <Homepage/>}}/>
<Route  exact path='/menu' render={
()=>{return <Menu dishes={this.state.dishes}/>}

} />
<Route path='/menu/:dishid' render={(props)=>{return <DishwithId {...props}/>}} />
<Route exact  path='/contact' render={()=>{return <Contact/>}}/>
<Route exact path='/aboutus' render={()=>{return <Aboutpage />}}/>
 
 <Redirect to='/home'/> 
</Switch>
</div>
  
  
   {/* <Menu 

dishes={this.state.dishes} 
onClick={(dishId)=>this.dishSelect(dishId)}
/> 

<Dishdetailed dishes={this.state.dishes.filter((dish)=>dish.id === this.state.dishSelected)[0]} /> */}

<Footer/>
</div>


)

}
}
export default Main;
