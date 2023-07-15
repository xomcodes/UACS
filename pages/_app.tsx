import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { PortalProvider } from "@ibnlanre/portal";
import { ModalsProvider } from "@mantine/modals";
import AuthProvider from "@/context/auth-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortalProvider>
      <AuthProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <ModalsProvider>
            <Component {...pageProps} />
          </ModalsProvider>
        </MantineProvider>
      </AuthProvider>
    </PortalProvider>
  );
}
