// import React from 'react'

// const Nevbar = () => {
//   return (
//     <nav className='bg-slate-800 text-white'>
//       <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">

//         <div className="logo font-bold text-white text-2xl">
//           <span className='text-green-700'>&lt;</span>
//           Pass
//           <span className='text-green-700'>op/&gt;</span>
//         </div>
//       <ul>
//         <li className='flex gap-4'>
//             <a className='hover:font-bold' href="">Home</a>
//             <a className='hover:font-bold' href="">Contact</a>
//             <a className='hover:font-bold' href="">About</a>
//         </li>
//       </ul>
//       <button className='text-white bg-green-700 my-5 rounded-md flex justify-between items-center ring-white ring-1'>
//         <img className='invert w-10 p-1' src="icons/github.svg" alt="github logo" />
//         <span className='font-bold px-2'>Git Hub</span>
//       </button>
//       </div>
//     </nav>
//   )
// }

// export default Nevbar


import React from 'react'

const Nevbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex flex-col md:flex-row justify-between items-center px-4 py-3 gap-3">

        <div className="logo font-bold text-white text-2xl">
          <span className='text-green-700'>&lt;</span>
          Pass
          <span className='text-green-700'>op/&gt;</span>
        </div>

        <ul>
          <li className='flex gap-4 text-sm md:text-base'>
            <a className='hover:font-bold' href="">Home</a>
            <a className='hover:font-bold' href="">Contact</a>
            <a className='hover:font-bold' href="">About</a>
          </li>
        </ul>

        <button className='text-white bg-green-700 rounded-md flex justify-between items-center ring-white ring-1'>
          <img
            className='invert w-10 p-1'
            src="icons/github.svg"
            alt="github logo"
          />
          <span className='font-bold px-2'>Git Hub</span>
        </button>

      </div>
    </nav>
  )
}

export default Nevbar