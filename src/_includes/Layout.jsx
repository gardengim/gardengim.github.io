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
    </body>
  </html>
);
