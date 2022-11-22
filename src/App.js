import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";
import Footer from "./Footer";

import "./Weather.css";

export default function App() {
  return (
    <div className="Weather-App">
      <Search />
      <City />
      <Temperature />
      <Footer />
    </div>
  );
}
