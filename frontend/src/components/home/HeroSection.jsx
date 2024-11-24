// import React from 'react'
// import { Input } from '../ui/input'
// import { Search } from 'lucide-react'
// import { Button } from '../ui/button'

// const HeroSection = () => {
//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>

//                 <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6a38c2]'>Dream Job</span></h1>
//                 <p>Connecting you to the perfect job or candidate where opportunities come to life.</p>
//                 <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type='text'
//                         placeholder='Find your dream job'
//                         className='outline-none border-none w-full'
//                     />
//                     <Button className="rounded-r-full bg-[#6a38c2] hover:bg-[#5a2a9a]">
//     <Search className='h-5 w-5 text-white'/>
// </Button>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default HeroSection

import React from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section className="text-center py-16 ">
      <div className="flex flex-col items-center gap-6 mx-auto max-w-screen-lg px-4">
        {/* Badge */}
        <span className="px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-semibold text-sm shadow-md">
          No. 1 Job Hunt Website
        </span>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Search, Apply & <br /> 
          Get Your <span className="text-[#6a38c2]">Dream Job</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl">
          Connecting you to the perfect job or candidate where opportunities come to life.
        </p>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-lg shadow-md rounded-full border border-gray-300 bg-white p-2">
          <input
            type="text"
            placeholder="Find your dream job..."
            className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 bg-transparent outline-none"
          />
          <Button className="flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600">
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
