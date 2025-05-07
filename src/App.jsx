
import './App.css'
import RickAndMorty from './assets/rick-and-morty-logo.svg'

function App() {

  return (
    <>
      <section className='flex flex-col items-center justify-center h-[100dvh] gap-10 lg:gap-12 font-[Montserrat]'>
        <img className='lg:w-[500px]' src={RickAndMorty} alt="Rick and Morty" />
        <div className='text-white text-center px-4 flex gap-4 flex-col lg:w-[872px]'>
          <h1 className='text-2xl lg:text-[2.25rem] font-bold'>
            Bienvenido a Rick and Morty
          </h1>
          <p className='text-sm lg:text-lg font-medium lg:font-semibold'>
            En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código y la reproducción del siguiente diseño.
          </p>
        </div>
        <a className='bg-[#8BC547] h-[2.75rem] flex px-[1.375rem] items-center rounded-full text-sm font-bold' href="#"><span className='text-[#354E18]'>
          Comenzar
          </span>
          </a>
      </section>
    </>
  )
}

export default App
