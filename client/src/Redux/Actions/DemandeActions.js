import axios from "axios"
import { GETDEMANDE } from "../ActionsTypes/DemandeTypes"

export const getDemande=()=>async(dispatch)=>{
    
    try {
        const res = await axios.get('/api/demande/GetDemande') 
        dispatch({
            type: GETDEMANDE,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
// **************************************************************

export const addDemande=(id,navigate)=>async(dispatch)=>{
    const config = {
        headers : {
            authorization : localStorage.getItem('token')
                }
    }
    try {
    const res = await axios.post(`/api/demande/AddDemande/${id}`,id,config) 
    navigate('/Profile')
    dispatch(getDemande())
    } catch (error) {
        console.log(error)
    }
}
/********************************************************** */
export const updateDemande=(id)=>async(dispatch)=>{
    try {
        const res = await axios.put(`/api/demande/EditDemande/${id}`)
        dispatch(getDemande())
    } catch (error) {
        console.log(error)
    }
}
// ********************************************************************

export const deleteDemande=(id)=>async(dispatch)=>{
    try {
        const res = await axios.delete(`/api/demande/DeleteDemande/${id}`)
        dispatch(getDemande())
    } catch (error) {
        console.log(error)
    }
}

