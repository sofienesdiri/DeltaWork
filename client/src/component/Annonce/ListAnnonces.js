import { Box, Container, HStack, Input, Link, SimpleGrid, Stack, Text, useColorModeValue} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAnnonce } from "../../Redux/Actions/AnnonceActions"
import CardAnnonce from "./CardAnnonce"
import Filter from "./Filter"
import { Link as RouteLink } from "react-router-dom" 
import NavBarFreelancer from "../User/NavBarFreelancer"
import NavBarClient from "../User/NavBarClient"
const ListAnnonces=({rech})=>{
    
    useEffect(()=>{
        dispatch(getAnnonce())
    },[])

    const Annonces = useSelector(state=>state.AnnonceReducer.Annonces)
    const User = useSelector(state=>state.UserReducer.User)
    const dispatch= useDispatch()
    
    /*Pour faire le filtre*/
    const [search,setSearch] = useState(rech) 
    const [domaine,setDomaine] = useState('')
    const [niveau,setNiveau] = useState('')
    const [prix,setPrix] = useState('0')
    const [pays,setPays] = useState('')
    const [duree,setDuree] = useState(0)

    return(
        
        <div>
            {
                User.role == "Freelancer" ? <NavBarFreelancer/> : <NavBarClient/>
            }
        
        <Container maxW="container.2xl">           
       <SimpleGrid columns={{ base: 1, lg: 2 }} py={{ base: 18, md: 8 }}>          
        

        <Filter setDomaine={setDomaine} setNiveau={setNiveau} niveau={niveau} setPays={setPays} setPrix={setPrix} setDuree={setDuree}/>





        {/* ***************************************************** */}
        <Stack   spacing={{ base: 6, md: 10 }} >
        <Stack >
        <Text fontSize={'2xl'}color={useColorModeValue('bleub.500', 'discord.50')}  fontFamily={'body'}>Rechercher une annonce </Text>
        
        <Input placeholder='Rechercher par Titre' onChange={(e)=>setSearch(e.target.value)}/>
        </Stack> 

        <Box w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10}  >   
                { Annonces.filter(el=>(el.titre.toUpperCase().includes(search.toUpperCase())))
                .filter(el=>(el.niveau.toLowerCase()).includes(niveau.toLowerCase()))
                .filter(el=>(el.domaine.toLowerCase()).includes(domaine.toLowerCase()))
                .filter(el=>(el.client.pays.toLowerCase()).includes(pays.toLowerCase()))
                .filter(el=>(el.budget > parseInt(prix)))
                .filter(el=>(el.duree > parseInt(duree)))

                .map(el=><Link as={RouteLink} to={`/AnnonceDetail/${el._id}`} key={el._id}><CardAnnonce  el={el}/></Link>) }


        </Box>
        </Stack>

</SimpleGrid>
  </Container>
            
            
        </div>
    )
}
export default ListAnnonces