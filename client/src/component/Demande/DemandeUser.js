import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    VStack,
    HStack,
  } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteDemande, updateDemande } from '../../Redux/Actions/DemandeActions';
import { Link, Link as RouteLink } from "react-router-dom" 
function DemandeUser({el}) {
const dispatch=useDispatch()
const handleEdit=(e)=>{
  e.preventDefault()
  dispatch(updateDemande(el._id))
}
const handleDelete=(e)=>{
  e.preventDefault()
  dispatch(deleteDemande(el._id))
}
    return (
      
      <Center py={2}>
        
        <Box
          maxW={'350px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          p={5}>

          <Flex justify={'center'} >
            <HStack>
            <Avatar size={'xl'} src={`\\${el.FreelancerId.image}`} alt={'Author'} css={{border: '2px solid white', }}
            />
            <Box>
              
              <Stack spacing={0} align={'center'} >
            
  <Link as={RouteLink} to={`/ViewProfilByClient/${el.FreelancerId._id}`}>
                  
                <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('bleub.500', 'discord.50')} >
                  {el.FreelancerId.nom} {el.FreelancerId.prenom}
  </Heading>
  </Link>
                <Text color={'gray.500'}>{el.FreelancerId.domaine}</Text>
              </Stack>
    
              <Stack direction={'row'} justify={'center'} spacing={12} mt={1}>

                 

                  <Button onClick={(e)=>handleEdit(e)}><CheckIcon w={4} h={4}/></Button> 
                  <Button onClick={(e)=>handleDelete(e)}><CloseIcon w={4} h={4}/></Button>

              </Stack>
            </Box>
            </HStack>
          </Flex>
        </Box>
        
      </Center>
    );
  }
  export default DemandeUser;