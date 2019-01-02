import React from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg,CardSubtitle} from 'reactstrap';

const Rendercard =({item})=>{

return(
<Card>
<CardImg width='100%' src={item.image} alt={item.name}/>
<CardTitle>{item.name}</CardTitle>
{item.designation ?  <CardSubtitle>{item.designation}</CardSubtitle>:null}
<CardText>{item.description}</CardText>
</Card>
)

}


const Home = (props)=>{
console.log('dish',props.dish,'promo',props.promotion,'leader',props.leader);
return(
<div className='container'>
<div className='row'>
         <div className='col-12 col-md-3 m-3'>
                 <div >
<Rendercard item={props.dish}/>
        </div>
                </div> 

 <div className='col-12 col-md-3 m-3'>
<div >
<Rendercard item={props.promotion}/>
</div>
</div> 

<div className='col-12 col-md-3 m-3'>
    <div >
<Rendercard item={props.leader}/>
        </div>
    </div> 
</div>
</div>

)

}
export default Home;