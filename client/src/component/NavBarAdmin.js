import { ReactNode } from 'react';
import {Box,Flex,Avatar,HStack,Link,IconButton,Button,Menu,MenuButton,MenuList,MenuItem,MenuDivider,useDisclosure,useColorModeValue,Stack, Text,} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, logout } from '../Redux/Actions/UserActions';
import { Link as RouteLink } from "react-router-dom"






export default function NavBarAdmin() {
const { isOpen, onOpen, onClose } = useDisclosure();
const dispatch = useDispatch()
const navigate = useNavigate()
const Freelancer = useSelector(state=>state.UserReducer.User)
const handleDelete =(e)=>{
e.preventDefault()
dispatch(deleteUser (Freelancer._id ))
navigate('/')
}
return (
<>
<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
<IconButton
size={'md'}
icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
aria-label={'Open Menu'}
display={{ md: 'none' }}
onClick={isOpen ? onClose : onOpen}
/>
<HStack spacing={8} alignItems={'center'}>
<Box><Link as={RouteLink} to={"/Admin"}>ΔW</Link></Box>


</HStack>

<Flex alignItems={'center'}>
    
<Menu>
<MenuButton
as={Button}
rounded={'full'}
variant={'link'}
cursor={'pointer'}
minW={0}>
<Avatar
size={'sm'}
src={
`\\${Freelancer.image}`
}
/>
</MenuButton>
{/* <ColorModeSwitcher justifySelf="flex-end" /> */}
<MenuList>
<Link as={RouteLink} to={`/EditPassword/${Freelancer._id}`}><MenuItem>Changer le mot de passe</MenuItem></Link>

<MenuDivider />
<MenuItem onClick={()=>{dispatch(logout());navigate('/')}}>Deconnexion</MenuItem>
</MenuList>
</Menu>
</Flex>
</Flex>

{isOpen ? (
<Box pb={4} display={{ md: 'none' }}>
<Stack as={'nav'} spacing={4}>
{/* {Links.map((link) => (
<NavLink key={link}>{link}</NavLink>
))} */}
<Link as={RouteLink} to="/Profile" ><Button>Profile</Button></Link>
<Link as={RouteLink} to="/ListAnnonces"><Button>Annonce</Button></Link>
</Stack>
</Box>
) : null}
</Box>

</>
);
}