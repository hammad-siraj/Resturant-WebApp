import React from 'react';
import {Navbar,Jumbotron,Nav,NavbarBrand,Collapse,NavItem,NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom'

export default class Appbar extends React.Component{

    render(){

        return(
        <div className='container'>
            <Navbar  dark color='secondary' expand='md'>
<NavbarBrand className='mr-auto'><img width='5%' src='/assets/images/mainlogo.png'/></NavbarBrand>
<Nav navbar>
<NavItem >
 <NavLink className='nav-link' to='/home'>
<span className='fa fa-home fa-lg'></span>
 HOME
</NavLink>
</NavItem>              

<NavItem>
    <NavLink className='nav-link' to='/menu'>
  <span className='fa fa-list fa-lg'></span>
        MENU</NavLink>
    </NavItem>

<NavItem>
    <NavLink className='nav-link' to='/contact'>
    <span className='fa fa-address-card fa-lg'> </span>
       CONTACT </NavLink>
    </NavItem>
<NavItem>
<NavLink  className='nav-link' to='/aboutus' >
   <span className='fa fa-info '></span>
    ABOUT 
</NavLink>

    </NavItem>


</Nav>

            </Navbar> 
            <Jumbotron>
<div className="container">

<div className='row row-header'>
<div className='col-12 col-sm-6'>
<h1> AL HAMMAD RESTURANT </h1>

                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>

</div>
</div>
</div>



            </Jumbotron>
        </div>)
    }
    }
    