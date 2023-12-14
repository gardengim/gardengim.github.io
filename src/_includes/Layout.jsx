import LeftNav from "./components/LeftNav.jsx";
import Article from "./components/Article.jsx";
import RightNav from "./components/RightNav.jsx";

export default ({ children, nav, title, toc, url }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/main.css" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="/main.js" inline></script>
      <title>{title || url}</title>
    </head>
    <body class="w-screen h-screen">
      <div class="relative mx-auto wh-full max-w-screen-xl">
        <div class="absolute top-0 z-10 relative wh-full overflow-hidden">
          <div class="absolute w-64 h-full shrink-0 left-0">
            <LeftNav nav={nav} url={url} />
          </div>
          <div class="absolute w-64 h-full shrink-0 right-0">
            <RightNav toc={toc} top={title || url} />
          </div>
        </div>
        <div class="absolute top-0 wh-full">
          <main class="wh-full max-w-screen-md mx-auto">
            <Article children={children} title={title} url={url} />
          </main>
        </div>
      </div>
    </body>
  </html>
);
