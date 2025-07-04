"use client";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
      >
        <div className="flex h-screen w-screen">
            <h1 className="w-1/8 bg-yellow-400">Menu de Empleado</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
