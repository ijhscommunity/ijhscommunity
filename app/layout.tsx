import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "International Junior Honor Society",
    description: "The International Junior Honor Society is an honor society that focuses on developing leaders and enabling its members to achieve success in academic and life pursuits.",
    openGraph: {
        title: "International Junior Honor Society",
        description: "The International Junior Honor Society is an honor society that focuses on developing leaders and enabling its members to achieve success in academic and life pursuits.",
        url: "https://ijhscommunity.vercel.app/",
        siteName: "International Junior Honor Society",
        images: {
            url: "https://ijhscommunity.vercel.app/og-image.png",
            alt: "International Junior Honor Society",
        },
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "International Junior Honor Society",
        description: "The International Junior Honor Society is an honor society that focuses on developing leaders and enabling its members to achieve success in academic and life pursuits.",
        creator: "@ijhscommunity",
        siteId: "1614121836564066305",
        creatorId: "1614121836564066305",
        images: {
            url: "https://ijhscommunity.vercel.app/og-image.png",
            alt: "International Junior Honor Society",
        },
    },
    icons: {
        apple: "/apple-touch-icon.png",
        icon: ["/favicon-32x32.png", "/favicon-16x16.png"],
        other: [
            {
                rel: "android-chrome-192x192",
                url: "/android-chrome-192x192.png",
            },
            {
                rel: "android-chrome-512x512",
                url: "/android-chrome-512x512.png",
            },
        ],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className={inter.className}>{children}</div>
            </body>
        </html>
    );
}
