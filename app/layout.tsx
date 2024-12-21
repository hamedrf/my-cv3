import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientLayout from "./ClientLayout";

const vazir = localFont({
  src: [
    {
      path: "./fonts/Vazir.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Vazir-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});
export const metadata: Metadata = {
  title: "حامد رجبی فرجاد",
  description: "رزومه حامد رجبی فرجاد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vazir.variable} ${vazir.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
