// import "./globals.css";
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

interface RootLayoutProps {
  children: React.ReactNode;
}
