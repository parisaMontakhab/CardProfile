
import './App.css'

function App() {
 return(
  <div className='text-center bg-red-100 m-40 w-1/3 mx-auto'>
    <div className='grid grid-cols-2 gap-4'>
      <div className=' bg-red-100'>
        <img src='./public/images/profile.png' className='rounded-full  mx-auto p-4'/>
      </div>
      <div>
        <div className='p-4'>
          <h1 className='text-stone-600 font-bold text-2xl'>Parisa MontakhabiSani</h1>
          <p className='text-stone-500 mt-4'><span className='font-bold'>Frontend-Developer</span>, I live in Rome, at this time I work by myself at home as  a freelancer but I'm looking for  a new position ;)</p>
        </div>

        <div>skills</div>
      </div>

    </div>

  </div>
 )
}

export default App
