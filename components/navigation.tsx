"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    // 사용자가 현재 머무는 URL 경로를 가져옴
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    {/* path 활용 */}
                    <Link href="/">Home</Link>
                    {path === "/" ? "🐣" : ""}
                </li>
                <li>
                    <Link href="/about-us">About</Link>
                    {path === "/about-us" ? "🐥" : ""}
                </li>
            </ul>
        </nav>
    );
}
