import React from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
    className?: string,
    children?: any
  }

  
// export default function NextPage<Props>({children, ...props}) {
//     if (props.filter == true){
//             return(
        
//     <Flex h="80%" w="70%"  margin="auto" position="absolute" 
//     top={0} left={0} right={0} bottom={0} background="inherit" 
//     boxShadow="inset 0 0 2000px rgba(103,128,159, .9)" border="1px" borderRadius={5}
//     filter="blur(1px)">
//                 {children}
//             </Flex>);
//             }
//     else{
//         return(<Flex h="80%" w="70%"  margin="auto" position="absolute" 
//         top={0} left={0} right={0} bottom={0} background="inherit" boxShadow="inset 0 0 2000px rgba(103,128,159, .6)"
//         border="1px" borderRadius={5}
//                 >
//             {children}
//         </Flex>);

//     }
// }