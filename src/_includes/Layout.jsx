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
    <body class="flex justify-center h-screen">
      <div class="flex-grow flex justify-end bg-red-300">
        <div class="w-fit">
          whatever
        </div>
      </div>
      <div class="w-[54rem] bg-green-300 font-serif">
        <article class="prose">
          hellllo
        </article>
      </div>
      <div class="flex-grow bg-blue-300">
        <div>
          whatever
        </div>
      </div>
    </body>
  </html>
);
