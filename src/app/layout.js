import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Root Medix",
  description: "The Medcine Root Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link href="https://fonts.googleapis.com/css2?family=Convergence&display=swap" rel="stylesheet"/></head>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
