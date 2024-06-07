/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import HomeMainphoto from '../assets/main_hero.png'
import HomeMainphoto2 from '../assets/homeMain2.png'
import HomeMainTruck from '../assets/noun_delivery_1095359.svg'
import HomeMainTick from '../assets/tick_noun_guarantee_952398.svg'
import HomeMainHeadphone from '../assets/headphone-995.svg'
import HomeMainWallet from '../assets/noun_Wallet_745515.svg'

const HomeMain = () => {
  return (
    // sofa part
    <div className='mt-[120px] 2xl:max-w-[1400px] xl:max-w-[1100px] lg:max-w-[950px]  md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto truncate'>
        <div className=" lg:h-[600px] md:h-[450px] es:h-[300px] h-[250px] mx-auto bg-[#444444]  rounded-3xl relative">
            <div className=" text-white flex flex-col gap-[15px] items-end  mr-[80px]">
                    <h4 className="sm:text-4xl text-xl font-[600] tracking-wide lg:mt-[130px] md:mt-[100px] sm:mt-[50px] mt-[20px] z-20">Bukhara</h4>
                    <h3 className="sm:text-6xl text-4xl font-[700] tracking-wide z-20">Natural</h3>
                    <h2 className="xl:text-9xl sm:text-8xl  text-5xl font-[800] sm:tracking-wide z-20">Product</h2>
            </div>
            <div className='absolute 2xl:top-[-10%]  xl:top-[-10%] sm:top-[-1%] top-[20%] 2xl:left-[-15%] xl:left-[-25%] left-[-25%] '>
                <img src={HomeMainphoto} alt="" />
            </div>
        </div>

        {/* list */}
       <div className='mt-[100px] xl:w-11/12 lg:w-full sm:w-10/12 w-full mx-auto lg:flex lg:flex-row flex flex-col gap-10 lg:gap-0'>
           <ul className=' flex  lg:w-2/4 w-full'>
                <li className='w-1/2 lg:flex lg:flex-row flex flex-col items-center gap-5 text-center lg:text-left'>
                    <img src={HomeMainTruck} alt="truck" />
                    <div>
                      <p className='font-[700] es:text-[18px] text-[16px]  '>Free shipping</p>
                      <p className='text-gray-500 es:text-[16px] text-[12px] text-wrap px-1'>Free shipping on all orders</p>
                    </div>
                </li>
                <li className='w-1/2 lg:flex lg:flex-row flex flex-col items-center gap-5 text-center lg:text-left'>
                    <img src={HomeMainTick} alt="truck" />
                    <div>
                      <p className='font-[700] es:text-[18px] text-[16px]   '>Return Guarantee</p>
                      <p className='text-gray-500 es:text-[16px] text-[12px] text-wrap px-1'>30 day money back</p>
                    </div>
                </li>
            </ul>
            <ul className='flex lg:w-2/4 w-full  '>
                <li className='w-1/2 lg:flex lg:flex-row flex flex-col items-center gap-5 text-center lg:text-left' >
                    <img src={HomeMainHeadphone} alt="truck" />
                    <div>
                      <p className='font-[700] es:text-[18px] text-[16px]   '>Online support 24/7</p>
                      <p className='text-gray-500 es:text-[16px] text-[12px] text-wrap px-1'>Technical support 24/7</p>
                    </div>
                </li>
                <li className='w-1/2 lg:flex lg:flex-row flex flex-col items-center gap-5 text-center lg:text-left'>
                    <img src={HomeMainWallet} alt="truck" />
                    <div>
                      <p className='font-[700] es:text-[18px] text-[16px]   '>Secure payment</p>
                      <p className='text-gray-500 es:text-[16px] text-[12px] text-wrap  '>All payment methods accepted</p>
                    </div>
                </li>
            </ul>
       </div>
       
       {/* Fofa part 2 */}
       <div className='bg-[#31384d] w-full mx-auto lg:h-[350px] h-[500px]  my-[300px] rounded-2xl text-white lg:flex lg:flex-row lg:justify-between flex flex-col pt-[190px] lg:pt-0  2xl:px-[60px] xl:px-[30px] lg:px-[15px]  items-center relative ' >
             <img className='absolute 2xl:top-[-300px] xl:top-[-200px] lg:top-[-150px] md:top-[-270px] sm:top-[-180px] es:top-[-100px] top-[-30px] 2xl:pl-[40px] xl:pl-0 xl:pr-[140px] lg:pl-[15px] lg:pr-[110px]' src={HomeMainphoto2} alt="" />
           <div className='flex flex-col items-center lg:gap-6 '>
             <p className='font-[900] 2xl:text-9xl lg:text-8xl sm:text-7xl text-6xl '>100%</p>
             <p className='font-[600] sm:text-2xl text-lg'>Material quality</p>
           </div>
           <div className='flex flex-col text-center lg:text-left w-[400px] lg:gap-8 gap-4 lg:pl-[90px] xl:pl-[60px]  2xl:pl-0 '>
              <p className='font-[800] sm:text-3xl text-2xl'>'Bukhara Natural Product'</p>
              <p className='text-wrap text-center lg:text-left text-gray-300 w-[300px] sm:w-full mx-auto'>
                has been a company that produces cotton fabrics for use all over the world for many years
              </p>
              <button className='rounded-full bg-white text-[#31384d] font-[600] text-lg w-[170px] lg:self-start self-center  py-2'>Collection</button>
           </div>
       </div>
    </div>
  )
}

export default HomeMain