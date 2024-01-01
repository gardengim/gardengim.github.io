import H0 from "./H0.jsx";

export default ({ children, title }) => (
  <article class="prose dark:prose-invert prose-stone mx-auto py-8 px-4 font-serif break-words">
    <header id="top">
      <H0>{title}</H0>
      <hr />
    </header>
    {children}
    <footer>
      <hr />
      <a href="https://github.com/gardengim">GitHub</a>
    </footer>
  </article>
);
