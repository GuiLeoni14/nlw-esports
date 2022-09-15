import './styles/main.css'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src="/assets/logo.svg" alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/game.png" alt="" />
          <div className="w-full pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game-gradient">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/game.png" alt="" />
          <div className="w-full pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game-gradient">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/game.png" alt="" />
          <div className="w-full pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game-gradient">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/game.png" alt="" />
          <div className="w-full pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game-gradient">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/game.png" alt="" />
          <div className="w-full pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game-gradient">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/game.png" alt="" />
          <div className="w-full pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game-gradient">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="flex justify-between bg-[#2A2634] py-6 px-8">
          <div className="flex flex-col items-start text-2xl">
            <strong className="font-black text-2xl block text-white">
              Não encontrou seu duo?
            </strong>
            <span className="text-base text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="bg-violet-500 text-white inline-flex items-center justify-center gap-3 rounded py-3 px-4 hover:bg-violet-600 transition-colors">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
