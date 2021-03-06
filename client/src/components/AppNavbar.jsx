import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Stack,
  useMediaQuery,
  Divider
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


import { useSelector } from 'react-redux';

import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';

import Register from './Register';
import SignIn from './SignIn';
import SignOut from './SignOut';

const AppNavbar = () => {

  const { isAuthenticated } = useSelector(state => state.auth);

  const [isLargerThan48em] = useMediaQuery("(min-width: 48em)");


  return (

    <Flex
      justifyContent='space-between'
      alignItems='center'
      position='fixed'
      minW='100%'
      bg={'inherit'}
      h={16}
      zIndex={4}
      boxShadow='lg'
    >
      {isLargerThan48em ?
        <Flex
          px={{ base: 4 }}
          py={{ base: 2 }}
          alignItems='center'
          justifyContent="space-between"
          my={2}
          mx='auto'
          width={{ base: '90%', lg: '75%' }}
        >
          <HStack spacing={4} flexShrink='1'>
            <Box fontWeight='bold' fontSize='lg'>
              <Link href='/'>Shopping List</Link>
            </Box>
            <ColorModeSwitcher />
          </HStack>

          {isAuthenticated ?
            <SignOut />
            :
            <HStack spacing={4} flexShrink='1' >
              <SignIn />
              <Register />
            </HStack>
          }
        </Flex>
        :
        <Flex
          px={{ base: 4 }}
          py={{ base: 2 }}
          alignItems='center'
          justifyContent="space-between"
          my={2}
          mx='auto'
          width={{ base: '90%', lg: '75%' }}
        >

          <ColorModeSwitcher size='sm' />

          <Box fontWeight='bold' fontSize='lg' >
            <Link href='/'>Shopping List</Link>
          </Box>


          {isAuthenticated ?
            <SignOut size='sm' />

            :

            <Menu >
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                size='sm'
              />
              <MenuList>
                <Stack p={2}>
                  <SignIn />

                  <Divider orientation="horizontal" mt={2} />
                  <Register variant='link' />
                </Stack>
              </MenuList>
            </Menu>

          }
        </Flex>
      }
    </Flex>
  );
};

export default AppNavbar;