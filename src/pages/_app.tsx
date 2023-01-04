import { ChakraProvider } from '@chakra-ui/react';
import { trpc } from "../utils/trpc";
import { Analytics } from '@vercel/analytics/react';

import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from '../utils/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
};

export default trpc.withTRPC(MyApp);
