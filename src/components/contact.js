import React ,{Component}from 'react'
import {Form,FormGroup,Col,Input,Label,Button} from 'reactstrap'

class Contact extends React.Component {
constructor(){
super();
this.state= [{

firstname:'',
lastname:'',
contact:'',
agree:false,
contactType:'tel.',
message:'',


}]

}
InputHandler =(event)=>{
    const target =event.target;
const value = target.type=== 'checkbox' ? target.checked:target.value;
const name = target.name;
this.setState({
[name]:value,


})


}
Onsubmit = (event)=>{
    this.setState({


    })
    console.log(JSON.stringify(this.state));
    alert(JSON.stringify(this.state));
event.preventDefault();
}


render(){
    return(
        <div className='container'>
        <div className='row'>
        <div className='col-12 col-md-3 m-3'>
           <h3>ADDRESS</h3>
           <p> KHADDA MARKET PHASE-II <br/>
        DEFENCE HOUSING AUTHORITY <br/>
        KARACHI<br/>
         </p>
            </div>
        <div className='col-12 col-md-3 m-3'>
            <h3>MAP LOCATION</h3>
            </div>
        <div className='col-12 col-md-3 m-3'>
        
        <h3>REACH US </h3>
            <i className='fa fa-phone' > 0331-8955212</i>
            <br/>
            <i className='fa fa-envelope'></i> <a href="mailto:hammadsiraj@gmail.com"> hammadsiraj224@gmail.com </a>
            <i></i>
            
            </div>
       
        </div>
<div className='row'>
    <div className='col-12'> 
    <h3> Send Us Feedback </h3>
    </div>
    <div className='col-12 col-md-9'>
    <Form onSubmit={this.Onsubmit}>

<FormGroup row>
    

    <Label md={2} htmlFor='firstname'>First Name</Label>
<Col >
<Input type='text' id='firstname' name='firstname' value={this.state.firstname} onChange={this.InputHandler}/>
</Col>
    </FormGroup>


    


<FormGroup row>

<Label  md={2} htmlFor='lastname'> Last Name</Label>
<Col >
<Input type='text' id='lastname' name='lastname' value={this.state.lastname} onChange={this.InputHandler}/>
</Col>
</FormGroup>

<FormGroup row>
    
    <Label htmlFor='contact' md={2}> Contact No.</Label>
    <Col>
    <Input type='text' id='contact' name='contact' value={this.state.contact} onChange={this.InputHandler}/>

    </Col>
    </FormGroup>

<FormGroup row>

<Col md={{size:6,offset:2}}>
<FormGroup>

<Input type='checkbox' id='agree' name='agree' value={this.state.agree} onChange={this.InputHandler}/>
<strong>May we contact you ?</strong>
</FormGroup>
</Col>
<Col md={{size:3,offset:1}}>
<FormGroup>
<Input type='select' id='contactType' name='contactType' value={this.state.contactType} onChange={this.InputHandler}
>
<option>E-mail</option>
<option>Phone</option>

</Input>

    </FormGroup>

</Col>




    </FormGroup>

<FormGroup row>
<Col md={{size:6,offset:2}}>
<Label htmlFor='message'> Give A Feedback</Label>
<Input type='textarea' id='message' name='message' value={this.state.message} onChange={this.InputHandler}/>
</Col>
</FormGroup>

<FormGroup >
    <Col md={{size:6,offset:5}}>
<Button type='submit' color='secondary'> SUBMIT</Button>
</Col>
</FormGroup>
</Form>
    </div>





        </div>
        </div>
        )
        
}
}
export default Contact;