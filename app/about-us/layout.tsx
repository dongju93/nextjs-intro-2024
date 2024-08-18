import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Dummy page",
};

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children} &copy; Next JS</div>;
}
