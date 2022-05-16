import {
    Flex,
        Box,
        FormControl,
        FormLabel,
        Input,
        Checkbox,
        Stack,
        Link,
        Button,
        Heading,
        Text,
        useColorModeValue,
        FormHelperText,
        FormErrorMessage,
        RadioGroup,
        Radio,
        HStack,
        VStack,
    } from '@chakra-ui/react';
    import { useState } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { login } from '../Redux/Actions/UserActions';
    import Errors from './Errors';
    import { Link as RouteLink } from "react-router-dom"
import { NavBarSimple } from './NavBarSimple';
import NavBarHome from './User/NavBarHome';
    const SignIn =()=> {
        const [email , setEmail]=useState('')
        const [password , setPassword]=useState('')
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const handleLog =(e)=>{
            e.preventDefault()
            dispatch(login({email,password},navigate))
        }
    
        const errors = useSelector(state=>state.errorReducer)
    
        return (
            <>
            <NavBarHome/> 
    <Box textAlign="center" fontSize="xl">  
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>  
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Stack align={'center'}>
    <Heading fontSize={'4xl'} color={useColorModeValue('bleub.500', 'discord.50')}>Connectez-vous !!</Heading>
    <Text fontSize={'lg'} color={'gray.600'}>
    Pour profiter de l'integralité de nos <Link color={useColorModeValue('bleub.500', 'discord.50')}>services</Link> ✌️
    </Text>
    </Stack>
    <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
    <Stack spacing={4}>
    
    <FormControl >
        <FormLabel htmlFor='email'>Addresse email </FormLabel>
        <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
    
        {/* {ErrorEmail &&
        <FormErrorMessage>Adresse Email requise !! </FormErrorMessage>
        } */}
    </FormControl>
    
    <FormControl  >
        <FormLabel htmlFor='password'>Mot de passe</FormLabel>
        <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
    
        
        {/* {!ErrorPassword ? (<FormHelperText></FormHelperText>) : (
        <FormErrorMessage>Mot de passe requis !!</FormErrorMessage>
        )} */}
    </FormControl>
    <Errors/>
<Stack spacing={10}>
<VStack
direction={{ base: 'column', sm: 'row' }}
align={'start'}

>

<Link as={RouteLink} to="/Register" color={useColorModeValue('bleub.500', 'discord.50')}>Créer un compte</Link>
<Text as='sup' pt={2}>si vous n'avez pas encore </Text>
</VStack>
    <Button
    onClick={(e)=>handleLog(e)}
    
    color={'white'}
    >
                    Connexion
    </Button>
                </Stack>
                </Stack>
            </Box>
            </Stack>
        </Flex>
    </Box>
    </>
        );
                }
    
    export default SignIn