import {Icon, Menu,Button, Container, Flex, Heading, MenuButton, MenuItem, MenuList, HStack,Box } from "@chakra-ui/react"
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const TopNav =( {title,onOpen} ) =>{
    return(
       <Box px="4" bg="white">
         <HStack maxW="70rem"  h="16" justify="space-between" mx="auto">
            <Icon  as={ FaBars } onClick={onOpen} display={{
                base:"block",
                lg:"none",
            }}/>
            
            <Heading  fontWeight="Medium" fontSize="28px">
                {title}
            </Heading>
            <Menu>
                <MenuButton >

                <Icon as={FaRegUser} fontSize="24px"/>


                 
                </MenuButton>
                <MenuList>
                    <MenuItem>Logout</MenuItem>
                    <MenuItem>Support</MenuItem>
                    
                </MenuList>
            </Menu>
        
    </HStack>
       </Box>
    )
}

export default TopNav