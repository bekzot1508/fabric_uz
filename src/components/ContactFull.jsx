// import React from 'react'
import EmailIcon from '../assets/email.svg'
import PhoneIcon from '../assets/phone.svg'
import AddressIcon from '../assets/address.svg'

const ContactFull = () => {
  return (
    <div className="mt-[200px] 2xl:max-w-[1400px] xl:max-w-[1100px] lg:max-w-[950px]  md:max-w-[700px] sm:max-w-[550px] es:max-w-[430px] max-w-[310px] mx-auto">
        <div className="lg:grid lg:grid-cols-5 gap-20 grid grid-col-1">
            <div className="md:col-span-2">
                <h2 className="font-[700] text-4xl">Contact</h2>
                <form>
                   <div className=" flex flex-col gap-6 mt-6">
                     <input type="text" placeholder="Your email" className="rounded-full py-4 pl-6 bg-gray-300"/>
                     <input type="text" placeholder="Phone Number" className="rounded-full py-4 pl-6 bg-gray-300"/>
                     <textarea placeholder="Your Message here" rows={7} className="rounded-3xl py-4 pl-6 bg-gray-300"/>
                     <button type="submit" className="rounded-full bg-red-600 py-3 px-16 font-[500]  hover:bg-slate-600 mr-3 text-white self-end">Submit</button>
                   </div>
                </form>
            </div>
            <div className="md:col-span-3">
                <div ><iframe className="w-full md:h-[550px] h-[300px]"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bukhara,%20Bukhara%20Region,%20Uzbekistan+(Bukhara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
                </div>
        </div>

        {/* icons */}
        <div className='lg:grid lg:grid-cols-3 grid grid-cols-1 gap-8 mt-28'>
            <div className='lg:flex lg:flex-row items-center flex flex-col gap-5'>
                <img src={EmailIcon} alt="email icon" />
                <p className='pl-4'>
                    <span className='font-[700]'>Email:</span>
                    <span>info@bnpfabric.uz</span>
                </p>
            </div>
            <div className='lg:flex lg:flex-row items-center flex flex-col gap-5 '>
                <img src={PhoneIcon} alt="email icon" />
                <p className='pl-4'>
                    <span className='font-[700]'>Tel:</span>
                    <span>+998 93 383 75 85</span>
                </p>
            </div>
            <div className='lg:flex lg:flex-row items-center flex flex-col gap-5'>
                <img src={AddressIcon} alt="email icon" />
                <p className='pl-4'>
                    <span className='font-[700]'>Address:</span>
                    <span>Bukhara, st. Alpomysh 80.</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ContactFull