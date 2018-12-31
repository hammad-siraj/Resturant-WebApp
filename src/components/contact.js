import React from 'react'


const Contact =(props)=>{
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
    </div>
)

}
export default Contact;