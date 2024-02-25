import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" bg-[#18111B] text-[#ECD9FA]">
        <h1 className="border-b-2 border-red-200 p-4">My Boarding page</h1>
        {children}
      </body>
    </html>
  );
}
