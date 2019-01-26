import React,{Component} from 'react';
import{Breadcrumb,BreadcrumbItem, Card,CardBody,CardText,CardImg,CardTitle,Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import  {Modal,ModalHeader,ModalBody,Col,Row,Label,} from 'reactstrap'
import {Control,Errors,LocalForm,} from 'react-redux-form'

const required =(val)=> val && val.length;
const minNum =(length)=> (val)=> (val) && (val.length>=length)
const maxNum =(length)=>(val)=> !(val) || (val.length<=length) 
export default class CommentForm extends React.Component {
    constructor(props){
    super(props)
    this.state={
    isOpen:false
}    
}
togglehandler=()=>{
    this.setState({
        isOpen:!this.state.isOpen
    })
}
submit =(value,dishId)=>{
    
    
    this.props.add_comment(dishId,value.author,value.rating,value.comment)
    this.togglehandler();
    console.log("submit",this.props.add_comment);

}
render(){
    return(
    <div className='container'>
    <Button onClick={this.togglehandler}><span className='fa fa-pencil fa-lg'></span> Submit Comment  </Button>
<Modal isOpen={this.state.isOpen} toggle={this.togglehandler}>
<ModalHeader>
    Submit comment
</ModalHeader>
<ModalBody>
<LocalForm onSubmit={(value)=>this.submit(value,this.props.dishId.id)}>
    <Row className='form-group'> 
<Col>
<Control.select model='.rating' name='rating' className='form-control'>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>

    </Control.select>
</Col>

        </Row>
<Row className='form-group'>
<Col>
<Label htmlFor='author'> Name</Label>
<Control.text model='.author' name='author' className='form-control' 
validators={{
    required,maxNum:maxNum(15),minNum:minNum(3)
}}/>
<Errors
className='text-danger'
model='.author'
show='touched'
messages={{
    required:'Required',
    maxNum:'name should be less than 15 character',
    minNum:'name should be greater than 3 character'

}}
/>
</Col>

</Row>
<Row className='form-group'>
    <Col>
    <Control.textarea model='.comment' name='comment' className='form-control'/>

    </Col>
</Row>
<Button type='submit' >Submit</Button>
</LocalForm>

</ModalBody>
</Modal>

    </div>)
}


}
export  class Dishdetailed extends React.Component{
 

    RenderDish =(dish)=>{
        if(dish!=null){return( 
    <Card>  
             <CardTitle>{dish.name}</CardTitle>
           <CardImg top src={dish.image} alt={dish.name} />
 
       <CardBody>    
            <CardText>{dish.description}</CardText>      
</CardBody>
</Card>


 )}
 else{  return(<div></div>) }


}

RenderComment = (comments,add_comment,dishid)=>{
    console.log("dish",add_comment);


  if (comments != null) {
  const Comments = comments.map((comments)=>{       
     return(
     <div key={comments.id}>
    <p>{comments.comment}</p>
    <p>-- {comments.author},     {new Intl.DateTimeFormat('en-US',
                                         {year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(comments.date))}</p>



  </div>)
}) 

    

    return (
      <div className="list-unstyled">
        <h4>Comments</h4>
        {Comments}

        <CommentForm add_comment={add_comment} dishId={dishid} />

      </div>
    );
  }

  else {
    return (
      <div></div>
    );
  }


}


render(){
 console.log('comment d.js' ,this.props.add_comment);
 
// console.log('comment d.js' ,this.props.dishid);

return(<div className="container">
<div className='row'>

<Breadcrumb>
<BreadcrumbItem>
    <Link to='/home'>HOME</Link>
</BreadcrumbItem>
<BreadcrumbItem>

<Link to='/menu' >MENU</Link>
</BreadcrumbItem>

</Breadcrumb>
</div>
  
        <div className="row">
        <div  className="col-12 col-md-5 m-1">
        {this.RenderDish(this.props.dishid,this.props.comment)}
    </div>
      <div  className="col-12 col-md-5 m-1">
      {this.RenderComment(this.props.comment,this.props.add_comment,this.props.dishid)}
      

      {/* {this.renderComments(this.props.comment)} */}
       </div>

        </div>
        </div>);
}


}