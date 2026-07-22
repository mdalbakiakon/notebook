import React from 'react'

const Banner = ({onCreateClick}) => {
  return (
    <section className='w-full max-w-7xl h-45 rounded-4xl mx-auto overflow-hidden flex flex-col justify-center items-center relative'>
        <img fetchPriority='high' loading='eager' src="/banner.webp" alt="banner image" className=' select-none absolute top-0 left-0 w-full h-full object-center object-cover opacity-90 z-0'/>
        <h1 className='text-4xl text-black select-none font-semibold tracking-tighter leading-tight relative z-10 text-center p-2.5'>What's on your mind?</h1>

        <button
        onClick={onCreateClick}
        className="p-2.5 bg-[#121212] font-bold tracking-tight leading-tight text-white text-base rounded-md cursor-pointer select-none relative z-10 shadow-lg"
      >
        Create Note
      </button>
    </section>
  )
}

export default Banner