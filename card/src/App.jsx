
import './App.css'



function App() {
 return(
  <div className='text-center bg-red-100 m-40 w-1/3 mx-auto rounded-2xl'>
    <div className='grid grid-cols-2 gap-2 '>
      <div className=' bg-red-100 rounded-2xl mb-2'>
        <img src='./public/images/profile.png' className='rounded-full  mx-auto p-4 shadow-md'/>
      </div>
      <div>
        <div className='p-4'>
          <h1 className='text-stone-600 font-bold text-2xl'>Parisa MontakhabiSani</h1>
          <p className='text-stone-500 mt-4'><span className='font-bold'>Frontend-Developer</span>, I live in Rome, at this time I work by myself at home as  a freelancer but I'm looking for  a new position ;)</p>
        </div>

        <div className='grid grid-rows-3 grid-cols-3 gap-1 p-4'>
          <div className='text-stone-600 font-semibold bg-orange-500 rounded-2xl'> HTML</div>
          <div className='text-stone-600 font-semibold rounded-2xl bg-lime-500'> CSS</div>
          <div className='text-stone-600 font-semibold rounded-2xl bg-red-300 '> JS</div>
          <div className='text-stone-600 font-semibold rounded-2xl bg-cyan-300'> REACT</div>
          <div className='text-stone-600 font-semibold rounded-2xl bg-blue-400'> NEXT.JS</div>
          <div className='text-stone-600 font-semibold rounded-2xl bg-purple-400'> TAILWIND</div>
          <div className='text-stone-600 font-semibold rounded-2xl bg-purple-300 col-span-2'> BOOTSTRAP</div>
          <div className='text-stone-600 font-semibold rounded-2xl bg-rose-400'> GIT</div>
          

        </div>
      </div>

    </div>

  </div>
 )
}

export default App
