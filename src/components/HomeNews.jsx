// import React from 'react'
import news_1 from '../assets/news_1.png'
import news_2 from '../assets/news_2.png'
import news_3 from '../assets/news_3.png'

const HomeNews = () => {
  return (
    <div className='mt-[150px] 2xl:max-w-[1400px] xl:max-w-[1100px] lg:max-w-[950px] es:px-2 md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto'>
        <h1 className='font-[700] text-5xl text-center'>News</h1>
        <p className='text-gray-400 text-center'>Bukhara Natural Product</p>
        <div className='md:grid md:grid-cols-3 grid grid-cols-1 gap-12 mt-16'>

            {/* news card 1 */}
            <div>
                <img className='rounded-2xl cursor-pointer' src={news_1} alt="News Gadgets" />
                <p className='mt-4 text-gray-500 cursor-pointer'>
                    <span>10/05/2019 </span>
                    <span>by admin</span>
                </p>
                <h5 className='mt-5 font-[700] text-xl tracking-tighter cursor-pointer'>How to choose perfect gadgets</h5>
                <p className='tracking-tight text-wrap xl:pr-6 2xl:pr-24 mt-5 text-gray-500'>
                  When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s...
                </p>
            </div>
                 
            {/* news card 12 */}
            <div>
                <img className='rounded-2xl cursor-pointer' src={news_2} alt="News Gadgets" />
                <p className='mt-4 text-gray-500 cursor-pointer'>
                    <span>10/05/2019 </span>
                    <span>by admin</span>
                </p>
                <h5 className='mt-5 font-[700] text-xl tracking-tighter cursor-pointer'>How to choose perfect gadgets</h5>
                <p className='tracking-tight text-wrap xl:pr-6 2xl:pr-24 mt-5 text-gray-500'>
                  When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s...
                </p>
            </div>
                 
            {/* news card 3 */}
            <div>
                <img className='rounded-2xl cursor-pointer' src={news_3} alt="News Gadgets" />
                <p className='mt-4 text-gray-500 cursor-pointer'>
                    <span>10/05/2019 </span>
                    <span>by admin</span>
                </p>
                <h5 className='mt-5 font-[700] text-xl tracking-tighter cursor-pointer'>How to choose perfect gadgets</h5>
                <p className='tracking-tight text-wrap xl:pr-6 2xl:pr-24 mt-5 text-gray-500'>
                  There are many variations passages of Lorem Ipsum available, but the majority have suffered alterat ...
                </p>
            </div>
           
        </div>
    </div>
  )
}

export default HomeNews