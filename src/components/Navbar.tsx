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
    useColorMode,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon,
    SunIcon,
    ExternalLinkIcon
} from '@chakra-ui/icons';

export default function Navbar({ resume }: { resume: string }) {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
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
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'cursive'}
                        fontWeight='bold'
                        fontSize='2xl'
                        color={useColorModeValue('gray.800', 'white')}>
                        M
                    </Text>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'cursive'}
                        fontWeight='bold'
                        fontSize='2xl'
                        color={useColorModeValue('gray.800', 'white')}>
                        H
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} m='auto'>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Flex alignItems={'center'}>
                    <Link
                        p={2}
                        target='_blank'
                        referrerPolicy='no-referrer'
                        fontSize={'sm'}
                        fontWeight={500}
                        isExternal
                        href={resume}
                        _hover={{
                            textDecoration: 'none',
                            color: 'red.500',
                        }}>
                        <Flex p={2} alignItems='center'>
                            <Text hidden={useBreakpointValue({ base: true, md: false })}>My Resume</Text>
                            <ExternalLinkIcon boxSize='4' mx={6} />
                        </Flex>

                    </Link>
                    <Button onClick={toggleColorMode}>
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
        label: 'Some of my skills',
        href: '#skills'
    },
    {
        label: 'Some of my projects',
        href: '#projects'
    },
    {
        label: 'Let\'s chat',
        href: '#contact'
    },
];
