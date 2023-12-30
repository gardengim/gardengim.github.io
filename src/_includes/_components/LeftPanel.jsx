export default ({ nav }) => {
  const renderTree = (node) => (
    <ul class="pl-2">
      {node.children && node.children.map((child) => (
        <li>
          <a href={child.data && child.data.url}>
            <div class="pt-2 text-stone-700 dark:text-stone-300 hover:text-stone-600 dark:hover:text-stone-400">
              {child.children && <input type="checkbox" class="mr-2" />}
              {child.data && child.data.title || child.slug}
            </div>
          </a>
          {child.children && renderTree(child)}
        </li>
      ))}
    </ul>
  );

  return (
    <div class="break-words p-2">
      <a href="/">
        <div class="text-stone-700 dark:text-stone-300 hover:text-stone-600 dark:hover:text-stone-400">
          Garden Gim
        </div>
      </a>
      {renderTree(nav.menu())}
    </div>
  );
};
