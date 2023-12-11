import Explorer from "./components/Explorer.jsx";
import H0 from "./components/H0.jsx";

export default ({ title, children, nav, url }) => (
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/main.css" />
      <title>{title}</title>
    </head>
    <body class="flex h-screen">
      <div class="flex max-w-screen-2xl">
        <nav class="basis-1/5">
          <a href="/">Garden Gim</a>
          <Explorer nav={nav} url={url} />
        </nav>
        <main class="basis-3/5 font-serif">
          <header>
            <H0>{title}</H0>
          </header>
          <article class="prose dark:prose-dark">
            {children}
          </article>
          <footer>
          </footer>
        </main>
        <nav class="basis-1/5">
          <strong>
            This actually must be an outline, but I just put this as a
            placeholder
          </strong>
          <br />
          So please replace this to Outline OK?
        </nav>
      </div>
    </body>
  </html>
);
