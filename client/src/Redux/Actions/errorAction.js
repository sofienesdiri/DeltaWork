import { ALERT_ERROR, CLEAR_ERROR } from "../ActionsTypes/errorTypes"

export const alertError=(msg)=>(dispatch)=>{
    try {
        const id = Math.random()
        dispatch({
            type:ALERT_ERROR,
            payload :{msg,id}
        })
        setTimeout(()=>{
            dispatch({
                type:CLEAR_ERROR,
                payload : id
            })
        },3000);
    } catch (error) {
    console.log(error)
    }
}