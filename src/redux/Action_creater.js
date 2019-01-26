import * as ActionTypes from './Action_types'


export const add_comment =(dishId,author,rating,comment)=>({
type: ActionTypes.ADD_COMMENT,
payload:{
    dishId:dishId ,
    author:author,
    comment:comment,
    rating:rating,
}
})