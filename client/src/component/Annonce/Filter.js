import { Box, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Select, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"


const Filter=({setDomaine,niveau,setNiveau,setPays,setPrix,setDuree})=>{
    
    return(
        <div>
            <Box  pb={5} width='400px' ml='40px'>
            <Text fontSize={'2xl'}color={useColorModeValue('bleub.500', 'discord.50')}  fontFamily={'body'}>Filter par</Text>
            <FormControl mt={5}>
            <FormLabel htmlFor='country' >Domaine d'activité</FormLabel>
                <Select placeholder="Domaine d'activité"  onChange={(e)=>setDomaine(e.target.value)} width="300px">
                    <option>Developpement mobile </option>
                    <option>Developpement web  </option>
                    <option>DevOps </option>
                    <option>Data Science </option>
                    <option>Developpement jeux video </option> 
                </Select>
            </FormControl>
            <RadioGroup mt={5} onChange={setNiveau} value={niveau}>
                <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                Niveau
                </Heading>
                    <Radio value='Débutant'>Débutant</Radio>
                    <Radio value='Intermediaire'>Intermediaire</Radio>
                    <Radio value='Professionel'>Professionel</Radio>
                </Stack>
            </RadioGroup>
            <RadioGroup mt={5} onChange={setPrix}>
                <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                   Prix
                </Heading>
                    <Radio value='100'> + 100dt</Radio>
                    <Radio value='500'> + 500dt </Radio>
                    <Radio value='1000'> + 1000dt</Radio>
                    <Radio value='3000'> + 3000dt</Radio>
                </Stack>
            </RadioGroup>
            <RadioGroup mt={5} onChange={setDuree}>
                <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                   Durée du project
                </Heading>
                    <Radio value='1'> + 1 mois</Radio>
                    <Radio value='3'> + 3 mois </Radio>
                    <Radio value='6'> + 6 mois</Radio>
                    <Radio value='12'> + 12 mois</Radio>
                </Stack>
            </RadioGroup>
            <FormControl mt={5}>
            <FormLabel htmlFor='country' >Emplacement du client</FormLabel>
                <Select placeholder="Emplacement du client"  onChange={(e)=>setPays(e.target.value)} width="300px">
                <option>Tunisie</option>
                <option>France</option>
                <option>Algerie</option>
                <option>Maroc</option>
                <option>Suisse</option>
                <option>Senegal</option>
                </Select>
            </FormControl>
            </Box>
        </div>
    )


}
export default Filter