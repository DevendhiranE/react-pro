import TheNavBar from "./components/TheNavBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-orange-300 min-h-screen">
      <TheNavBar />
      <HomePage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
