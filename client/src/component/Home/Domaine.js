import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  SimpleGrid,
  
} from "@chakra-ui/react";
const Domaine=()=>{
    return(
        <div>
          <Box p={4}>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      rounded="lg"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
        alignItems="center"
      justifyContent="center"
      >
        <Image
          h={56}
          fit="cover"
          src="/monitor.png"
          alt="avatar"
          m={"auto"}
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           Developpement Web
          </Link>
          
        </Box>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      rounded="lg"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          m={"auto"}
          mt={4}
          h={56}
          fit="cover"
          src="/natif.png"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
          Developpement Mobile
          </Link>
          
        </Box>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      rounded="lg"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
       m={"auto"}
          h={56}
          fit="cover"
          src="/data.png"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           Data Scientist
          </Link>
          
        </Box>
      </Box>
    </Flex>
    </SimpleGrid>
    <SimpleGrid pt={2} columns={{ base: 1, md: 3 }} spacing={10}>
    <Flex bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      rounded="lg"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
           m={"auto"}
          h={56}
          fit="cover"
          src="/dvops.png"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           DevOps
          </Link>
          
        </Box>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      rounded="lg"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          m={"auto"}
          h={56}
          fit="cover"
          src="/securitee.png"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
          Cyber-sécurité
          </Link>
          
        </Box>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      rounded="lg"
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          m={"auto"}
          h={56}
          fit="cover"
          src="/jeux.png"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           Developpement de jeux vidéo
          </Link>
          
        </Box>
      </Box>
    </Flex>
    
    </SimpleGrid>
    </Box>
        </div>
         );
}

export default Domaine