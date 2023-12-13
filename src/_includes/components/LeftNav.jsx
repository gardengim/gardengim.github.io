export default ({ nav, url }) => {
  const renderTree = (node) => (
    <ul class="ml-2">
      {node.children.map((child) => {
        return (
          <li>
            <a href={child.data && child.data.url}>
              <div class="">
                {child.data && child.data.title || child.slug}
              </div>
            </a>
            {child.children && renderTree(child)}
          </li>
        );
      })}
    </ul>
  );
  return (
    <nav
      id="left-nav"
      class=""
    >
      <div class="">
        <a href="/">
          <div>Garden Gim</div>
        </a>
        {renderTree(nav.menu())}
      </div>
    </nav>
  );
};
