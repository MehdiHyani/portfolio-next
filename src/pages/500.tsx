import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function Error() {
    return (
        <Center h='100vh'>
            <Box textAlign="center" py={10} px={6}>
                <Box display="inline-block">
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        bg={'red.500'}
                        rounded={'50px'}
                        w={'55px'}
                        h={'55px'}
                        textAlign="center">
                        <CloseIcon boxSize={'20px'} color={'white'} />
                    </Flex>
                </Box>
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    Oops! Some went very wrong!
                </Heading>
                <Text color={'gray.500'}>
                    I have been notified about this! But don&apos;t you worry, it&apos;s
                    probably just a ; missing somewhere... It will only take
                    me few days to find it.
                </Text>
                <Text color={'gray.500'}>
                    May the force be with us all.
                </Text>
                <Text color={'gray.500'}>
                    Me especially ( ͡❛ ͜ʖ ͡❛) 👉
                </Text>
            </Box>
        </Center>
    );
}