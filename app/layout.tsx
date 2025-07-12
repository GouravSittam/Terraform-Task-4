import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terraform-Task-4 | Gourav",
  description: "Terraform Task-4 project by Gourav (Reg No: 12203224)",
  generator: "Next.js",
  keywords: ["Terraform", "Task-4", "Gourav", "Infrastructure", "Cloud"],
  authors: [{ name: "Gourav" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e1b4b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
