import {Flex,Container,Heading,Stack,Text,Button, Box, Grid, VStack,} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import CallAction from './Home/CallAction';
import C2g from './Home/Feature';
import Hero from './Home/Hero';
import Testimonial from './Home/Testimonial';
import Footer from './Home/Footer';
import Domaine from './Home/Domaine';
import { NavBarSimple } from './NavBarSimple';
import NavBarHome from './User/NavBarHome';
const Home=()=> {
    return (
      <>
      {/* <NavBarSimple/> */}
      <NavBarHome/>
      <Hero/>
      <C2g/>
      <Domaine/>
      <Testimonial/>
      <CallAction/>
      <Footer/>
      </>
    );
  }

  export default Home