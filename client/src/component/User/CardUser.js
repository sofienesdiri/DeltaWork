import {Heading,Avatar,Box,Text,Stack, Button,Link,Badge, useColorModeValue, Divider, SimpleGrid, ListItem, List, VStack, StackDivider, CircularProgress, CircularProgressLabel, AvatarBadge, Flex, Icon, HStack, Wrap, Tag,} from '@chakra-ui/react'; 
import { GoVerified ,GoMail,GoDeviceMobile, GoPencil,GoGlobe,GoCalendar } from 'react-icons/go';  
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../Redux/Actions/UserActions';


    export default function SocialProfileSimple({el}) {
       const dispatch = useDispatch()
        const handleDelete =(e)=>{
            e.preventDefault()
            dispatch(deleteUser(el._id))
            
            }
        return (
<Box boxShadow='lg' w={'full'} bg={useColorModeValue('white', 'gray.900')} rounded={'lg'}p={6}>
<Box bg={useColorModeValue('white', 'gray.700')} maxWidth="2xl" mx="auto" p={{base: '6',md: '8',}}rounded={{sm: 'lg',}}shadow={{md: 'base',}}>
<Stack direction={{base: 'column',md: 'row',}} spacing={{base: '4',md: '10'}}>
<Avatar size="2xl" name="Samantha"src={el.image}>
<AvatarBadge borderWidth="4px" borderColor={'white'} insetEnd="3" bottom="3">
<Icon as={GoVerified} fontSize="2xl" color={useColorModeValue('bleub.500', 'discord.50')} />
</AvatarBadge> 
</Avatar>
{/* ************************* */}
<Box width="full" >
<Flex justifyContent="space-between" alignItems="center">
<Heading size="md" fontWeight="bold" letterSpacing="tight" marginEnd="6"
color={useColorModeValue('bleub.500', 'discord.50')}>
{el.nom} {el.prenom}
</Heading>

{/* *************************************************************** */}

<Button size="sm"  leftIcon={<Icon as={GoPencil}  marginStart="-1" />} onClick={(e)=>handleDelete(e)} >
effacer
</Button>

{/* *************************************************************** */}
</Flex>
<Text mt="1" fontWeight="medium">
{el.role} 
    </Text>
    <Stack spacing="1" mt="2">
    <HStack fontSize="sm">
        <Icon as={GoGlobe} color={useColorModeValue('bleub.500', 'discord.50')} />
        <Text>{el.pays} </Text>
    </HStack>
    <HStack fontSize="sm">
        <Icon as={GoMail} color={useColorModeValue('bleub.500', 'discord.50')} />
        <Text>{el.email} </Text>
    </HStack>
    </Stack>  
</Box>
</Stack>
{/* ************** */}





</Box>
</Box>
        );
    }