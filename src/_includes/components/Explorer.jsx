export default ({ nav, url }) => {
  const renderTree = (node) => (
    <ul class="ml-2">
      {node.children.map((child) => (
        <li>
          {child.data
            ? (
              <a href={child.data.url}>
                {child.data.title || child.slug}
              </a>
            )
            : <span>{child.slug}</span>}

          {child.children && renderTree(child)}
        </li>
      ))}
    </ul>
  );
  return renderTree(nav.menu());
};
