import { Routes, Route } from 'react-router-dom';
import { CartPage } from '@/pages/CartPage/CartPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import '@/index.css'

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
