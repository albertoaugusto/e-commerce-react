import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.sass";

/*components*/
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Next.JS",
  description: "E-commerce utilizando Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
          <Navbar/>
          <main className="main">{children}</main>
      </body>
    </html>
  );
}
