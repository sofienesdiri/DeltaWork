import { Box, Container, Heading, Link, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouteLink } from "react-router-dom"

import { getAnnonce } from '../Redux/Actions/AnnonceActions';
import { getUsers } from '../Redux/Actions/UserActions';
import CardAnnonce from './Annonce/CardAnnonce';
import NavBarAdmin from './NavBarAdmin';
import CardUser from './User/CardUser';
function Admin() {
    const admin = useSelector(state=>state.UserReducer.User)
    const Annonces = useSelector(state=>state.AnnonceReducer.Annonces)
    const Users = useSelector(state=>state.UserReducer.Users)
    let today = new Date();
    let dateLocale = today.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAnnonce())
        dispatch(getUsers())
    },[Users,Annonces])
    return (
        <div>
        <NavBarAdmin/>
<Container maxW="container.2xl">
<Box w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10} bg={useColorModeValue('white', 'gray.700')} >
<Text  fontSize='xl'>
{dateLocale}
</Text>
<Heading color={useColorModeValue('bleub.500', 'discord.50')}>Bonne Journée</Heading>
<Text fontSize='xl'>
{ admin.nom} <br/>
</Text>
</Box>
{/* ************************ */}



<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 4 }}>
{/* **********carte profile************** */}
{/* <CardClient/> */}
{/* ********** input ************** */}
<Stack >
{/* **********menue ************** */}
<Box  w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={2} mb={10} >
<Tabs  colorScheme="dark">
<TabList>
<Tab>Listes des utilisateurs  </Tab>

<Tab>List des Annonces </Tab>
</TabList>
<TabPanels>
<TabPanel>
{ Users.map(el=><CardUser el={el}/>) }
{/* ************************* */}
</TabPanel>
<TabPanel>
{ Annonces.map(el=><CardAnnonce el={el}/>) }
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

export default Admin;