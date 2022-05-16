import { ReactNode } from 'react';
import {
Box,
Flex,
Avatar,
Link,
Button,
Menu,
MenuButton,
MenuList,
MenuItem,
MenuDivider,
useDisclosure,
useColorModeValue,
Stack,
useColorMode,
Center,
HStack,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, deleteUser } from '../../Redux/Actions/UserActions';
import { Link as RouteLink } from "react-router-dom"
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
const NavLink = ({ children }: { children: ReactNode }) => (
    
<Link px={2} py={1} rounded={'md'} _hover={{
textDecoration: 'none',
bg: useColorModeValue('gray.200', 'gray.700'),
}}
href={'#'}>
{children}
</Link>
);

export default function NavBarFreelancer() {
const { colorMode, toggleColorMode } = useColorMode();
const { isOpen, onOpen, onClose } = useDisclosure();
const dispatch = useDispatch()
const navigate = useNavigate()
const User = useSelector(state=>state.UserReducer.User)
const handleDelete =(e)=>{
e.preventDefault()
dispatch(deleteUser (User._id ))
navigate('/')
}
return (
<>

<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
    <HStack>
<Box>ΔW</Box>
<Link p={2} as={RouteLink} to='/ProfileClient'> <NavLink>Profile</NavLink></Link>
<Menu>
<MenuButton  rightIcon={<ChevronDownIcon />}>
<NavLink >Annonces</NavLink>
</MenuButton><MenuList>
<Link as={RouteLink} to='/ListAnnonces'><MenuItem>Voir les annonces </MenuItem></Link>
<Link as={RouteLink} to='/AddAnnonce'><MenuItem>Creer une annonce</MenuItem></Link>
</MenuList>
</Menu>
</HStack>
{/* <Link as={RouteLink} to='/ListAnnonces'>  <Button colorScheme='teal' variant='ghost'>Annonces</Button></Link> */}

<Flex alignItems={'center'}>
<Stack direction={'row'} spacing={7}>


<Menu>
<MenuButton
as={Button}
rounded={'full'}
variant={'link'}
cursor={'pointer'}
minW={0}>
<Avatar
size={'sm'}
src={User.image}
/>
</MenuButton>
<ColorModeSwitcher justifySelf="flex-end" />
<MenuList alignItems={'center'}>
<br />
<Center>
<Avatar
size={'2xl'}
src={User.image}
/>
</Center>
<br />
<Center>
<p>{User.nom} {User.prenom}</p>
</Center>
<br />
<MenuDivider />
<MenuItem onClick={handleDelete}>Supprimer le compte</MenuItem>
<Link as={RouteLink} to={`/EditPassword/${User._id}`}><MenuItem>Changer le mot de passe</MenuItem></Link>
<Link as={RouteLink} to={`/EditClient/${User._id}`}><MenuItem>Editer profile</MenuItem></Link>
<MenuItem onClick={()=>{dispatch(logout());navigate('/')}}>Déconnexion</MenuItem>
</MenuList>
</Menu>
</Stack>
</Flex>
</Flex>
</Box>
</>
);
}