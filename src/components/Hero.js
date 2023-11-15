import React from 'react';
import heroImage from '../img/woman_hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return(
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center
    py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 bg-red-500 mr-3 h-[2px]'></div>New Trand
          </div>
          
          <h1 className='text-[70px] leading-[1.1] font-light'>
            AUTUMN SALE STYLISH <br/>
            <span className='font-semibold'>WOMENS</span>
          </h1>

          <Link to='/' className='self-start uppercase font-semibold
          border-b-2 border-primary'>Discover More</Link>
        </div>

        <div>
          <div className='hidden lg:block'>
            <img src={heroImage} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
