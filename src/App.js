import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import axios from './axios';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([""]);
  useEffect(() => {
    getProducts();

    // axios.get('/products')
    // .then((response) => setProducts(response.data.products))
    // // catch method runs only when theres an error in then method 
    // .catch((error) => setError(error.message));
  }, [])

  // TO USE ASYNC METHOD : BEST TO USE..
  async function getProducts() {
    try {
      const response = await axios.get('/products');
      console.log(response);
      setProducts(response.data.products);
    } catch (error) {
      setError(error.message)
    }
    
  }
  return (
    <div>
      {error !== "" && error}
      {products.map((product, index) => {
        return (
          <div>
            <h3 key={index}>{product.title}</h3>
            <h4>${product.price}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default App;

// IT CAN BE USE LIKE THIS : // axios.get('https://dummyjson.com/products')
// OR CREATE A NEW Axios.JS AND IMPORT LIKE THIS:    // axios.get('/products')
