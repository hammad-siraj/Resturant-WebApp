import React from 'react';
import{Breadcrumb,BreadcrumbItem,Media ,Card,CardBody,CardText,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom'
export  class Dishdetailed extends React.Component{


RenderDish =(dish)=>{
 if(dish!=null){return( <Card>  <CardTitle>{dish.name}</CardTitle> <CardImg top src={dish.image} alt={dish.name} />
    <CardBody>
    
      <CardText>{dish.description}</CardText>
      
    </CardBody>
</Card>


 )}
 else{  return(<div></div>) }


}

RenderComment = (comments)=>{
console.log("render comp ", comments);
  if (comments != null) {
  const Comments = 
        <div>
          <p>{comments.comment}</p>
          <p>-- {comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
        </div>
      
    

    return (
      <div className="list-unstyled">
        <h4>Comments</h4>
        {Comments}
      </div>
    );
  }

  else {
    return (
      <div></div>
    );
  }


}


// renderComments= (comment)=>{
//     return(
//   this.props.comment.map((comments)=>{
//         return(
//             <Card>
            
//             <CardBody>
            
//             <CardTitle><h1>{comments.author}</h1></CardTitle>
            
//             </CardBody>
//             </Card>
               
//         )
        
//         })
//         )
        

//     }

render(){
 console.log('comment d.js' ,this.props.comment);
// console.log('comment d.js' ,this.props.dishid);

return(<div className="container">
<div className='row'>
<div className='col-2'>
<Breadcrumb>
<BreadcrumbItem>
    <Link to='/home'>HOME</Link>
</BreadcrumbItem>
<BreadcrumbItem>

<Link to='/menu' >MENU</Link>
</BreadcrumbItem>

</Breadcrumb>
</div>
  </div>
        <div className="row">
        <div  className="col-12 col-md-5 m-1">
        {this.RenderDish(this.props.dishid)}
    </div>
      <div  className="col-12 col-md-5 m-1">
      {this.RenderComment(this.props.comment)}
      {/* {this.renderComments(this.props.comment)} */}
       </div>
        </div>
        </div>);
}


}