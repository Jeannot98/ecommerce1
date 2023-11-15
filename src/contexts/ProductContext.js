import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext= createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts]=useState([]);

  useEffect(()=>{
    const productsList =()=> axios.get('https://fakestoreapi.com/products').then(resp=>{
      setProducts(resp.data)
    })
    productsList();
  },[])
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
