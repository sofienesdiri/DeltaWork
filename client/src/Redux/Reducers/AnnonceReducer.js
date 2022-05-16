import { GETANNONCE, GETMYANNONCE, GETONEANNONCE } from "../ActionsTypes/AnnonceTypes";

const initialState = {
    Annonces : [],
    MyAnnonces : [],
    Annonce : {}
}

const AnnonceReducer=(state= initialState,action)=>{
    switch (action.type) {
        case GETANNONCE: return {...state,Annonces:action.payload.AllAnnonce} 
        case GETMYANNONCE : return {...state,MyAnnonces:action.payload.myAnnonce} 
        case GETONEANNONCE: return {...state,Annonce:action.payload.OneAnnonce} 
        
        default:
           return state
    }
}
export default AnnonceReducer