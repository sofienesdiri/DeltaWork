import {
Box,Stack,Text,VStack,HStack,Button,Heading,SimpleGrid,StackDivider,useColorModeValue,List,ListItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneAnnonce } from '../../Redux/Actions/AnnonceActions';
import NavBarFreelancer from '../User/NavBarFreelancer';
import NavBarClient from '../User/NavBarClient'
import { addDemande, getDemande } from '../../Redux/Actions/DemandeActions';
import DemandeUser from '../Demande/DemandeUser'
import { getOneUser } from '../../Redux/Actions/UserActions';

const CardDetail=()=>{
const dispatch = useDispatch()
const navigate = useNavigate()
const {id} = useParams()
const [loading,setLoading] = useState(true)
useEffect(()=>{  
  dispatch(getOneAnnonce(id))
  dispatch(getDemande())  
  },[])
  
const oneAnnonce = useSelector(state=>state.AnnonceReducer.Annonce)
const User = useSelector(state=>state.UserReducer.User)
const Demandes = useSelector(state=>state.DemandeReducer.Demandes)
const oneUser = useSelector(state=>state.UserReducer.oneUser)
const [status,setStatus] =useState('')
const handleAdd=()=>{
dispatch(addDemande(id,navigate))
}
useEffect(()=>{   
  Demandes.map(el=> (User._id === el.FreelancerId._id && oneAnnonce._id === el.AnnonceId._id )&&
  setStatus(el.status))
  dispatch(getOneUser(oneAnnonce.client))
  setLoading(false)
},[Demandes,User])

return(
<>
{
User.role == "Freelancer" ? <NavBarFreelancer/> : <NavBarClient/>
}

<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 4, md: 10 }} py={{ base: 18, md: 4 }}>
<Box boxShadow='lg' w="800px" bg={useColorModeValue('white', 'gray.900')} rounded={'lg'}p={6}>
<Box bg={useColorModeValue('white', 'gray.700')} maxWidth="2xl" mx="auto" p={{base: '6',md: '8',}}rounded={{sm: 'lg',}}shadow={{md: 'base',}}>

{/* *********************************** */}

<Stack spacing={{ base: 6, md: 10 }}>
<Box as={'header'}>
<Heading
lineHeight={1.1}
fontWeight={600}

color={useColorModeValue('bleub.500', 'discord.50')}>
{oneAnnonce.titre}
</Heading>
<Text
color={useColorModeValue('gray.900', 'gray.400')}
fontWeight={300}
fontSize={'2xl'}>
{oneAnnonce.dateAnnonce}
</Text>
</Box>

<Stack
spacing={{ base: 4, sm: 6 }}
direction={'column'}
divider={
<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}>

<Box>
    <Text fontSize={{ base: '16px', lg: '18px' }} color={useColorModeValue('bleub.500', 'discord.50')} fontWeight={'500'}
        mb={'4'}> 
    Description :
    </Text>
    <SimpleGrid  spacing={10}>
    <Text fontSize={'lg'}>
    {oneAnnonce.description}
    </Text>
    </SimpleGrid>
</Box>
{/* ******************* */}
<Box>
    <Text fontSize={{ base: '16px', lg: '18px' }} color={useColorModeValue('bleub.500', 'discord.50')} fontWeight={'500'}
        mb={'4'}> 
    Budget:
    </Text>
    <SimpleGrid  spacing={10}>
    <Text fontSize={'lg'}>
    {oneAnnonce.budget} {'DT'}
    </Text>
    </SimpleGrid>
</Box>
{/* ******************* */}
<Box>
<Text fontSize={{ base: '16px', lg: '18px' }} color={useColorModeValue('bleub.500', 'discord.50')} fontWeight={'500'}
        mb={'4'}> 
Details du Job :
</Text>
<SimpleGrid  spacing={10}>
<List spacing={2}>
<ListItem>
<HStack>
<Text as={'span'} fontWeight={'bold'}>
  Niveau :{' '} 
</Text>
<Text>{oneAnnonce.niveau} </Text>
</HStack>
{/* ************* */}
<HStack>
<Text as={'span'} fontWeight={'bold'}>
Durée:{' '}
</Text>
<Text>{oneAnnonce.duree} {"Mois"}</Text>
</HStack>
{/* ******************** */}
<HStack>
<Text as={'span'} fontWeight={'bold'}>
Domaine:{' '}
</Text>
<Text>{oneAnnonce.domaine} </Text>
</HStack>
{/* **************************** */}
</ListItem>
</List>
</SimpleGrid> 
</Box>
{/* ******************************** */}
<Box>
<Text fontSize={{ base: '16px', lg: '18px' }} color={useColorModeValue('bleub.500', 'discord.50')} fontWeight={'500'}
        mb={'4'}>
Technologie
</Text>
<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
{oneAnnonce.technologie}
</SimpleGrid>
</Box>
{/* ******************* */}
<Box>
<Text fontSize={{ base: '16px', lg: '18px' }} color={useColorModeValue('bleub.500', 'discord.50')} fontWeight={'500'}
        mb={'4'}> 
Information sur le client:
</Text>
<SimpleGrid  spacing={10}>
<List spacing={2}>
<ListItem>
<HStack>
<Text as={'span'} fontWeight={'bold'}>
  Nom/Prenom :{' '} 
</Text>
<Text>{oneUser.nom} {oneUser.prenom} </Text>
</HStack>
{/* ************* */}
<HStack>
<Text as={'span'} fontWeight={'bold'}>
pays:{' '}
</Text>
<Text>{oneUser.pays}</Text>
</HStack>
{/* ******************** */}
<HStack>
<Text as={'span'} fontWeight={'bold'}>
Email:{' '}
</Text>
<Text>{oneUser.email} </Text>
</HStack>
{/* **************************** */}
</ListItem>
</List>
</SimpleGrid> 
</Box>
{/* ******************************************** */}

</Stack>

{

  loading === false && User?
  (
User.role=='Freelancer' && 
(
status == '' ?
 <Button
onClick={handleAdd}
>
POSTULER
</Button>
: status == 'Acceptée' ?
<Button  loadingText='Submitting' colorScheme='teal' variant='outline' >
    Acceptée
  </Button>
: 
<Button isLoading loadingText='En attente' colorScheme='teal' variant='outline' spinnerPlacement='start'>En attente</Button>
  ))
  :

   <Text>Mazel</Text>
}
</Stack>

{/* *************************************** */}
</Box>

</Box>

<Box  pl={40}>
{User.role === 'Client' && 
Demandes.map(el=> oneAnnonce._id === el.AnnonceId._id && 
<Box key={Math.random()} w="400px" boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10}>
<Text fontWeight={'bold'}>Liste des postulants : </Text>
<DemandeUser key={el._id} el={el}/>
</Box>
)}
</Box>
</SimpleGrid>
</>
)
}
export default CardDetail
