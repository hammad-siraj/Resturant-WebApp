import React from 'react';
import {Navbar,Jumbotron,Nav,NavbarBrand,Collapse,NavItem,NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import {Modal,ModalHeader,ModalBody,Button,Label,Input,Form,FormGroup} from 'reactstrap'
export default class Appbar extends React.Component{
constructor(props){
    super(props);
    this.state={

isModelOpen :false

    }

}

toggleModel =(event)=>{
this.setState({
    isModelOpen:!this.state.isModelOpen
})
}
submit = (event)=>{
    event.preventDefault();

    this.toggleModel();
    alert( this.username.value + '\n' + this.password.value +'\n'+
    this.rememberme.value
    );
}
    render(){

        return(
        <div className='container'>
            <Navbar  dark color='secondary' expand='md'>
            {/* <img width='5%' src='/assets/images/mainlogo.png'/> */}
<NavbarBrand className='mr-auto'>Ristorante Con Fusion</NavbarBrand>

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
<Nav navbar className='ml-auto'>
<NavItem>
    <Button color='secondary'  onClick={this.toggleModel}>
<span className='fa fa-sign-in fa-lg'>
</span>
        Login

    </Button>
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
            <Modal toggle={this.toggleModel} isOpen={this.state.isModelOpen}>
        <ModalHeader>LOGIN</ModalHeader>
<ModalBody>
    <Form onSubmit={this.submit}>
<FormGroup>
<Label htmlFor='username'>User Name</Label>
<Input type='text' name='username' innerRef={(userinput)=>this.username=userinput}/>
</FormGroup>
<FormGroup>
<Label htmlFor='password'>Password</Label>
<Input type='password' name='password' innerRef={(userinput)=>this.password=userinput}/>
</FormGroup>
    <FormGroup check>
<Label check>

<Input type='checkbox' name='rememberme' innerRef={(userinput)=>this.rememberme=userinput}/>
    Remember me
    </Label>
    </FormGroup>
    <Button type='submit' value='submit'> Submit</Button>
    </Form>
</ModalBody>
    </Modal>  
        </div>)
    }
    }
    