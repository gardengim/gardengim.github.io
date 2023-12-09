export default ({ url, nav }) => {
  const renderTree = (node) => (
    <ul class="pl-5">
      {node.children.map((child) => (
        <li class="">
          {child.data
            ? (
              <a href={child.data.url}>
                {url === child.data.url ? "(here)" : ""}
                {child.data.title ? child.data.title : child.slug}
              </a>
            )
            : <span>{child.slug}</span>}
          {child.children && renderTree(child)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav>
      <a href="/">Garden Gim</a>
      {renderTree(nav.menu())}
    </nav>
  );
};
