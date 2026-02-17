import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Chronicle",
  description: "A modern heritage registry for extraordinary Golden Retrievers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-8 lg:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}
