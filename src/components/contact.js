import React ,{Component}from 'react'
import {Form,FormGroup,Col,Input,Label,Button,Row} from 'reactstrap'
import {LocalForm, Control,Errors} from 'react-redux-form'
const validEmail = (val)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const required =(val)=> val && val.length;
const minNum =(length)=>(val)=> (val) && (val.length>=length);
const maxNum =(length)=>(val)=> !(val) ||(val.length<=length);
const isNumber =(val)=> !isNaN(Number(val))
class Contact extends React.Component {
constructor(props){
super(props);
// this.state= [{

// firstname:'',
// lastname:'',
// contact:'',
// agree:false,
// contactType:'tel.',
// message:'',


// }]

}
// InputHandler =(event)=>{
//     const target =event.target;
// const value = target.type=== 'checkbox' ? target.checked:target.value;
// const name = target.name;
// this.setState({
// [name]:value,


// })


// }

Onsubmit = (values)=>{
    console.log(JSON.stringify(values));
   // alert(JSON.stringify(this.state));
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
<LocalForm onSubmit={(values)=>this.Onsubmit(values)}>
<Row className="form-group">     

    <Label md={2} htmlFor='firstname'>First Name</Label>
<Col >
<Control.text model=".firstname" name='firstname' placeholder='firstname' className='form-control'
validators={{
    required,minNum:minNum(3),maxNum:maxNum(15),validEmail,isNumber
}}
/>
</Col>
<Errors className='text-danger'
model=".firstname"
show='touched'
messages={{
    required:'Required',
    maxNum:' should be less than 15 char',

    minNum:'should be greater than 3 char'
}}


/> 

    </Row>


    


    <Row className="form-group">

<Label  md={2} htmlFor='lastname'> Last Name</Label>
<Col >
<Control.text model=".lastname" name='lastname' placeholder='lastname' className='form-control'
validators={{
    required,
    maxNum:maxNum(15),
    minNum:minNum(3)

}}

/>
</Col>

<Errors className='text-danger'
model=".lastname"
show='touched'
messages={{
    required:'Required',
    maxNum:' should be less than 15 char',

    minNum:'should be greater than 3 char'
}}


/> 

    </Row>

        <Row className="form-group">
    
    <Label htmlFor='contact' md={2}> Contact No.</Label>
    <Col>
<Control.text model=".contact" name='contact' placeholder='contact no.' className='form-control'
validators={{
    isNumber
}}
/>
 

    </Col>
    <Errors 
    className='text-danger'
    model='.contact'
    show='touched'
    messages={{
        isNumber:'should be integer '
    }}
    />
    </Row>

    <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
     
    <Row className="form-group">

<Col md={{size:6,offset:2}}>
<Control.checkbox model=".agree" name='agree'  className='form-control'/>

<strong>May we contact you ?</strong>
</Col>
<Col md={{size:3,offset:1}}>
<Control.select model='.contactType' name='contactType'>

<option>E-mail</option>
<option>Phone</option>

</Control.select>

</Col>




    </Row>

    <Row className="form-group">
<Col md={{size:6,offset:2}}>
<Label htmlFor='message'> Give A Feedback</Label>
<Control.textarea model='.message' name='message' cols={20}/>
</Col>
    </Row>

    <Row className="form-group" >
    <Col md={{size:6,offset:5}}>
<Button type='submit' color='secondary'> SUBMIT</Button>
</Col>
    </Row>
</LocalForm>
    </div>





        </div>
        </div>
        )
        
}
}
export default Contact;