import SessionWrapper from "./session.jsx"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen overflow-hidden text-gray-800">
        <div className="min-h-screen w-full bg-white relative">
          {/* Pink Glow Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
      `,
              backgroundSize: "100% 100%",
            }}
          />
          <SessionWrapper>
            {children}
          </SessionWrapper>
        </div>
      </body>
    </html>
  );
}
