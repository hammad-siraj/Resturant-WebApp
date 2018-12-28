import  React from 'react';
import{Media ,Card,CardBody,CardText,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
   
const RenderMenu = ({dish,onClick})=>{
return(
<div>
    <Card onClick={()=>onClick(dish.id)}>
    <CardBody   >
    <CardTitle>{dish.name} </CardTitle>
        
    <CardImg width="100%" src={dish.image} alt={dish.name} >
    </CardImg>
    </CardBody>
    </Card>

    </div>


)


}

 const Menu =(props)=>{
const menu = props.dishes.map((dish)=>{
return(
    <div className='col-12 col-md-3 m-3 ' key={dish.id}>
    
    <RenderMenu dish={dish} onClick={props.onClick} />
    </div>
)
})

return(
<div className='container'>
<div className='row'>
{menu}
</div>

</div>

)



}

    


    export default Menu;