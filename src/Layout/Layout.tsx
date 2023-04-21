import Head from 'next/head';
import React, { ReactNode, useEffect, useState } from 'react';
import { Footer, Navigation } from '../components';
import theme from '../theme';

interface LayoutProps {
  children: ReactNode;
}

const fonts = [
  {
    key: 'Essonnes',
    url: 'https://use.typekit.net/ixf6kfv.css',
  },
  {
    key: 'Nexa',
    url: '/fonts/Nexa/font-family-nexa.css',
  },
  {
    key: 'SFProDisplay',
    url: '/fonts/SFProDisplay/font-family-sf-pro-display.css',
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    // Desabilitando SSR
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return <></>;
  }

  return (
    <html lang="pt-br">
      <Head>
        <title>
          Praça Omaguás Pinheiros | Apartamentos à venda em
          Pinheiros
        </title>

        {/* ======================================= */}
        {/*                  METAS                  */}
        {/* ======================================= */}
        <meta
          name="description"
          content="Empreendimento de alto padrão com plantas de 125 m² a 165 m², 2 e 3 vagas e lazer superior."
        />
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
        <meta name="theme-color" content={theme.colors.yellow} />
        <meta
          name="msapplication-TileColor"
          content={theme.colors.yellow}
        />
        <meta
          name="msapplication-TileImage"
          content="/ms-icon-144x144.png"
        />

        {/* ======================================= */}
        {/*                 FAVICONS                */}
        {/* ======================================= */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />

        {/* ======================================= */}
        {/*                  FONTS                  */}
        {/* ======================================= */}
        {fonts.map(font => (
          <link
            key={font.key}
            rel="stylesheet"
            href={font.url}
          />
        ))}
      </Head>

      <body>
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default Layout;
