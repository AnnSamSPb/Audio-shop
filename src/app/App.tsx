import { Routes, Route, Navigate } from 'react-router-dom';
import { CartPage } from '@/pages/CartPage/CartPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import '@/index.css'
import { Container } from '@/shared/ui/Container/Container';

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
