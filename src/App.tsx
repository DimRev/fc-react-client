import { BrowserRouter, Link, Route, Routes } from 'react-router'
import AboutPage from './features/views/components/AboutPage'
import ContactPage from './features/views/components/ContactPage'
import HomePage from './features/views/components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <header className="flex items-center justify-between">
        <div>Logo</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route Component={HomePage} path="/" />
          <Route Component={AboutPage} path="/about" />
          <Route Component={ContactPage} path="/contact" />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
