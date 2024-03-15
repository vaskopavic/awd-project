import type { Metadata } from "next";
import { fonts } from "@/utils/fonts";
import ChakraProvider from "@/providers/chakra-provider";
import { ShoppingCartProvider } from "@/providers/shopping-cart-provider";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Jollybyte",
  description:
    "Elevate your taste buds with handcrafted burgers in a vibrant, cozy setting of pure joy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.brice.variable} ${fonts.raleway.variable}`}
    >
      <body>
        <ChakraProvider>
          <ShoppingCartProvider>
            <Header />
            {children}
            <Footer />
          </ShoppingCartProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
