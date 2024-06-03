import type { Metadata } from "next";
import { Zilla_Slab, Montserrat } from "next/font/google";
import "./globals.css";

const zilla = Zilla_Slab({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-zilla",
});

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Hotel Van Monet",
  description: "Descubra o Conforto e a Conveniência no Coração de Miracatu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          id="dataLayer"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJ3JW83G');`,
          }}
        />
      </head>
      <body className={`${zilla.variable} ${montserrat.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ3JW83G"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
