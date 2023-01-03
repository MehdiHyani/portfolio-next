import {
    Box,
    chakra,
    Container,
    HStack,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { trpc } from '../utils/trpc';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    const router = useRouter();
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });
    const textAlign: 'center' | 'left' = useBreakpointValue({ base: 'center', md: 'left' }) ?? 'center';
    const { colorMode } = useColorMode();

    if (isLoading)
        return <div>Loading</div>; // Add a spinner

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
                        fontFamily={'\'Pacifico\', cursive'}
                        fontWeight='bold'
                        fontSize='2xl'
                        color={colorMode === 'light' ? 'gray.700' : 'white'}>
                        {portfolio.about.firstName.toUpperCase()[0]}
                    </Text>
                    <Text
                        textAlign={textAlign}
                        fontFamily={'\'Pacifico\', cursive'}
                        fontWeight='bold'
                        fontSize='2xl'
                        color={colorMode === 'light' ? 'customRed' : 'customBlue'}>
                        {portfolio.about.lastName.toUpperCase()[0]}
                    </Text>

                </HStack>
                <Text>© {new Date().getFullYear()} Mehdi HYANI. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}