import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Callisto vision. Happy New",
  description: "Callisto vision. Happy New Year!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`} style={{ maxWidth: "500px", width: "100%", margin: "0 auto", overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
