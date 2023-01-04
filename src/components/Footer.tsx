import {
    Box,
    Container,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { trpc } from '../utils/trpc';
import LoadingSpinner from './LoadingSpinner';

export default function Footer() {
    const router = useRouter();
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });
    const textAlign: 'center' | 'left' = useBreakpointValue({ base: 'center', md: 'left' }) ?? 'center';
    const { colorMode } = useColorMode();

    if (isLoading)
        return <LoadingSpinner />;

    if (!portfolio || error) {
        router.push('/500')
        return <div></div>;
    }

    return (
        <Box
            bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
            color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
            borderStyle='outset'
            borderTop='1px'
            borderColor={colorMode === 'light' ? 'customBlueFocused' : 'customRedFocused'}
        >

            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <HStack >
                    <Text
                        textAlign={textAlign}
                        fontWeight='bold'
                        fontSize='2xl'
                        color={colorMode === 'light' ? 'gray.700' : 'white'}>
                        {portfolio.about.firstName.toUpperCase()[0]}
                    </Text>
                    <Text
                        textAlign={textAlign}
                        fontWeight='bold'
                        fontSize='2xl'
                        color={colorMode === 'light' ? 'customRed' : 'customBlue'}>
                        {portfolio.about.lastName.toUpperCase()[0]}
                    </Text>

                </HStack>
                <Text>© {new Date().getFullYear()} Mehdi HYANI. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    {
                        portfolio.socials.map((social) => (
                            <Link key={social.name} href={social.url} isExternal referrerPolicy='no-referrer'>
                                <Image
                                    src={social.image}
                                    alt={social.name}
                                    boxSize={'16px'}
                                />
                            </Link>
                        ))
                    }
                </Stack>
            </Container>
        </Box>
    );
}