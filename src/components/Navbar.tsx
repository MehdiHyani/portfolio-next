import type { ResponsiveValue } from '@chakra-ui/react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Link,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons';
import { trpc } from '../utils/trpc';
import { formatFullName } from '../utils/helpers';

export default function Navbar() {
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const txtAlign = useBreakpointValue({ base: 'center', md: 'left' }) as ResponsiveValue<'center' | 'left'>;

    if (isLoading)
        return <div>Loading</div>; // Add a spinner

    if (!portfolio || error)
        return <div>Error</div>;

    return (
        <Box
            position='fixed'
            className='w-screen'
            zIndex={999}
            borderBottom='1px'
            borderBottomColor={colorMode === 'light' ? 'customBlueFocused' : 'customRedFocused'}
        >
            <Flex
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                color={colorMode === 'light' ? 'gray.600' : 'white'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.900'}
                align={'center'}
            >
                <Flex
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={txtAlign}
                        fontFamily={'\'Pacifico\', cursive'}
                        fontWeight='bold'
                        fontSize='2xl'
                        color={colorMode === 'light' ? 'customBlue' : 'customRed'}>
                        {portfolio.about.firstName}&nbsp;
                    </Text>
                    <Text
                        textAlign={txtAlign}
                        fontFamily={'\'Pacifico\', cursive'}
                        fontWeight='bold'
                        fontSize='2xl'
                        color={colorMode === 'light' ? 'customRed' : 'customBlue'}>
                        {portfolio.about.lastName.toUpperCase()}
                    </Text>
                    <Flex display={{ base: 'none', md: 'flex' }} m='auto'>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Flex alignItems={'center'}>
                    <Button mr={{ base: 2, md: 10 }} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Link
                        p={2}
                        href={navItem.href ?? '#'}
                        fontSize={'sm'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}>
                        {navItem.label}
                    </Link>
                </Box>
            ))}
        </Stack>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, href }: NavItem) => {
    return (
        <Stack spacing={4}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};

interface NavItem {
    label: string;
    href: string;
}

const NAV_ITEMS: Array<{ label: string, href: string }> = [
    {
        label: 'About me',
        href: '#about',
    },
    {
        label: 'My skills',
        href: '#skills'
    },
    {
        label: 'Previous experiences',
        href: '#experience'
    },
    {
        label: 'My projects',
        href: '#projects'
    },
    {
        label: 'Let\'s chat',
        href: '#contact'
    },
];
