import  React from 'react';
import{Breadcrumb,BreadcrumbItem ,Card,CardBody,CardText,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
   import {Link} from 'react-router-dom'
const RenderMenu = ({dish})=>{
return(
<div>
    <Card>
    <Link to={`/menu/${dish.id}`}>
    <CardBody   >
    <CardTitle>{dish.name} </CardTitle>
        
    <CardImg width="100%" src={dish.image} alt={dish.name} >
    </CardImg>
    </CardBody>
    </Link>
    </Card>

    </div>


)


}

 const Menu =(props)=>{
const menu = props.dishes.map((dish)=>{
return(
    <div className='col-12 col-md-3 m-3 ' key={dish.id}>
    
    <RenderMenu dish={dish}  />
    </div>
)
})

return(
<div className='container'>
<div className='row'>
<Breadcrumb>
<BreadcrumbItem><Link to='/home'>HOME</Link> </BreadcrumbItem>
<BreadcrumbItem> <Link to='/menu'>MENU </Link></BreadcrumbItem>
</Breadcrumb>

 </div>
<div className='col-12'>
        <h1> MENU</h1>
    </div>

<div className='row'>
{menu}
</div>

</div>

)



}

    


    export default Menu;