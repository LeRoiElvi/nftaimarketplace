// src/app/layout.tsx
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@/styles/index.css";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { MAX_WIDTH } from "../config";
import Header from "../components/header";
import Footer from "../components/footer";
import theme from "../theme"; // adjust the import if needed

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Header />
          <Box as="main" px={[4, 6, 10, 14, 20]} maxW={MAX_WIDTH} mx="auto">
            {children}
          </Box>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
