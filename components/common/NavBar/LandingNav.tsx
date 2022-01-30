import { Flex, Image, Stack, HStack, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import Logo from '../Logo/Logo'
import { useRouter } from 'next/router'
// import { Announcement } from '@inverse/components/common/Announcement'

const navbar = [
  {
    label: 'Docs',
    href: 'https://docs.auxilium.finance/',
  },

]

export const LandingNav = () => {

  const router = useRouter();

  return (
    <>
    <Stack  direction="row" spacing = "85%" >
      <Flex 

        p={3.5}
        zIndex="6"
        position="fixed"
      >
          <div onClick = {() => { router.push('/'); }} >
          <Logo  />
          </div>
      </Flex>
        
        <Flex 
          opacity={0.8}
          maxWidth="100%"
          overflow="hidden"
          p={3.5}
          zIndex="6"
        >
        <Stack  overflow-x="hidden" direction="row" spacing={12} fontWeight="semibold" align="center" >
          {navbar.map(({ label, href }, i) => (
            <Link key={i} fontWeight="medium" href={href} isExternal>
              {label}
            </Link>
            
          ))}
            <Button left="auto" disabled={true} >Enter App</Button>
        </Stack>
   
      </Flex>
      
      </Stack>
    </>

  )
}

export default LandingNav
