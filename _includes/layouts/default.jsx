export default function ({ title, children }) {
  return (
    <html>
      <head>
        <meta />
        <title>{title}</title>
      </head>
      <main>
        {children}
      </main>
    </html>
  );
}
