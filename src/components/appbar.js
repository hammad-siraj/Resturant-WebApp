import React from 'react';
import {Navbar,Jumbotron} from 'reactstrap';

export default class Appbar extends React.Component{

    render(){

        return(<div>
            <Navbar  dark >
            <h1>
            </h1>
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