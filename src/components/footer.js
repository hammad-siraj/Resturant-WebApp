import React from 'react';
import {Link} from 'react-router-dom'
 const Footer = (props)=>{

return(
<div className='footer'>


     <div className='container'>
<div className='row justify-content-center'>
 
         <div className='col-4 offset-1 col-sm-2'> 
<div className='list-unstyled'>
<li><Link  to='/home'>HOME</Link></li>
<li><Link  to='/aboutus'>ABOUT</Link></li>
<li><Link   to='/adress'>CONTACT US</Link>
</li></div></div>
<div className='col-7 col-sm-5'>
<div className='text-center'>
<h5> OUR ADDRESS</h5>
<address>
KHADDA MARKET PHASE-II <br/>
DEFENCE HOUSING AUTHORITY <br/>
KARACHI<br/>

<i className="fa fa-phone fa-lg"></i>: 0331-8955212<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:hammadsiraj420@gmail.com">
                         hammadsiraj420@gmail.com</a>
                  



</address>
</div>
</div>
<div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>

</div>

<div className='row justify-content-center'></div>
<div className='col-auto'>
<p> @ copyright 2019 AL HAMMAD RESTURANT</p>
     </div>
                </div>
                               </div>





)

}

export default Footer;
