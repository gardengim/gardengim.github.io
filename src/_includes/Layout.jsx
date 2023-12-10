import Explorer from "./components/Explorer.jsx";
import H0 from "./components/H0.jsx";

export default ({ title, children, nav, url }) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <title>{title}</title>
      </head>
      <body>
        <nav>
          <Explorer nav={nav} url={url} />
        </nav>
        <main class="border-x-2">
          <header>{title}</header>
          <article class="prose">
            {children}
          </article>
          <footer></footer>
        </main>
      </body>
    </html>
  );
};
