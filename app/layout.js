import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default Layout;