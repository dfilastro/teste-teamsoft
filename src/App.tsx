import { Body } from './components/Body';
import { Header } from './components/Header';
import { CartContextProvider } from './hooks/useCart';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Body />
    </CartContextProvider>
  );
}

export default App;
