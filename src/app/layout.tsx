import type { Metadata } from "next";
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import NavBar from "@/src/app/components/NavBar";
import Footer from "@/src/app/components/Footer";

const albertSans = Albert_Sans({
    subsets: ["latin"],
    display: "swap"
})


const montserratAlternates = Montserrat_Alternates({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat-alternates"
})


export const metadata: Metadata = {
    title: "Fortis Capital",
    description: "Reimagining your portfolio",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${albertSans.className} ${montserratAlternates.variable}`}
        >
        <NavBar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
