import type { Metadata } from "next";
import type { TChildren } from "@/helpers/types";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ChatPDF - Chat with your pdf via GPT Model",
    description: "Chat with your pdf via GPT Model",
};

function RootLayout(p: { children: TChildren }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>{p.children}</body>
            </html>
        </ClerkProvider>
    );
}

export default RootLayout;
