import {Button,Flex,FormControl,FormLabel,Heading, Input, Stack, useColorModeValue, Avatar, Center, Select,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { current, editUser } from '../../Redux/Actions/UserActions';


import NavBarFreelancer from './NavBarFreelancer';
export default function EditUser(){
    const {id}=useParams()
    const dispatch = useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
    dispatch(current(id))
    },[])
    const User = useSelector(state=>state.UserReducer.User)
    const [nom,setNom]=useState(User.nom)
    const [prenom,setPrenom]=useState(User.prenom)
    const [pays,setPays]=useState(User.pays)
    const [email,setEmail]=useState(User.email)
    const [numero,setNumero]=useState(User.numero)
    const [domaine,setDomaine]=useState(User.domaine)
    const [niveau,setNiveau]=useState(User.niveau)
    const [description,setDescription]=useState(User.description)
    const [technologie,setTechnologie]=useState(User.technologie)

    const[image,setImage]= useState(User.image)
    
    useEffect(()=>{
    setNom(User.nom)
    setPrenom(User.prenom)
    setPays(User.pays)
    setEmail(User.email)
    setNumero(User.numero)
    setDomaine(User.domaine)
    setNiveau(User.niveau)
    setDescription(User.description)
    setTechnologie(User.technologie)
    setImage(User.image)
    },[User])
    var data = new FormData()
    data.append("nom",nom)
    data.append("prenom",prenom)
    data.append("pays",pays)
    data.append("email",email)
    data.append("domaine",domaine)
    data.append("niveau",niveau)
    data.append("description",description)
    data.append("technologie",technologie)
    data.append("image",image)
    const handleEdit=(e)=>{
            e.preventDefault()
            dispatch(editUser(id,data))
            navigate('/ProfileClient')
    }
    const Freelancer = useSelector(state=>state.UserReducer.User)


return (
    <div>
        <NavBarFreelancer/>
        
    
<Flex minH={'100vh'}   align={'center'}justify={'center'}  bg={useColorModeValue('gray.50', 'gray.800')}>
<Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
<Heading  align={'center'} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} color={useColorModeValue('bleub.500', 'discord.50')}>
Modifier votre profil
</Heading>

<FormControl pt={2} id="userName">
            <FormLabel  color={useColorModeValue('bleub.500', 'discord.50')}>Mon icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
            <Center>
            <Avatar size="xl" src={`\\${Freelancer.image}`}>
            </Avatar>
            </Center>
            <Center w="full">
                {/* <Button w="full" type='file'>Changer l'icon</Button> */}
                <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>

 



            </Center>
            </Stack>
</FormControl>
        <FormControl id="userName" >
            <FormLabel color={useColorModeValue('bleub.500', 'discord.50')} >Nom</FormLabel>
            <Input value ={nom} onChange={(e)=>setNom(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>
        <FormControl id="userName" >
            <FormLabel color={useColorModeValue('bleub.500', 'discord.50')} >Prenom</FormLabel>
            <Input  value ={prenom} onChange={(e)=>setPrenom(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>
        <FormControl id="userName" >
        <FormLabel color={useColorModeValue('bleub.500', 'discord.50')}>Pays</FormLabel>
        <Select id='pays'  value ={pays} onChange={(e)=>setPays(e.target.value)} placeholder='Selectionner votre pays'>
            <option>Tunisie</option>
            <option>France</option>
            <option>Algerie</option>
            <option>Maroc</option>
            <option>Suisse</option>
            <option>Senegal</option>
        </Select>
        </FormControl>
        <FormControl id="email" >
            <FormLabel  color={useColorModeValue('bleub.500', 'discord.50')}>Adresse email</FormLabel>
            <Input  value ={email} onChange={(e)=>setEmail(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="email" />
        </FormControl>
            
<Stack spacing={6} direction={['column', 'row']}>
<Button   w="full" onClick={()=>navigate('/ProfileClient')}>
            Annuler
</Button>
<Button   onClick={(e)=>handleEdit(e)}  w="full" >
            Modifier
</Button>
        </Stack>


</Stack>
</Flex>
</div>
);
}