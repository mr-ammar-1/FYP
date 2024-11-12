import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="h-[75vh] flex justify-center"
      style={{
  backgroundImage: `url('/Background.jpeg')`,  // using absolute path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
    >
      <div className='bg-primary/85 text-center flex justify-center w-full items-center'>
        <div className='w-[95%] md:w-[80%] lg:w-[68%]'>
        <h1 className='text-white text-[30px] sm:text-[50px] font-semibold mb-5'>Trending Topics from Urdu Videos</h1>
<p className='text-customWhite text-xl sm:text-2xl font-normal'>
   Discover the latest trending topics from popular Urdu videos, helping audiences stay updated with current themes, news, and viral content in the Urdu-speaking community.
</p>
<button className='text-white bg-transparent border-2 font-normal text-xl px-16 py-3 rounded-lg mt-10 hover:bg-white hover:text-violet-600 transition-all duration-300'>Buy Now</button>


        </div>
      </div>
    </div>
  );
};

export default HeroSection;
