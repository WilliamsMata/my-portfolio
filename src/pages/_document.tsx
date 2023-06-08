import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script id="darkMode" strategy="beforeInteractive">
          {`(() => {
            try {
              const html = document.documentElement;
              const classList = html.classList;
              classList.remove('light', 'dark');
              const theme = localStorage.getItem('theme');

              if (theme === 'system' || (!theme && true)) {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                if (mediaQuery.media !== '(prefers-color-scheme: dark)' || mediaQuery.matches) {
                  html.style.colorScheme = 'dark';
                  classList.add('dark');
                } else {
                  html.style.colorScheme = 'light';
                  classList.add('light');
                }
              } else if (theme) {
                classList.add(theme);
              }
              if (theme === 'light' || theme === 'dark') {
                html.style.colorScheme = theme;
              }
            } catch (e) {}
          })();`}
        </Script>
      </body>
    </Html>
  );
}
