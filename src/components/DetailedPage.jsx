import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Data } from './imgData'

const DetailedPage = () => {
  const id =  useLocation()
  const number = id.pathname.slice(11)
  const navigate = useNavigate()
 
  const dataDetailed = Data.filter(item => item.id == number)

  
  const similarProducts = Data.filter(item => item.category == dataDetailed[0].category)
  const rendomSimiral = similarProducts.filter(item => item.id > 4 * Math.floor(Math.random() * 10) + 4).slice(0,4)

   
  

 
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

            {/* Review */}
             {/* riview */}
            <div className='mt-40 lg:max-w-[1000px] mx-auto'>
              <hr />
              <form action="">
               <div  className='grid grid-cols-2 sm:gap-10 gap-2 mt-20'>
                <div>
                    <label htmlFor="">Name *</label>
                    <input type="text" className='bg-gray-300 block rounded-full py-3 w-full mt-3' />
                  </div>
                  <div>
                    <label htmlFor="">Email *</label>
                    <input type="text" className='bg-gray-300 block rounded-full py-3 w-full mt-3' />
                  </div>
               </div>
              <div className='mt-10'>
                 <label htmlFor="">Your feedback *</label>
                 <textarea name="" id=""  rows="8" className='bg-gray-300 block rounded-xl py-3 w-full mt-3'></textarea>
              </div>
              <button type="submit" className="rounded-full mt-8 bg-red-600 py-3 px-16 font-[500]  hover:bg-slate-600 mr-3 text-white place-content-end">Submit</button>
              </form>
            </div>

            {/* similar products */}
            <h2 className='text-5xl font-[800] text-center my-20'>Similar products</h2>
            <div className='lg:grid lg:grid-cols-4 es:grid es:grid-cols-2 grid grid-cols-1 w-full gap-5 mt-20 lg:max-w-[1200px] mx-auto'>
               {
               rendomSimiral.map((item, index) => (
                 <div key={index} onClick={() => navigate(`/detailed/:${item.id}`)} >
                   <img className='rounded-2xl' src={item.image} alt={item.name} />
                   <p className=' mt-2 pl-2 text-blue-700 hover:text-red-700 hover:italic hover:font-[700]  font-[600]'>{item.name}</p>
                 </div>
               ))
               }
            </div>
       </div>
    
  )
}

export default DetailedPage