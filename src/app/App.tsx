import { Routes, Route } from 'react-router-dom';
import { CartPage } from '@/pages/CartPage/CartPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import '@/index.css'

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Страница 404 для несуществующих маршрутов */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
