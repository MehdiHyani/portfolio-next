import {
    Stack, Heading, Container, Box, Text, Card, Image, CardBody,
    CardFooter, Button, SimpleGrid, Badge, Flex, useColorModeValue, Link
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from 'react';
import type { Project } from '@prisma/client';
import { trpc } from '../utils/trpc';
import { projectImages } from '../utils/constants';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import LoadingSpinner from './LoadingSpinner';

const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
    <Card
        direction={{ base: 'column', sm: 'row' }}
        my={4}
        mx={5}
        overflow='hidden'
        variant='outline'
    >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={projectImages[index % projectImages.length]}
            alt='Caffe Latte'
        />

        <Stack>
            <CardBody>
                <Heading size='md'>{project.title ?? ''}</Heading>

                <Text py='2'>
                    {project.description}
                </Text>
                <Box>
                    {project.technologies.map((tech) => (<React.Fragment key={tech}>{' '}<Badge variant='solid' colorScheme='green' key={tech}>{` ${tech} `}</Badge>{' '}</React.Fragment>))}
                </Box>
            </CardBody>

            <CardFooter>
                <Flex direction={{ base: 'column', md: 'row' }}>
                    <Link _hover={{ textDecoration: 'none' }} isExternal href={project.githubLink}>
                        <Button
                            _hover={{
                                bg: useColorModeValue('customBlueFocused', 'customRed')
                            }}
                            variant='solid'
                            bg={useColorModeValue('customBlue', 'customRedFocused')}
                            rightIcon={<ExternalLinkIcon />}
                        >
                            View On GitHub
                        </Button>
                    </Link>
                </Flex>
            </CardFooter>
        </Stack>
    </Card>
)

const Projects = () => {
    const router = useRouter();
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });

    if (isLoading)
        return <LoadingSpinner />;

    if (!portfolio || error) {
        router.push('/500')
        return <div></div>;
    }

    return (
        <section id='projects'>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>My Projects</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Here&apos;s what I made during my free time...
                        Plus some cozy pictures ☕☕
                    </Text>
                </Stack>
                <SimpleGrid mt={30} spacing={10} columns={{ base: 1, md: 2 }}>
                    {portfolio.projects.map((project, i) => (
                        <ProjectCard project={project} index={i} key={project.title} />
                    ))}
                </SimpleGrid>
            </Box>
        </section>
    )
}

export default Projects