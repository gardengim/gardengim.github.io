const renderTree = (contents) => (
  <ul class="ml-2">
    {contents.map((content) => (
      <li>
        <a href={`#${content.slug}`}>
          <div class="">{content.text}</div>
        </a>
        {content.children && renderTree(content.children)}
      </li>
    ))}
  </ul>
);

export default ({ toc, top }) => (
  <nav
    id="right-nav"
    class=""
  >
    <div class="">
      <a href="#top">
        <div class="break-words">{top}</div>
      </a>
      {renderTree(toc)}
    </div>
  </nav>
);
