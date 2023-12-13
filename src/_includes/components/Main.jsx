import H0 from "./H0.jsx";

export default ({ children, title, url }) => (
  <main class="">
    <article class="">
      <header id="top">
        <H0>{title || url}</H0>
      </header>
      {children}
      <footer>
      </footer>
    </article>
  </main>
);
