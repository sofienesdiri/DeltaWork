import { Box, Button, Container, Input, Select, Stack, Text, useColorModeValue, useBreakpointValue, Heading, FormControl, FormLabel, Textarea, FormHelperText, Flex, HStack, NumberInput, NumberInputField, NumberInputStepper  } from '@chakra-ui/react';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAnnonce } from '../../Redux/Actions/AnnonceActions';
import NavBarClient from '../User/NavBarClient';
const AddAnnonce=()=> {
const [titre,setTitre]=useState("")
const [description,setDescription]=useState("")
const [technologie,setTechnologie]=useState("")
const [budget,setBudget]=useState(0)
const [niveau,setNiveau]=useState("")
const [domaine,setDomaine] = useState("")
const [duree,setDuree] = useState(0)
const dispatch = useDispatch()
const navigate=useNavigate()
const handleAdd=(e)=>{
    e.preventDefault()
    dispatch(addAnnonce({titre,description,technologie,budget,niveau,domaine,duree},navigate))
    
}
return (
<div>
    
    <NavBarClient/>
    
            

<Flex minH={'100vh'}   align={'center'}justify={'center'}  bg={useColorModeValue('gray.50', 'gray.800')}>
<Stack spacing={4} w={'full'} maxW={'xl'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
<Stack  spacing={{ base: '4', md: '5' }} >
<Heading fontSize={'4xl'} align="center" color={useColorModeValue('bleub.500', 'discord.50')}>Creer une Annonce ! </Heading>
<Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
Rédiger une offre d'emploi attractive !!
</Text>

<FormControl>
  <FormLabel htmlFor='email'color={useColorModeValue('bleub.500', 'discord.50')}>Titre</FormLabel>
  <Input  onChange={(e)=>setTitre(e.target.value)} />
  <FormHelperText>Entrer le titre de l'annonce</FormHelperText>
</FormControl>

<FormControl id="name">
<FormLabel color={useColorModeValue('bleub.500', 'discord.50')}>Description de l'annonce</FormLabel>
<Textarea borderColor="gray.300" _hover={{ borderRadius: 'gray.300', }} onChange={(e)=>setDescription(e.target.value)} placeholder="message"/>
<FormHelperText>Decrivez vos besoins</FormHelperText>
</FormControl>
   
<FormControl>
  <FormLabel htmlFor='email' color={useColorModeValue('bleub.500', 'discord.50')}>Technologies</FormLabel>
  <Input  onChange={(e)=>setTechnologie(e.target.value)} />
  <FormHelperText>Entrer les technologies dont vous maitrisez</FormHelperText>
</FormControl>

<FormControl>
  <FormLabel htmlFor='email' color={useColorModeValue('bleub.500', 'discord.50')}>Budget</FormLabel>
  <Input  onChange={(e)=>setBudget(e.target.value)} />
  <FormHelperText>Entrer le budget</FormHelperText>
</FormControl>

<FormControl>
  <FormLabel htmlFor='email' color={useColorModeValue('bleub.500', 'discord.50')}>Durée du projet</FormLabel>
  <Input   onChange={(e)=>setDuree(e.target.value)}/>
  <FormHelperText>Nombre de mois</FormHelperText>
</FormControl>

<FormControl>
  <FormLabel htmlFor='country' color={useColorModeValue('bleub.500', 'discord.50')} >Domaine d'activité</FormLabel>
  <Select   placeholder="Selectionner votre domaine d'activité" value={domaine} onChange={(e)=>setDomaine(e.target.value)}>
    <option>Developpement mobile</option>
    <option>Developpement web</option>
    <option>DevOps</option>
    <option>Data Science</option>
    <option>Developpement jeux video</option> 
  </Select>
</FormControl>   
<FormControl>
  <FormLabel htmlFor='country' color={useColorModeValue('bleub.500', 'discord.50')} >Niveau</FormLabel>
  <Select   placeholder="Selectionner votre domaine d'activité"  value={niveau} onChange={(e)=>setNiveau(e.target.value)}>
    <option>Débutant </option>
    <option>Intermediaire</option>
    <option>Expert</option>
    
  </Select>
</FormControl>  


<Button onClick={(e)=>handleAdd(e)}>Poster</Button>
</Stack>
</Stack>   
</Flex> 

        </div>
    );
}

export default AddAnnonce;