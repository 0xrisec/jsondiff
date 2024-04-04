import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LQ7QXW3VKP"
        />
      <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LQ7QXW3VKP');
          `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
