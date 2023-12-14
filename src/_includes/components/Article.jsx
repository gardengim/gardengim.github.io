import H0 from "./H0.jsx";

export default ({ children, title, url }) => (
  <article class="mx-auto prose font-serif wh-full overflow-auto">
    <header id="top">
      <H0>{title || url}</H0>
    </header>
    {children}
    <footer>
    </footer>
  </article>
);
