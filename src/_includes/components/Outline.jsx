const renderTree = (contents) => (
  <ul class="ml-2">
    {contents.map((content) => (
      <li>
        <a href={`#${content.slug}`}>{content.text}</a>
        {content.children && renderTree(content.children)}
      </li>
    ))}
  </ul>
);

export default ({ toc }) => renderTree(toc);
