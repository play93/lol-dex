import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// className={`${geistSans.variable} ${geistMono.variable} antialiased}`

export const metadata: Metadata = {
  title: "리그오브레전드 정보 앱",
  description: "Riot Games API를 활용한 LoL 정보 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black ">
        <header className="header-style">
          <nav className="nav-style">
            <Link
              href={"/"}
              className="w-full text-center hover:underline underline-offset-8"
            >
              홈
            </Link>
            <Link
              href={"/champions"}
              className="w-full text-center hover:underline underline-offset-8"
            >
              챔피언 목록
            </Link>
            <Link
              href={"/items"}
              className="w-full text-center hover:underline underline-offset-8"
            >
              아이템 목록
            </Link>
            <Link
              href={"/rotation"}
              className="w-full text-center hover:underline underline-offset-8"
            >
              챔피언 로테이션
            </Link>
          </nav>
        </header>
        <main className="main-style">{children}</main>
        <footer className="footer-style">
          <p className="text-center">
            [Your Product Name] is not endorsed by Riot Games and does not
            reflect the views or opinions of Riot Games or anyone officially
            involved in producing or managing Riot Games properties. Riot Games
            and all associated properties are trademarks or registered
            trademarks of Riot Games, Inc.
          </p>
        </footer>
      </body>
    </html>
  );
}
