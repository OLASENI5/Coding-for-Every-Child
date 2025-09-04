import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Mining Initiatives (CMIA)",
  description: "Coding for Every Child — No African Child Should Be Left Behind.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
