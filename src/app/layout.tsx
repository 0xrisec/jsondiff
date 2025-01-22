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
      {/* <head>
        <AdSense pId="7160351643450161"/>
      </head> */}
      <Script type="text/javascript" id="microsoft-clarity">
        
        {
        `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "pt6tzki4g6");
        `
      }
    </Script>
      <body>{children}</body>
    </html>
  );
}
