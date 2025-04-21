import type { Metadata } from "next";
import "./globals.css";
import AppContextProvider from "./_contexts/AppContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Cart-On",
  description: "This is a dummy shopping cart developed for a test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <AppContextProvider>
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
