import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/react'
import {useSelector} from 'react-redux'
const Errors =()=> {
    const errors = useSelector(state=>state.errorReducer)
    return(
        <div>
            {
                errors.map(el=>
<Alert status='error'>
<AlertIcon />
<AlertDescription>{el.msg}</AlertDescription> 
</Alert>)
            }
        </div>
    )
}

export default Errors