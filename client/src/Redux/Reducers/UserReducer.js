import { CURRENT, FAIL, GETONEUSER, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionsTypes/UserTypes"

const initialState = {
User : {},
errors : [],
oneUser : {},
Users : []
}
const UserReducer =(state=initialState,action)=>{
switch (action.type) {
case REGISTER : 
localStorage.setItem('token',action.payload.token)
return {...state,User : action.payload.newUser}
case FAIL : 
return {...state,errors:action.payload.errors,User:null}
case LOGIN : 
localStorage.setItem('token',action.payload.token)
return {...state, User : action.payload.found}
case CURRENT :
return {...state, User : action.payload} 
case LOGOUT :
localStorage.removeItem('token')
return {...state, User : null} 
case GETONEUSER :
    return {...state,oneUser:action.payload.OneUser}
    case GETUSERS :
    return {...state,Users:action.payload.Users}
default: return state
}

}
export default  UserReducer