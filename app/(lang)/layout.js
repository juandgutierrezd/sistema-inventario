"use client";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
      >
        <div className="flex h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
