import Explorer from "./components/Explorer.jsx";
import H0 from "./components/H0.jsx";
import Outline from "./components/Outline.jsx";

export default ({ children, nav, title, toc, url }) => (
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/main.css" />
      <title>{title}</title>
    </head>
    <body class="flex justify-center h-screen">
      <div class="w-[18rem] bg-red-300">
        <Explorer nav={nav} url={url} />
      </div>
      <div class="w-[54rem] bg-green-300 font-serif">
        <article class="prose">
          hellllo
        </article>
      </div>
      <div class="w-[18rem] bg-blue-300">
        <Outline toc={toc} />
      </div>
    </body>
  </html>
);
