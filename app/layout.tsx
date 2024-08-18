import { Metadata } from "next";
import Navigation from "../components/navigation";

// 브라우저의 탭에 표시되는 제목과 페이지 설명
export const metadata: Metadata = {
    title: {
        template: "Next | %s",
        default: "Next | Home",
    },
    description: "Practice Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
