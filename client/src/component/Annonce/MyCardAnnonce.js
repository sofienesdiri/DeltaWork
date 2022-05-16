import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    HStack,
    Button,
    Link,
  } from '@chakra-ui/react';
  import { Link as RouteLink } from "react-router-dom"
  import { EditIcon,CloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnnonce } from '../../Redux/Actions/AnnonceActions';
const CardAnnonce=({el})=>{
  const User = useSelector(state=>state.UserReducer.User)
  const dispatch=useDispatch()
  
  const handleDelete=(e)=>{
      e.preventDefault()
      dispatch(deleteAnnonce(el._id))
  }
 console.log(el)
    return(
        <div>
    <Center py={6}>
      <Box maxW={'700px'} w={'full'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'2xl'}rounded={'md'} p={6} overflow={'hidden'}>
        <Stack>
          
            
            <HStack spacing='20px' ml='400'>
                <Link as={RouteLink} to={`/EditAnnonce/${el._id}`} ><Button size='xs'><EditIcon/></Button></Link>
                <Button size='xs' onClick={(e)=>handleDelete(e)}><CloseIcon/></Button>
            </HStack>
          
        
        <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              {el.titre}
            </Heading>
          <Text color={'gray.500'}>
            {el.description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Posted by</Text>
            <Text fontWeight={600}>{el.client.nom} {el.client.prenom}</Text>
            <Text color={'gray.500'}>{el.dateAnnonce}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center> 

        </div>
    )
}
export default CardAnnonce