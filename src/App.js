import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/contactPage/ContactPage";
import FeaturesPage from "./pages/featuresPage/FeaturesPage";
import HomePage from "./pages/homePage/HomePage";
import PricePage from "./pages/pricePage/PricePage";
import ServisesPage from "./pages/servisesPage/ServisesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/Services" element={<ServisesPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
