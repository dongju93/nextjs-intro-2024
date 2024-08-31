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
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
