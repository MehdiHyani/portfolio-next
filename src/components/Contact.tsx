import {
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Textarea,
    useColorMode,
    useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { trpc } from '../utils/trpc';
import { TRPCClientError } from '@trpc/client';
import { type FormEvent, useState } from 'react';
import { EmailIcon } from '@chakra-ui/icons';

export default function Contact() {
    const router = useRouter();
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });
    const toast = useToast();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const { mutateAsync: sendMessage } = trpc.message.sendMessage.useMutation();

    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await sendMessage({ email, message, subject });
            toast({
                variant: 'solid',
                status: 'success',
                description: 'I received your message. We\'ll be in touch ><',
                title: 'Email sent'
            })
        } catch (error) {
            if (error instanceof TRPCClientError)
                toast({
                    variant: 'solid',
                    status: 'error',
                    description: error.message,
                    title: 'Error'
                })
        }
    }

    const { colorMode } = useColorMode();

    if (isLoading)
        return <div>Loading</div>; // Add a spinner

    if (!portfolio || error) {
        router.push('/500')
        return <div></div>;
    }

    return (
        <Container id='contact' className="">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <Heading textAlign={'center'} fontSize={'3xl'}>My Projects</Heading>
                <br />

                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Whether it&apos;s only for a quick chat or for a professional inquiry, you are welcome to chat with me anytime. 😊😊</p>
                <form onSubmit={handleSendMessage} action="#" id='email-form' className="space-y-8">
                    <FormControl isInvalid={email === ''} isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            form='email-form'
                            type='email'
                            placeholder="secret.admirer@example.com"
                        />
                    </FormControl>
                    <FormControl isInvalid={subject === ''} isRequired>
                        <FormLabel>Subject</FormLabel>
                        <Input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            form='email-form'
                            type='text'
                            placeholder="Hiring request..."
                        />
                    </FormControl>
                    <FormControl isInvalid={message === ''} isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            form='email-form'
                            rows={6}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Hello Mehdi, I really like your portfolio 😊..."
                        />
                    </FormControl>
                    <Button
                        type='submit'
                        alignItems={'center'}
                        _hover={{
                            bg: colorMode === 'light' ? 'customBlueFocused' : 'customRed',
                        }}
                        variant='solid'
                        bg={colorMode === 'light' ? 'customBlue' : 'customRedFocused'}
                        rightIcon={<EmailIcon />}
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </Container>
    );
}