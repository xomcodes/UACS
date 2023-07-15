import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PortalProvider } from "@ibnlanre/portal";
import { ModalsProvider } from "@mantine/modals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortalProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
          <Component {...pageProps} />
        </ModalsProvider>
      </MantineProvider>
    </PortalProvider>
  );
}
