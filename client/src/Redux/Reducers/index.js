import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import errorReducer from './errorReducer'
import AnnonceReducer from './AnnonceReducer'
import DemandeReducer from './DemandeReducer'
const rootReducer = combineReducers({UserReducer,errorReducer,AnnonceReducer,DemandeReducer })

export default rootReducer