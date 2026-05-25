export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fffafa] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}