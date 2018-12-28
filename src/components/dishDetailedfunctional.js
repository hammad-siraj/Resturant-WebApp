import React from 'react';


function RenderComments({comments}){
if(comments!=null){
    return 
}
else{return(<div></div>)}

}
 function RenderDish({dish}){
if(dish!=null){
    return

}
else{return(<div></div>)}

 }


 export default function DishDetailed(props){

return(
<div>
    <RenderDish comments={props.dishes}/>
<RenderComments dish={props.dishes}/>


</div>

)

 }