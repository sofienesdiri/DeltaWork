
import axios from "axios"
import { GETANNONCE, GETMYANNONCE, GETONEANNONCE } from "../ActionsTypes/AnnonceTypes"

export const getAnnonce=()=>async(dispatch)=>{
    
    try {
        const res = await axios.get('/api/annonce/GetAnnonce') 
        dispatch({
            type: GETANNONCE,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const getOneAnnonce=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/annonce/GetOneAnnonce/${id}`)
        dispatch({
            type: GETONEANNONCE,
            payload : res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getMyAnnonce=()=>async(dispatch)=>{
    const config = {
        headers : {
        authorization : localStorage.getItem('token')
                }
    }
    
    try {
        const res = await axios.get('/api/annonce/GetMyAnnonce',config)
        dispatch({
            type:GETMYANNONCE,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
// ****************************************
export const addAnnonce=(newAnnonce,navigate)=>async(dispatch)=>{
    const config = {
        headers : {
        authorization : localStorage.getItem('token')
                }
    }
    try {
    const res = await axios.post('/api/annonce/AddAnnonce',newAnnonce,config)  
    navigate('/ProfileClient')
    } catch (error) {
        console.log(error)
    }
}
// ****************************************
export const updateAnnonce=(id,data)=>async(dispatch)=>{
    try {
        const res = await axios.put(`/api/annonce/UpdateAnnonce/${id}`,data) 
        dispatch(getAnnonce())
    } catch (error) {
        console.log(error)
    }
}
// *********************************************
export const deleteAnnonce=(id)=>async(dispatch)=>{
    try {
        const res = await axios.delete(`/api/annonce/DeleteAnnonce/${id}`)
        dispatch(getMyAnnonce())
    } catch (error) {
        console.log(error)
    }
}