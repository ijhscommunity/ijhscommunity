import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "International Junior Honor Society",
        template: "%s | International Junior Honor Society",
    },
    openGraph: {
        title: "International Junior Honor Society",
        description: {
            default:
                "The International Junior Honor Society is an honor society that focuses on developing leaders and enabling its members to achieve success in academic and life pursuits.",
            template: "%s",
        },
        url: "https://ijhscommunity.vercel.app/",
        siteName: "International Junior Honor Society",
        images: [
            {
                url: "https://ijhscommunity.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "International Junior Honor Society",
            },
        ],
        locale: "en-US",
        type: "website",
    },
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
