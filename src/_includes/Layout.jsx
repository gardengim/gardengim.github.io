import LeftNav from "./components/LeftNav.jsx";
import Main from "./components/Main.jsx";
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
      <div class="relative mx-auto w-[80rem] h-full">
        <div class="absolute flex justify-center top-0 wh-full">
          <div class="grow h-full bg-red-300"></div>
          <div class="w-0 xl:w-[48rem] h-full bg-green-300"></div>
          <div class="grow h-full bg-blue-300"></div>
        </div>
        <div class="absolute top-0">
        </div>
      </div>
    </body>
  </html>
);
