import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Second Brain pro",
  description: "Description Second Brain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl p-4 m-auto min-w-[300px]">{children}</main>
      </body>
    </html>
  );
}
