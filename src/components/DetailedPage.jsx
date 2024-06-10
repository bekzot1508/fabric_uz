import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Data } from './imgData'

const DetailedPage = () => {
  const id =  useLocation()
  const number = id.pathname.slice(11)
  const navigate = useNavigate()
 
  const dataDetailed = Data.filter(item => item.id == number)
  console.log(dataDetailed);

 
  return (
   
       <div className='mt-[200px] 2xl:max-w-[1500px] xl:max-w-[1100px] lg:max-w-[950px]  md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto'>
            {
                dataDetailed.map((item, index) => (
                       <div key={index} className='lg:grid lg:grid-cols-2 2xl:gap-40 xl:gap-20 lg:gap-10 grid grid-cols-1 gap-20'>
                          <div>
                            <img className='w-full rounded-3xl' src={item.image} alt="" />
                          </div>
                          <div className=''>
                            <h2 className='font-[700] text-3xl mb-7 2xl:mt-24 lg::mt-0 '>{item.name}</h2>
                                <div className='flex ' >
                                <p className='border border-black px-5 py-4 sm:w-1/4 w-2/4 text-gray-500'>Material:</p>
                                <p className='border border-black border-l-0 px-1 es:px-5 py-4 w-2/4 text-gray-500'>{item.Material}</p>
                                </div>
                                <div className='flex' >
                                <p className='border border-black px-5 py-4 sm:w-1/4 w-2/4 text-gray-500'>Pillowcase:</p>
                                <p className='border border-black border-l-0 px-1 es:px-5 py-4 w-2/4 text-gray-500'>{item.Pillowcase}</p>
                                </div>
                                <div className='flex' >
                                <p className='border border-black px-5 py-4 sm:w-1/4 w-2/4 text-gray-500'>Bed sheet:</p>
                                <p className='border border-black border-l-0px-1 es:px-5 py-4 w-2/4 text-gray-500'>{item.Bed_sheet}</p>
                                </div>
                                <div className='flex' >
                                <p className='border border-black px-5 py-4 sm:w-1/4 w-2/4 text-gray-500'>Duvet cover:</p>
                                <p className='border border-black border-l-0 px-1 es:px-5 py-4 w-2/4 text-gray-500'>{item.Duvet_cover}</p>
                                </div>
                                <div className='flex' >
                                <p className='border border-black px-5 py-4 sm:w-1/4 w-2/4 text-gray-500'>Size:</p>
                                <p className='border border-black border-l-0 px-1 es:px-5 py-4 w-2/4 text-gray-500'>{item.Size}</p>
                                </div>
                                <div className='flex' >
                                <p className='border border-black px-5 py-4 sm:w-1/4 w-2/4 text-gray-500'>Manufacturer:</p>
                                <p className='border border-black border-l-0 px-1 es:px-5 py-4 w-2/4 text-gray-500 '>{item.Manufacturer}</p>
                            </div>
                            <p className='mt-6'>Category: <span className='text-red-600' onClick={() => navigate('/collection')}>{item.category}</span></p>
                          </div>
                       </div>     
                ))
            }
       </div>
    
  )
}

export default DetailedPage