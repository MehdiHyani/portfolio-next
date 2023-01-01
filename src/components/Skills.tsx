import React from 'react';
import {
    Box, Container, Heading, HStack, Stack, Text, VStack, Image, Flex, useColorMode, keyframes, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, CircularProgress
} from '@chakra-ui/react';
import { trpc } from '../utils/trpc';
import { getValueForSkillLevel } from '../utils/helpers';
// import Image from 'next/image';

const Skills = () => {
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });
    const { colorMode } = useColorMode();

    const pulseRing = keyframes`
	0% {
        transform: scale(0.33);
    }
    40%,
    50% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
	`;

    if (isLoading)
        return <div>Loading</div>; // Add a spinner

    if (!portfolio || error)
        return <div>Error</div>;

    return (
        <section id='skills'>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>My skills</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        What am I good at though ? 🤔
                        <Text color={'gray.600'} fontSize={'sm'}>
                            Hover over my skills to get more details
                        </Text>
                    </Text>
                </Stack>

                <Container mt={10}>
                    {portfolio.skillCategories.map((skillCategory, i) => (
                        <VStack py={5} spacing={5} align='center' key={`skill-cat-${i}`}>
                            <Flex
                                my={10}
                                w={{ base: '100vw', md: '90vw' }}
                                align={'center'}
                                _before={{
                                    content: '""',
                                    borderBottom: '1px solid',
                                    borderColor: colorMode === 'light' ? 'gray.200' : 'gray.700',
                                    flexGrow: 1,
                                    mr: 8,
                                }}
                                _after={{
                                    content: '""',
                                    borderBottom: '1px solid',
                                    borderColor: colorMode === 'light' ? 'gray.200' : 'gray.700',
                                    flexGrow: 1,
                                    ml: 8,
                                }}>
                                <Text align='center' fontWeight={600} fontSize={'2xl'}>
                                    {skillCategory.name}
                                </Text>
                            </Flex>
                            <Box display={{ base: 'grid', md: 'flex' }} gridTemplateColumns='repeat(4, 1fr)' justifyContent='center' w='80vw' gap={5} overflow='auto'>
                                {skillCategory.skills.map((skill) => (
                                    <Popover trigger='hover' key={skill.name}>
                                        <PopoverTrigger>
                                            <Box key={skill.name}>
                                                <Image title={skill.name} alt={skill.name} height={85} width='auto' src={skill.image} />
                                            </Box>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader textAlign='center'>{skill.name}</PopoverHeader>
                                            <PopoverBody>
                                                <HStack alignItems='center'>
                                                    <CircularProgress
                                                        size='15px'
                                                        value={getValueForSkillLevel(skill.level)}
                                                        color={skill.level === 'beginner' ? 'red' : skill.level === 'intermediate' ? 'orange' : 'green'}
                                                    />
                                                    <Text>{skill.level}</Text>
                                                </HStack>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                ))}
                            </Box>
                        </VStack>
                    ))}
                </Container>
            </Box>
        </section>
    )
}

export default Skills