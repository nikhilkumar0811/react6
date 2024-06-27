import { Card, HStack, Stack,FormControl,FormLabel,Textarea,Checkbox,Box,Text,Input,Button } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
    <Stack spacing={2.8}>

    <Text fontWeight="medium" fontSize="sm">
           You will receive response within 24 hours of time of submit.
       </Text>


      <HStack flexDir={{
        base:"column",
         md:"row",
        }} >
      <FormControl>
       <FormLabel>Name</FormLabel>
       <Input placeholder="Enter your Name..."/>
       </FormControl>
       <FormControl>
       <FormLabel>Surname</FormLabel>
       <Input placeholder="Enter your Surname..."/>
       </FormControl>
      </HStack>
      <FormControl>
       <FormLabel>Email</FormLabel>
       <Input  type="email" placeholder="Enter your Email..."/>
       </FormControl>   
       <FormControl>
       <FormLabel>Message</FormLabel>
       <Textarea placeholder="Enter your Message..."/>
       </FormControl>     
       <Checkbox defaultChecked  >
           <Text fontSize="xs">
           I agree with
           <Box as="span" color="p.purple">
            Terms & Conditions
           </Box>
           </Text>
           </Checkbox>   
           <Stack>
               <Button fontSize="sm">
                   Send a Message
               </Button>
               <Button fontSize="sm" colorScheme="gray">
                   Book a Meeting
               </Button>
           </Stack>
       </Stack>   

   </Card>
  )
}

export default ContactCard