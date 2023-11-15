import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  const {products} = useContext(ProductContext)

  const filteredProducts= products.filter(item=>{
    return (item.category === "men's clothing" || item.category === "women's clothing");
  });

  console.log(filteredProducts);
  return (
    <div>
      <Hero/>
      <section className='py-16'>
        <div className=' mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]
          max-w-full px-7 mx-0 md:max-w-none md:mx-0'>
            {filteredProducts.map((product)=>(
              <Product key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;
