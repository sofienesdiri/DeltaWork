import NavBarFreelancer from "./NavBarFreelancer";
import {Flex, Box,FormControl,FormLabel,Input,Stack,Link,Button,Text,useColorModeValue} from '@chakra-ui/react';
    import { useState } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { useNavigate, useParams } from 'react-router-dom';
    import {  editpassword } from '../../Redux/Actions/UserActions';
    import Errors from '../Errors';
function EditPassword() {
        

const [oldpassword , setOldPassword]=useState('')
const [newPassword , setNewPassword]= useState('')
const {id}=useParams()
const dispatch = useDispatch()
const navigate = useNavigate()

const handleEdit =(e)=>{
    e.preventDefault()
    dispatch(editpassword({id,newPassword,oldpassword},navigate))
    
}

const errors = useSelector(state=>state.errorReducer)
    
    return (
        <div>
        <NavBarFreelancer/> 
    <Box textAlign="center" fontSize="xl">
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>  
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Stack align={'center'}>
    
    <Text fontSize={'lg'} color={'gray.600'}>
    Changer votre  <Link color={useColorModeValue('bleub.500', 'discord.50')}>mot de passe</Link> ✌️
    </Text>
    </Stack>
    <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
    <Stack spacing={4}>
    
    <FormControl >
        <FormLabel htmlFor='password' >Ancien mot de passe </FormLabel>
        <Input type="password" onChange={(e)=>setOldPassword(e.target.value)}/>
    </FormControl>
    
    <FormControl  >
        <FormLabel htmlFor='password'>Nouveau mot de passe</FormLabel>
        <Input type="password" onChange={(e)=>setNewPassword(e.target.value)}/>
    </FormControl>
    <Errors/>
    <Stack spacing={10}>
    <Button onClick={(e)=>handleEdit(e)} >
    Changer
    </Button>

                </Stack>
                </Stack>
            </Box>
            </Stack>
        </Flex>
    </Box>
        
        </div>
    );
}

export default EditPassword;



