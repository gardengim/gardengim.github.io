const renderTree = (contents) => (
  <ul class="pl-2">
    {contents.map((content) => (
      <li>
        <a href={`#${content.slug}`}>
          <div class="pt-2 text-stone-700 dark:text-stone-300 hover:text-stone-600 dark:hover:text-stone-400">
            {content.text}
          </div>
        </a>
        {content.children && renderTree(content.children)}
      </li>
    ))}
  </ul>
);

export default ({ title, toc }) => (
  <div class="break-words p-2">
    <a href="#top">
      <div class="text-stone-700 dark:text-stone-300 hover:text-stone-600 dark:hover:text-stone-400">
        {title}
      </div>
    </a>
    {renderTree(toc)}
  </div>
);
