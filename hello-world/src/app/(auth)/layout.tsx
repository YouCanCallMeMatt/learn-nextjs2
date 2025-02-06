export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer
          style={{
            backgroundColor: 'ghostwhite',
            padding: '1rem',
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
