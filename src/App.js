import { useState } from 'react';
import Modal from './components/Modal.js';
import ProductList from './components/ProductList.js';
import { data } from './data.js'
function App() {
  const [currentShoe, setCurrentShoe] = useState(null);
  return (
    <div className="container">
      <ProductList data={data} setCurrentShoe={setCurrentShoe} />
      <Modal currentShoe={currentShoe} />
    </div>
  );
}

export default App;
