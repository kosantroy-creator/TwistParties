import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileBar from "./MobileBar";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-deepsea focus:px-5 focus:py-2.5 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1 pb-20 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
