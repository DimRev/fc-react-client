import { BrowserRouter, Route, Routes } from "react-router";
import AppHeader from "./features/layout/components/AppHeader";
import AboutPage from "./features/views/components/AboutPage";
import ContactPage from "./features/views/components/ContactPage";
import HomePage from "./features/views/components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <main className="flex-1 flex justify-center">
        <Routes>
          <Route Component={HomePage} path="/" />
          <Route Component={AboutPage} path="/about" />
          <Route Component={ContactPage} path="/contact" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
