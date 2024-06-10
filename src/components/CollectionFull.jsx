import {useState} from 'react'
import {Data} from './imgData.js'
import { MagnifyingGlass} from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';

const CollectionFull = () => {
  const navigate = useNavigate()
  const [generalPi, setGeneralPi] = useState(Data.filter(item => 1 == item.main_page))
  const [category, setCategory] = useState(true)
  const [sort, setsort] = useState(false)
    // console.log(Data);
    // General
  const general_16 = Data.filter(item => 1 == item.main_page)
  const general_32 = Data.filter(item => 2 == item.main_page)
  const general_48 = Data.filter(item => 3 == item.main_page)
  const general_64 = Data.filter(item => 4 == item.main_page)
  const general_rest = Data.filter(item => 5 == item.main_page)

  // Sort
  const sort_popularity = Data.filter(item => true == item.sort_ppopular)
  const sort_rating = Data.filter(item => true == item.sort_rating)
  const sort_novelty = Data.filter(item => true == item.sort_novelty)
  const sort_price_ascending = Data.filter(item => true == item.sort_price_ascending)
  const sort_price_descending = Data.filter(item => true == item.sort_price_descending)
 
  // Category
  const categoryWinter = Data.filter(item => "Winter collection" === item.category && 1 == item.page)
  const categoryWinter_2 = Data.filter(item => "Winter collection" === item.category && 2 == item.page)
  const categorySummer = Data.filter(item => "Summer collection" === item.category && 1 == item.page)
  const categorySummer_2 = Data.filter(item => "Summer collection" === item.category && 2 == item.page)
  const categoryAutumn = Data.filter(item => "Autumn collection" === item.category && 1 == item.page)
  const categoryAutumn_2 = Data.filter(item => "Autumn collection" === item.category && 2 == item.page)


  console.log( categoryWinter);
  

  return (
    <div className='mt-[200px] 2xl:max-w-[1500px] xl:max-w-[1200px] lg:max-w-[950px]  md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto'>
      
      {/* container */}
      <div className='flex gap-20'>
         <div >
          <form >
            <div className='relative '>
              <input type="text" placeholder='Search Here' className='border-2 rounded-full px-8 py-3 bg-gray-300' />
              <button className='absolute top-[6px] right-[10px] bg-red-500 rounded-full px-2 py-2 '>
                <MagnifyingGlass color='white' size={24} />
              </button>
            </div>
          </form>
          <button onClick={() => setCategory(!category)} className='mt-20'>Categories</button>
           <div className={`${category ? "block" : "hidden"}`}>
            <div className='flex flex-col gap-2 mt-5'>
              <button type='button' onClick={() => setGeneralPi(categoryWinter)}>Spring collection</button>
              <button type='button' onClick={() => setGeneralPi(categoryWinter)}>Winter collection</button>
              <button type='button' onClick={() => setGeneralPi(categorySummer)}>Summer collection</button>
              <button type='button' onClick={() => setGeneralPi(categoryAutumn)}>Autumn collection</button>
            </div>
           </div>
         </div>



        <div className='w-full '>
          <div className='flex justify-between'>
            <div>
              <h2 className='font-[700] text-3xl'>Collection</h2>
              <p>showing  {Data.length}</p>
            </div>
             <div className='relative w-[160px]'>
              <button type='button' onClick={() => setsort(!sort)}  className='bg-black text-white rounded-full px-8 py-3'>Initial sort</button>
              <div className={`${sort ? "block" : "hidden"}`}>
                <div className='flex flex-col p-2 text-left bg-black text-white absolute top-16 left-0 rounded-xl'>
                  <button type='button' onClick={() => setGeneralPi(sort_popularity)}  className='text-left'>By Popularity</button>
                  <button type='button' onClick={() => setGeneralPi(sort_rating)} className='text-left'>By Rating</button>
                  <button type='button' onClick={() => setGeneralPi(sort_novelty)} className='text-left'>By Novelty</button>
                  <button type='button' onClick={() => setGeneralPi(sort_price_ascending)} className='text-left'>Prices: ascending</button>
                  <button type='button' onClick={() => setGeneralPi(sort_price_descending)} className='text-left'>Prices: Descending</button>
                </div>
              </div>
              
             </div>
          </div>

          {/* picture part */}
          <div className=''>
            <div className='grid grid-cols-4 gap-6 mt-12 '>
              {
                generalPi.map((item, index) => (
                  <div key={index} onClick={() => navigate(`/detailed/:${item.id}`)}>
                    <img className='rounded-3xl ' src={item.image} alt="" />
                    <p className='mt-4'>{item.name}</p>
                  </div>
                ))
              }
            
            </div>
            <div className='flex gap-4 mt-16'>
              <button type='button' onClick={() => setGeneralPi(general_16)}  className={`bg-red-600 rounded-xl py-2 px-3 text-white`}>1</button>
              <button type='button' onClick={() => setGeneralPi(general_32)}  className={`bg-red-600 rounded-xl py-2 px-3 text-white`} >2</button>
              <button type='button' onClick={() => setGeneralPi(general_48)}  className={`bg-red-600 rounded-xl py-2 px-3 text-white`}>3</button>
              <button type='button' onClick={() => setGeneralPi(general_64)}  className={`bg-red-600 rounded-xl py-2 px-3 text-white`}>4</button>
              <button type='button' onClick={() => setGeneralPi(general_rest)}  className={`bg-red-600 rounded-xl py-2 px-3 text-white`}>5</button>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default CollectionFull