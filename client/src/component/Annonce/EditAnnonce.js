import { Box, Button, Container, Input, Select, Stack, Text, useColorModeValue, useBreakpointValue, Heading, FormControl, FormLabel, Textarea, FormHelperText  } from '@chakra-ui/react';
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneAnnonce, updateAnnonce } from '../../Redux/Actions/AnnonceActions';
import NavBarClient from '../User/NavBarClient';
const EditAnnonce=()=>{
    const Annonce = useSelector(state=>state.AnnonceReducer.Annonce)
    const [titre,setTitre]=useState(Annonce.titre)
    const [description,setDescription]=useState(Annonce.description)
    const [technologie,setTechnologie]=useState(Annonce.technologie)
    const [budget,setBudget]=useState(Annonce.budget)
    const [niveau,setNiveau]=useState(Annonce.niveau)
    const [domaine,setDomaine] = useState(Annonce.domaine)
    const [duree,setDuree] = useState(Annonce.duree)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const {id} = useParams()
    useEffect(()=>{
      dispatch(getOneAnnonce(id))
        
    },[])
    useEffect(()=>{
      setTitre(Annonce.titre)
      setDescription(Annonce.description)
      setTechnologie(Annonce.technologie)
      setBudget(Annonce.budget)
      setNiveau(Annonce.niveau)
      setDomaine(Annonce.domaine)
      setDuree(Annonce.duree)
      },[Annonce])

    const handleEdit=(e)=>{
        e.preventDefault()
        dispatch(updateAnnonce(id,{titre,description,technologie,budget,niveau,domaine,duree}))
        navigate('/ProfileClient')
    }
    return(
        <div>
            <NavBarClient/>
    
            

    <Box  w={'full'} bg={useColorModeValue('white', 'gray.900')}ounded={'lg'}p={6}>
    <Container boxShadow='lg' py={{ base: '16', md: '1' }}>
    <Stack spacing={{ base: '4', md: '5' }} >
    <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })} align="center">Editer votre annonce ! </Heading>
    
    <FormControl>
      <FormLabel htmlFor='email'>Titre</FormLabel>
      <Input  value={titre} onChange={(e)=>setTitre(e.target.value)} />
      <FormHelperText>Entrer le titre de l'annonce</FormHelperText>
    </FormControl>
    
    <FormControl id="name">
    <FormLabel>Description</FormLabel>
    <Textarea value={description} borderColor="gray.300" _hover={{ borderRadius: 'gray.300', }} onChange={(e)=>setDescription(e.target.value)} placeholder="message"/>
    <FormHelperText>Decrivez votre parcours scolaire,experience Professionel, vos atous... </FormHelperText>
    </FormControl>
       
    <FormControl>
      <FormLabel htmlFor='email'>Technologies</FormLabel>
      <Input  value={technologie} onChange={(e)=>setTechnologie(e.target.value)} />
      <FormHelperText>Entrer les technologies que vous maitrisez</FormHelperText>
    </FormControl>
    
    <FormControl>
      <FormLabel htmlFor='email'>Budget</FormLabel>
      <Input  value={budget} onChange={(e)=>setBudget(e.target.value)} />
      <FormHelperText>Entrer le budget</FormHelperText>
    </FormControl>
    <FormControl>
      <FormLabel htmlFor='email'>Durée</FormLabel>
      <Input  value={duree} onChange={(e)=>setDuree(e.target.value)} />
      <FormHelperText>Entrer la durée du projet</FormHelperText>
    </FormControl>
    <FormControl>
      <FormLabel htmlFor='country' >Domaine d'activité</FormLabel>
      <Select   placeholder="Selectionner votre domaine d'activité" value={domaine} onChange={(e)=>setDomaine(e.target.value)}>
        <option>Developpement mobile </option>
        <option>Developpement web  </option>
        <option>DevOps </option>
        <option>Data Science </option>
        <option>Developpement jeux video </option> 
      </Select>
    </FormControl>   
    <FormControl>
      <FormLabel htmlFor='country' >Niveau</FormLabel>
      <Select   placeholder="Selectionner votre domaine d'activité"  value={niveau} onChange={(e)=>setNiveau(e.target.value)}>
        <option>Débutant </option>
        <option>Intermediaire</option>
        <option>Expert</option>
        
      </Select>
    </FormControl>  
    
    
    <Button onClick={(e)=>handleEdit(e)}>Editer</Button>
    </Stack>
    </Container>   
    </Box> 
        </div>
    )
}
export default EditAnnonce