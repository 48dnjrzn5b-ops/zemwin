import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={roboto.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "LocalBusiness",

              name: "ZemWin",

              url: "https://zemwin.com.ua",

              telephone: "+380972970916",

              address: {
                "@type": "PostalAddress",

                streetAddress: "вул. Київська, 4 офіс 323",

                addressLocality: "Вінниця",

                addressCountry: "UA",
              },

              areaServed: "Вінницька область",

              description:
                "Землевпорядні та геодезичні послуги у Вінниці. Кадастрові роботи, встановлення меж, топографічна зйомка та технічна документація.",

              priceRange: "$$",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
