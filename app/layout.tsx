import "./globals.css";
import Header from "./_conmponents/Header";
import Footer from "./_conmponents/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
