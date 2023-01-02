import { useRouter } from 'next/router';
import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,
    Container, Flex, Heading, Image, List, ListIcon, ListItem, SimpleGrid,
    Stack, Stat, StatLabel, StatNumber, Text, useBreakpointValue, useColorMode, useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { MdSettings } from 'react-icons/md';
import moment from 'moment';
import { trpc } from '../utils/trpc';
import { customColors } from '../utils/theme';

interface StatsCardProps {
    title: string;
    stat: string;
}

const StatsCard = (props: StatsCardProps) => {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={3}
            shadow={`0px 0px 20px 5px ${useColorModeValue(customColors.customBlue, customColors.customRed)}`}
            _hover={{
                shadow: `0px 0px 20px 10px ${useColorModeValue(customColors.customBlueFocused, customColors.customRedFocused)}`
            }}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}
        >
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat >
    );
}

const Experiences = () => {
    const router = useRouter();
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });

    const { dir, disp } = useBreakpointValue({ base: { dir: 'column', disp: undefined }, md: { dir: 'row', disp: 'inline' } }) ?? { dir: 'row', disp: 'inline' };
    const { colorMode } = useColorMode();

    if (isLoading)
        return <div>Loading</div>; // Add a spinner

    if (!portfolio || error) {
        router.push('/500')
        return <div></div>;
    }

    return (
        <section id='experience'>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>My Previous experiences</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Here are all my previous professional experiences
                    </Text>
                </Stack>
                <Accordion
                    p={{ base: 4, md: 10 }}
                    allowMultiple
                >
                    {portfolio.experiences.map((experience, i) => (

                        <AccordionItem key={`experience-${i}`}>
                            <h2>
                                <AccordionButton>
                                    <Box flex={1}>
                                        <Box textAlign='left'>
                                            <Text fontFamily='heading' display={disp} fontSize='2xl' fontWeight='bold'>{`${experience.title} at `}<strong>{experience.company}</strong></Text>
                                        </Box>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Stack alignItems='center'>
                                    <SimpleGrid my={10} w='full' columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                                        <StatsCard title='Experience Type' stat={experience.jobType.replace("Time", " time").toUpperCase()} />
                                        <StatsCard title='Experience Start Date' stat={moment(experience.startDate).format('MMMM Do YYYY')} />
                                        <StatsCard title='Experience End Date' stat={!experience.isCurrent ? moment(experience.endDate).format('MMMM Do YYYY') : 'Current'} />
                                    </SimpleGrid>
                                    <Flex direction={dir as 'column' | 'row'} alignItems='center' justify='space-around' >
                                        <List pr={10}>
                                            {experience.jobResponsibilities.map((responsibility, j) => (
                                                <ListItem key={`resp-${j}`}>
                                                    <ListIcon as={MdSettings} boxSize={4} color={colorMode === 'light' ? 'customBlue' : 'customRed'} />
                                                    {responsibility}
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Box>

                                        </Box>
                                        <Link href={experience.companyUrl} referrerPolicy='no-referrer'>
                                            <Image
                                                width={100}
                                                height='auto'
                                                src={experience.image}
                                                alt={experience.company + ' logo'}
                                                borderRadius='lg'
                                            />
                                        </Link>
                                    </Flex>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </section>
    )
}

export default Experiences