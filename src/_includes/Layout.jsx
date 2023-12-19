import LeftPanel from "./_components/LeftPanel.jsx";
import Article from "./_components/Article.jsx";
import RightPanel from "./_components/RightPanel.jsx";

export default ({ title, children, nav, url }) => (
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/main.css" />
      <title>{title}</title>
    </head>
    <body class="bg-stone-100 dark:bg-stone-900">
      <div class="relative w-screen max-w-screen-xl h-screen mx-auto overflow-hidden">
        <div class="flex absolute h-full left-0">
          <nav
            id="left-nav"
            class="transition-all bg-stone-100 dark:bg-stone-900 overflow-hidden [direction:rtl]"
          >
            <div class="w-64 overflow-auto text-stone-700 dark:text-stone-300 [direction:ltr]">
              <LeftPanel nav={nav} />
            </div>
          </nav>
          <div class="flex border-l-2 border-stone-300 dark:border-stone-700 border-inherit">
            <input type="checkbox" id="left-nav-toggle" />
          </div>
        </div>
        <div class="flex absolute h-full bg-inherit border-inherit right-0">
          <div class="flex border-r-2 border-stone-300 dark:border-stone-700">
            <input type="checkbox" id="right-nav-toggle" />
          </div>
          <nav
            id="right-nav"
            class="transition-all bg-stone-100 dark:bg-stone-900 overflow-hidden"
          >
            <div class="w-64 dark:hover:text-stone-400 overflow-auto">
              <RightPanel title={title || url} toc={toc} />
            </div>
          </nav>
        </div>
        <div class="h-full max-w-screen-md mx-auto">
          <div class="h-full mx-4 overflow-auto">
            <Article children={children} title={title || url} />
          </div>
        </div>
      </div>
    </body>
  </html>
);
