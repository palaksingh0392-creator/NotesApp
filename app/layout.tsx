"use client";

import { useEffect } from "react";
import "./globals.css";
import { loadTheme } from "@/utils/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
