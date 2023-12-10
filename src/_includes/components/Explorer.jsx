export default ({ url, nav }) => {
  const renderTree = (node) => (
    <ul>
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

  return (
    renderTree(nav.menu())
  );
};
