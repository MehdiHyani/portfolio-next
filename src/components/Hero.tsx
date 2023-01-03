import { useRouter } from 'next/router';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import type {
    IconProps
} from '@chakra-ui/react';
import {
    useColorMode
} from '@chakra-ui/react';
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { heroWavePhrases } from '../utils/constants';
import { formatFullName } from '../utils/helpers';
import { trpc } from '../utils/trpc';
import LoadingSpinner from './LoadingSpinner';

export default function Hero() {
    const router = useRouter();
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });
    const [wavePhrase, setWavePhrase] = useState<number>(0);
    const { colorMode } = useColorMode();

    useEffect(() => {
        const interval = setInterval(() => {
            setWavePhrase(p => {
                if (p < heroWavePhrases.length - 1)
                    return p + 1;

                return 0;
            })
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    if (isLoading)
        return <LoadingSpinner />;

    if (!portfolio || error) {
        router.push('/500')
        return <div></div>;
    }

    return (
        <section id='about'>
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    pb={{ base: 20, md: 20 }}
                    pt={{ base: 20, md: 28 }}
                    direction={{ base: 'column-reverse', md: 'row' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                noOfLines={1}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: colorMode === 'light' ? 'customBlue' : 'customRed',
                                    zIndex: -1,
                                }}>
                                {heroWavePhrases[wavePhrase]}
                            </Text>
                            <br />
                            <Text fontSize='6xl' fontFamily='Techno' as={'span'} color={colorMode === 'light' ? 'customBlue' : 'customRed'}>
                                {formatFullName(portfolio.about.firstName, portfolio.about.lastName)}
                            </Text>
                        </Heading>
                        <Text color={'gray.500'}>
                            {portfolio.about.bio}
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}>
                            <Link
                                href={portfolio.about.resume}
                                target='_blank'
                                referrerPolicy='no-referrer'
                            >
                                <Button
                                    rounded={'full'}
                                    size={'lg'}
                                    fontWeight={'normal'}
                                    px={6}
                                    rightIcon={<ExternalLinkIcon pt='1px' h={5} w={5} color={'gray.300'} />}
                                    colorScheme={'white'}
                                    bg={colorMode === 'light' ? 'customBlue' : 'customRed'}
                                    _hover={{ bg: colorMode === 'light' ? 'customBlueFocused' : 'customRedFocused' }}>
                                    Check out my resume
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>
                        <Blob
                            w={'120%'}
                            h={'120%'}
                            position={'absolute'}
                            top={'-20%'}
                            left={0}
                            zIndex={-1}
                            color={colorMode === 'light' ? 'customBlue' : 'customRed'}
                            _hover={{ bg: colorMode === 'light' ? 'customBlueFocused' : 'customRedFocused' }}
                        />
                        <Box
                            position={'relative'}
                            height={'400px'}
                            rounded={'2xl'}
                            boxShadow={'2xl'}
                            width={'75%'}
                            overflow={'hidden'}>
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={portfolio.about.image}
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </section>
    );
}

export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};