import { GETDEMANDE } from "../ActionsTypes/DemandeTypes"

const initialState = {
    Demandes : [],

}

const DemandeReducer=(state= initialState,action)=>{
    switch (action.type) {
        case GETDEMANDE: return {...state,Demandes:action.payload.Demandes}         
        default: return state
    }
}

export default DemandeReducer