import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import type { AppProps } from "next/app";
import { PortalProvider } from "@ibnlanre/portal";
import { ModalsProvider } from "@mantine/modals";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../styles/globals.css";
import AuthProvider from "@/context/auth-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <PortalProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AuthProvider>
            <ModalsProvider>
              <ToastContainer />
              <Component {...pageProps} />
            </ModalsProvider>
          </AuthProvider>
        </MantineProvider>
      </PortalProvider>
    </>
  );
}
