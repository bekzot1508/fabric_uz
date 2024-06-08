// import React from 'react'
import HomeMainphoto2 from '../assets/homeMain2.png'
import HomeMainphoto3 from '../assets/Autumn_sofa.png'
import HomeMainphoto4 from '../assets/Summer_main_sofa.png'
// winter collections
import picture1 from '../assets/Winter_Collections/Winter_Bambi.jpg'
import picture2 from '../assets/Winter_Collections/Winter_Byzantium.jpg'
import picture3 from '../assets/Winter_Collections/Winter_Circles.jpg'
import picture4 from '../assets/Winter_Collections/Winter_Evening-garden.jpg'
import picture5 from '../assets/Winter_Collections/Winter_Feather Marquis.jpg'
import picture6 from '../assets/Winter_Collections/Winter_Geometry blue.jpg'
import picture7 from '../assets/Winter_Collections/winter_Ikat.jpg'
import picture8 from '../assets/Winter_Collections/Winter_Lavender-roses.jpg'
import picture9 from '../assets/Winter_Collections/Winter_Squares.jpg'
import picture10 from '../assets/Winter_Collections/Winter_Tropical-leaves.jpg'
// autumn collections
import pictures1 from '../assets/Automn_Collections/aut_Autumn-leaf-fall.jpg'
import pictures2 from '../assets/Automn_Collections/aut_Blue-Breeze.jpg'
import pictures3 from '../assets/Automn_Collections/aut_Emerald.jpg'
import pictures4 from '../assets/Automn_Collections/aut_Malachite Box.jpg'
import pictures5 from '../assets/Automn_Collections/aut_Multicoloredamethyst.jpg'
import pictures6 from '../assets/Automn_Collections/aut_Plaid.jpg'
import pictures7 from '../assets/Automn_Collections/aut_Safari.jpg'
import pictures8 from '../assets/Automn_Collections/aut_Scents-of-spring.jpg'
import pictures9 from '../assets/Automn_Collections/aut_Stucco-ornament.jpg'
import pictures10 from '../assets/Automn_Collections/aut_Water-Blue.jpg'
// autumn collections
import pictures_1 from '../assets/Summer_collections/sum_Alpine herbs.jpg'
import pictures_2 from '../assets/Summer_collections/sum_Dolly-the-Sheep.jpg'
import pictures_3 from '../assets/Summer_collections/sum_French Riviera.jpg'
import pictures_4 from '../assets/Summer_collections/sum_Green lotus.jpg'
import pictures_5 from '../assets/Summer_collections/sum_Inspirational.jpg'
import pictures_6 from '../assets/Summer_collections/sum_Mountain cornflower.jpg'
import pictures_7 from '../assets/Summer_collections/sum_Olive-branch.jpg'
import pictures_8 from '../assets/Summer_collections/sum_Sakura branch.jpg'
import pictures_9 from '../assets/Summer_collections/sum_Vintage style.jpg'
import pictures_10 from '../assets/Summer_collections/sum_fluttering dandelion.jpg'



const HomeWinterCollection = () => {
    const winterData = [
        {img: picture1, name: "Bambi"},
        {img: picture2, name: "Byzantium"},
        {img: picture3, name: "Circles"},
        {img: picture4, name: "Evening garden"},
        {img: picture5, name: "Feather Marquis"},
        {img: picture6, name: "Geometry blue"},
        {img: picture7, name: "Ikat"},
        {img: picture8, name: "Lavender roses"},
        {img: picture9, name: "Squares"},
        {img: picture10, name: "Tropical leaves"},
    ]
    const autumnData = [
        {img: pictures1, name: "Autumn leaf fall"},
        {img: pictures2, name: "Blue Breeze"},
        {img: pictures3, name: "Emerald"},
        {img: pictures4, name: "Malachite Box"},
        {img: pictures5, name: "Multicolor edamethyst"},
        {img: pictures6, name: "Plaid"},
        {img: pictures7, name: "Safari"},
        {img: pictures8, name: "Scents of spring"},
        {img: pictures9, name: "Stucco ornament"},
        {img: pictures10, name: "Water Blue"},
    ]
    const SummerData = [
        {img: pictures_1, name: "Alpine herbs"},
        {img: pictures_2, name: "Dolly the Sheep"},
        {img: pictures_3, name: "French Riviera"},
        {img: pictures_4, name: "Green lotus"},
        {img: pictures_5, name: "Inspirational"},
        {img: pictures_6, name: "Mountain cornflower"},
        {img: pictures_7, name: "Olive branch"},
        {img: pictures_8, name: "Sakura branch"},
        {img: pictures_9, name: "Vintage style"},
        {img: pictures_10, name: "fluttering dandelion"},
    ]
  return (
    <div className='mt-[120px] 2xl:max-w-[1400px] xl:max-w-[1100px] lg:max-w-[950px] es:px-2 md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto overflow-x-hidden'>
            {/* sofa part winter collections*/}
            <div className='shadoww  bg-[#31384d] w-full mx-auto lg:h-[350px] h-[500px] mt-[15px] es:mt-[70px] sm:mt-[220px] md:mt-[250px] lg:mt-[100px] 2xl:mt-[250px]  rounded-2xl text-white lg:flex lg:flex-row lg:justify-between flex flex-col pt-[190px] lg:pt-0  2xl:px-[60px] xl:px-[30px] lg:px-[15px]  items-center relative ' >
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
            <div className='md:mt-[160px] mt-[130px]'>
                {/* winter collection sofas */}
                <h2 className='text-center text-5xl font-[700]'>Winter collection</h2>
                <p className='text-center text-gray-400'>Bukhara Natural Product</p>
                <div className='lg:grid lg:grid-cols-5 grid grid-cols-2 gap-6 mt-20'>
                    {
                        winterData.map((item, index) => (
                            <div key={index} className=''>
                                <img className='rounded-2xl cursor-pointer' src={item.img} alt={item.name} />
                                <p className='mt-2 pl-2 hover:text-red-700 hover:italic hover:font-[500]'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* sofa part --> 2 <-- Outumn collections*/}
            <div className='shadoww  bg-[#31384d] w-full mx-auto lg:h-[350px] h-[500px]  md:mt-[320px] mt-[120px] rounded-2xl text-white lg:flex lg:flex-row lg:justify-between flex flex-col pt-[190px] lg:pt-0  2xl:px-[60px] xl:px-[30px] lg:px-[15px]  items-center relative ' >
                    <img className='absolute 2xl:top-[-300px] xl:top-[-200px] lg:top-[-150px] md:top-[-270px] sm:top-[-180px] es:top-[-100px] top-[-30px] 2xl:pl-[40px] xl:pl-0 xl:pr-[140px] lg:pl-[15px] lg:pr-[110px]' src={HomeMainphoto3} alt="" />
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
            <div className='md:mt-[160px] mt-[130px]'>
                {/* winter collection sofas */}
                <h2 className='text-center text-5xl font-[700]'>Autumn collection</h2>
                <p className='text-center text-gray-400'>Bukhara Natural Product</p>
                <div className='lg:grid lg:grid-cols-5 grid grid-cols-2 gap-6 mt-20'>
                    {
                        autumnData.map((item, index) => (
                            <div key={index} className=''>
                                <img className='rounded-2xl cursor-pointer' src={item.img} alt={item.name} />
                                <p className='mt-2 pl-2 hover:text-red-700 hover:italic hover:font-[500]'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* sofa part --> 3 <-- Summer collections*/}
            <div className='shadoww  bg-[#31384d] w-full mx-auto lg:h-[350px] h-[500px] md:mt-[320px] mt-[120px]  rounded-2xl text-white lg:flex lg:flex-row lg:justify-between flex flex-col pt-[190px] lg:pt-0  2xl:px-[60px] xl:px-[30px] lg:px-[15px]  items-center relative ' >
                    <img className='absolute 2xl:top-[-300px] xl:top-[-200px] lg:top-[-150px] md:top-[-270px] sm:top-[-180px] es:top-[-100px] top-[-30px] 2xl:pl-[40px] xl:pl-0 xl:pr-[140px] lg:pl-[15px] lg:pr-[110px]' src={HomeMainphoto4} alt="" />
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
            <div className='md:mt-[160px] mt-[130px]'>
                {/* winter collection sofas */}
                <h2 className='text-center text-5xl font-[700]'>Summer collection</h2>
                <p className='text-center text-gray-400'>Bukhara Natural Product</p>
                <div className='lg:grid lg:grid-cols-5 grid grid-cols-2 gap-6 mt-20'>
                    {
                        SummerData.map((item, index) => (
                            <div key={index} className=''>
                                <img className='rounded-2xl cursor-pointer' src={item.img} alt={item.name} />
                                <p className='mt-2 pl-2 hover:text-red-700 hover:italic hover:font-[500]'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}

export default HomeWinterCollection