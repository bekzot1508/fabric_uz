/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import logo from '../assets/logo.png'

const FooterMenu = () => {
  return (
    <div>
        <div className='mt-[120px] 2xl:max-w-[1400px] xl:max-w-[1100px] lg:max-w-[950px]  md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto'>
          <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 gap-8'>
            {/* footer logo */}
             <div>
                <img src={logo} alt="" />
                <p className='mt-8 pr-12 text-sm text-gray-500'>
                 'Bukhara Natural Product' has been a company that produces cotton fabrics for many years for use all over the world.
                </p>
             </div>

             {/* menu */}
             <div>
                <h3 className='text-xl font-[700] mb-3'>Menu</h3>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About US</a>
                    </li>
                    <li>
                        <a href="#">Collection</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
             </div>

             {/* contacts */}
             <div>
                <h3 className='text-xl font-[700] mb-3'>Contacts</h3>
                <ul>
                    <li>Bukhara, st. Alpomysh 80.</li>
                    <li>Bnpuz@bk.ru</li>
                    <li>bnp_fabrik</li>
                    <li>info@bnpfabric.com</li>
                    <li>+998 93 383 75 85</li>
                    <li>+998 93 960 78 00</li>
                </ul>
             </div>

             {/* Email */}
             <div className=''>
                <h3 className='text-xl font-[700]'>Subscribe to our email</h3>
                 <form action="" >
                    <div className='relative mt-8'>
                    <input type="text" placeholder='Enter Your Email' className='py-4 border px-3 w-full rounded-full'/>
                    <button className='border bg-red-600 hover:bg-slate-600 rounded-full py-2 px-4 text-white absolute top-2 right-2'> Subscribe</button>
                    </div>
                 </form>
             </div>
          </div>
        </div>
        <div className='bg-black py-6 mt-20 md:mt-32'>
            <div className='2xl:max-w-[1400px] xl:max-w-[1100px] lg:max-w-[950px]  md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto'>
                <p className='text-gray-500 font-[500]'>
                   © 2024 LLC "BUKHARA NATURAL PRODUCT". All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
}

export default FooterMenu