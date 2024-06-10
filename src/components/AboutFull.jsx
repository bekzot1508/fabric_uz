// import React from 'react'
import About_picture from '../assets/about_page_picture.png'

const AboutFull = () => {
  return (
    <div className="mt-[200px] 2xl:max-w-[1500px] xl:max-w-[1200px] lg:max-w-[950px]  md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto">
         {/* Container */}
        <div className="about__Container lg:grid lg:grid-cols-2 grid-cols-1 px-4">
           <div className='flex flex-col gap-5 2xl:pr-32 xl:pr-20 lg:pr-8'>
               <h1 className="font-[700] lg:text-[45px] md:text-[40px] sm:text-[25px]">
                   Bukhara Natural Product
               </h1>
               <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                  Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory has been a company that produces cotton fabrics for use all over the world for many years.
               </p>
               <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                  Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThis company has been serving customers for 17 years.
               </p>
               <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                 Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe main goal of this company is to produce high quality and cost effective products.
               </p>
               <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                    Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe production process of this company is completely environmentally friendly.
                </p>
                <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                    Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company can produce any types of cotton raw materials according to the requirements and suggestions of customers.
                </p>
               
               {/* pragraph contune */}
               <div className='block lg:hidden xl:block'>
                <div className='flex flex-col gap-5 '>
                        <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company is the official dealer of DongJia weaving machines in Uzbekistan.
                        </p>
                        <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsCurrently, more than 80 families contribute to the prestige and success of the company by providing financially for their families.
                        </p>
                        <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsTo meet this demand, 50 looms are running at high speed, non-stop.
                        </p>
                        <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsWe have the capacity to weave 200-250,000 meters of fabric per month.
                        </p>
                        <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsIn accordance with the high demand of our customers, the company has now launched the production of high-quality premium eco-bags.
                        </p>
                        <p className='lg:text-[16px] md:text-[14px] text-[13px] text-gray-400'>
                            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsBukhara Natural Product Company is pleased to serve its loyal customers at any time.
                        </p>
                </div>
               </div>
           </div>
           <div className='lg:mt-40 mt-20'>
             <img className='rounded-2xl' src={About_picture} alt="" />
           </div>
        </div>
    </div>
  )
}

export default AboutFull