import React from "react";
import "./globals.css";
import "@primer/css/dist/primer.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
