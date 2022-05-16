import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    
    useColorModeValue,
    Tag,
    
  } from '@chakra-ui/react';
import React from 'react';



function DemandeCard ({el}) {

    return (
        <div>
        <Center py={6}>
  <Box
    maxW={'700px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.700')}
    boxShadow={'2xl'}
    rounded={'md'}
    p={6}
    overflow={'hidden'}>
    <Tag  mb={3} size="lg" fontWeight="bold"   color={useColorModeValue('bleub.500', 'discord.50')}>
    {el.status}
    </Tag>
    <Stack>
    
    <Heading color={useColorModeValue('bleub.500', 'discord.50')} fontSize={'2xl'} fontFamily={'body'}>
          {el.AnnonceId.titre} 
          
        </Heading>
      <Text color={'gray.500'}>
        {el.AnnonceId.description}
      </Text>
    </Stack>
    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
    
      <Stack direction={'column'} spacing={0} fontSize={'sm'}>
      <Text fontWeight={600}>Posted by</Text>
        <Text fontWeight={600}></Text>
        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
      </Stack>
    </Stack>
  </Box>
</Center> 

    </div>






    );
}

export default DemandeCard;