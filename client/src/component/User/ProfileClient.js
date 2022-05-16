import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, IconButton, Input, Link, List, ListItem, SimpleGrid, SkeletonCircle, SkeletonText, Spacer, Square, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAnnonce } from '../../Redux/Actions/AnnonceActions';
import MyCardAnnonce from '../Annonce/MyCardAnnonce';
import NavBarClient from './NavBarClient';
import CardClient from './CardClient'
import { Link as RouteLink } from "react-router-dom"
import DemandeCard from '../Demande/DemandeCard';
import { getDemande } from '../../Redux/Actions/DemandeActions';
function ProfileClient() {
    const demandes = useSelector(state=>state.DemandeReducer.Demandes)
    const myAnnonces = useSelector(state=>state.AnnonceReducer.MyAnnonces)
    const Client = useSelector(state=>state.UserReducer.User)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getMyAnnonce())
        dispatch(getDemande())
    },[])
    let today = new Date();
    let dateLocale = today.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });
    return (
        <div>
    <NavBarClient/>

<Container maxW="container.xl">
<Box w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10} bg={useColorModeValue('white', 'gray.700')} >
<Text  fontSize='xl'>
{dateLocale}
</Text>
<Heading color={useColorModeValue('bleub.500', 'discord.50')}>Bonne Journée</Heading>
<Text fontSize='xl'>
{ Client.nom} <br/>
</Text>
</Box>
{/* ************************ */}



<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 4 }}>
{/* **********carte profile************** */}
<CardClient/>
{/* ********** input ************** */}
<Stack >
{/* **********menue ************** */}
<Box  w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={2} mb={10} >
<Tabs  colorScheme="dark">
<TabList>
<Tab>Mes Annonces</Tab>
</TabList>
<TabPanels>
<TabPanel>
    {/* ******a changer par component Card annonce ******************* */}
    {
    myAnnonces.map(el=><Link as={RouteLink} to={`/AnnonceDetail/${el._id}`} _hover={{textDecoration: 'none'}}><MyCardAnnonce key={Math.random()} el={el}/></Link>)
    }

{/* ************************* */}
</TabPanel>
</TabPanels>
</Tabs>
</Box>
</Stack>

</SimpleGrid>









</Container>



        </div>
    );
}

export default ProfileClient;