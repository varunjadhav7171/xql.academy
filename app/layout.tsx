import "./globals.css";
import type { ReactNode } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata = {
  title: "XQL Academy",
  description: "Gamified learning with streaks, badges, and bite-sized lessons",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="site-body">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
