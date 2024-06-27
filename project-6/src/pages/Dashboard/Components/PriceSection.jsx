// import { BsArrowUpRight } from 'react-icons/bs';
// import { CustomCard } from '../../../Chakra/CustomCard'
// import { HStack,Stack,Text,Icon, Button,Flex,Image, TabList, Tab, TabPanel, Tabs } from '@chakra-ui/react';
// import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';



// const PriceSection = () => {

//    const timestamps = ["7:15 PM","8:15 PM","8:55 PM","9:00 PM","9:15 PM"];

//   return (
//     <CustomCard>
//      <Flex justify="space-between" align="start">
//      <Stack>
//         <HStack color="black.80">
//             <Text fontSize="sm">Wallet Balance</Text>
            
//         </HStack>
//         <HStack spacing={4} 
//          align={{
//             base:"flex-start",
//             sm:"center",
//         }}
//         flexDir={{
//             base:"column",
//             sm: "row",
//         }}
//         >
//         <HStack>
//         <Text textStyle="h2" fontWeight="medium">22.39401000</Text>{""}
//         <HStack fontWeight="medium" color="green.500">
//             <Icon as={ BsArrowUpRight } />
//         <Text fontSize="sm" fontWeight="medium">22%</Text>
//         </HStack>
        
//         </HStack>
        
//         </HStack>
//     </Stack>
//     <HStack>
//         <Button
//          leftIcon={
//             <Icon as={ AiFillPlusCircle }/>}>Buy</Button>
//         <Button leftIcon={
//             <Icon as={ AiOutlineMinusCircle }/>}>Sell</Button>
//     </HStack>
//      </Flex>
//      <Tabs variant='soft-rounded' colorScheme='green'>
//   <TabList>
//     <Tab>Tab 1</Tab>
//     <Tab>Tab 2</Tab>
//   </TabList>
//   <TabPanel>
//     <TabPanel>
//       <p>one!</p>
//     </TabPanel>
//     <TabPanel>
//       <p>two!</p>
//     </TabPanel>
//   </TabPanel>
// </Tabs>
//      <Image w="100%" src="\graph.svg" mt="3rem"/>
//      <HStack justify="space-between">
//         {timestamps.map((timestamps)=> (
//                <Text key={timestamps} fontSize="sm" color="black.80">
//                 {timestamps}
//                </Text> 
//             )
//         )
//         }
//      </HStack>
//     </CustomCard>
//   )
// }

// export default PriceSection



import { BsArrowUpRight } from 'react-icons/bs';
import { CustomCard } from '../../../Chakra/CustomCard';
import { HStack, Stack, Text, Icon, Button, Flex, Image, TabList, Tab, TabPanels, TabPanel, Tabs } from '@chakra-ui/react';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const PriceSection = () => {
  const timestamps = ["7:15 PM", "8:15 PM", "8:55 PM", "9:00 PM", "9:15 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">22.394010</Text>{" "}
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">22%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end" >
        <TabList bg="black.5" p="3px">
            {
                ["1H","1D","1W","1M"].map((tab)=> (
                    <Tab _selected={{bg:"white"}} key={tab} fontSize="sm" p="6px" borderRadius="4">
                        {tab}
                    </Tab>
                ))
            }
          
        </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
          <Image w="100%" src="/graph.svg" mt="3rem" />
      <HStack justify="space-between">
        {timestamps.map((timestamp) => (
          <Text key={timestamp} fontSize="sm" color="black.80">
            {timestamp}
          </Text>
        ))}
      </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
     
    </CustomCard>
  );
};

export default PriceSection;
