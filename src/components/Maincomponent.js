import React, { Component } from 'react';
import Menu  from './menu'
import About from './aboutus'
import {BrowserRouter,Switch,Route,Redirect,Router,withRouter,} from 'react-router-dom';
import { Dishdetailed } from './dishDetailed';
import Appbar from './appbar'
import Footer from './footer'
import Home from './home'
import Contact from './contact'
import {connect} from 'react-redux'
import {add_comment} from '../redux/Action_creater'
const 
mapStateToProps = (state)=>{
    return {
    dishes:state.dishes,
    comments:state.comments,
    leaders:state.leaders,
    promotion:state.promotions
    }
}
const mapDispatchToProps =(dispatch)=>({
add_comment:(dishId,author,rating,comment) => dispatch (add_comment(dishId,author,rating,comment))


})

class Main extends Component {
constructor(props){
super(props);
this.state ={
}}

dishSelect=(dishId)=>{
    this.setState({
        dishSelected:dishId
    })}
    
    
    
render (){    
console.log("main", this.props.comments );


const  Homepage =()=>{
return(
<Home dish={this.props.dishes.filter((dish)=>
dish.featured)[0]}
     
    promotion={this.props.promotion.filter((promo)=>promo.featured)[0]}

            leader={this.props.leaders.filter((leader)=>leader.featured)[0]}

/>

)

}
const Aboutpage =()=>{
return(

    <About leaders={this.props.leaders}/>
)

}

const DishwithId =({match})=>{
    return(

<Dishdetailed 
dishid={this.props.dishes.filter((dish)=> dish.id === parseInt( match.params.dishid , 10) )[0]}
comment={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishid,10))}
add_comment={this.props.add_comment}

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
()=>{return <Menu dishes={this.props.dishes}/>}

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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
