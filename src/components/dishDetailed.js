import React from 'react';
import{Col,Media ,Card,CardBody,CardText,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

export  class Dishdetailed extends React.Component{


dishRender =(dish)=>{
 if(dish!=null){return( <Card>  <CardTitle>{dish.name}</CardTitle> <CardImg top src={dish.image} alt={dish.name} />
    <CardBody>
    
      <CardText>{dish.description}</CardText>
      
    </CardBody>
</Card>


 )}
 else{  return(<div></div>) }


}

renderComments= (dish)=>{
 if(dish!=null){

   const dishComments = dish.comments.map((comment)=> 
   {return (<p key={comment.id}> {comment.comment} <br/> {comment.author}  {new Intl.DateTimeFormat('en-us',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(Date.parse(comment.date)))}  </p>)}
   )
 return(

<Col sm="10">
    <Card>
        <CardBody>
    <h4>
COMMENTS    
</h4>
{dishComments}
</CardBody>
</Card>
 </Col>

 )

}
else{return(<div></div>)}




}



render(){

    return(<div className="container">
        <div className="row">
        <div  className="col-12 col-md-5 m-1">
        {this.dishRender(this.props.dishes)}
    </div>
      <div  className="col-12 col-md-5 m-1">
      {this.renderComments(this.props.dishes)}
       </div>
        </div>
        </div>);
}


}