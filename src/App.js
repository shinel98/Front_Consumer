import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from './components/NotFound';
import Cart from './pages/Cart';
import Main from './pages/Main';
import OrderLayout from './pages/OrderLayout';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<OrderLayout />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/*여기에 route 추가 하면 됩니다 */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
  // return <h1>hello </h1>;
}

export default App;
