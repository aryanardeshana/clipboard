import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ClipboardCard from "./components/ClipboardCard";

// Pages
import Faq from "./Pages/Faq";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gradient-to-b dark:from-[#050b1a] dark:via-[#0b1220] dark:to-[#0f172a] transition-colors">

        <Header />

        <main className="flex justify-center pt-2 px-4">
          <Routes>

            {/* Home Page */}
            <Route path="/" element={<ClipboardCard />} />

            {/* FAQ Page */}
            <Route path="/faq" element={<Faq />} />

            {/* Blog Page */}
            <Route path="/Blog" element={<Blog />} />

            {/*  Blog Details Page (NEW) */}
            <Route path="/Blog/:slug" element={<BlogDetails />} />

          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;