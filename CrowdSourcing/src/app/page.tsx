import Image from 'next/image'
import ActionCard from './Components/ActionCard'

export default function Home() {
  const actions: IAction[] = [
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action",
      description: "Solution for a problem",
      author: "Unknown",
      address: {
        uf: "SP",
        city: "Poá",
        neighborhood: "Jardim Bela Vista"
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: "2023-10-23"
    },
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action",
      description: "Solution for a problem",
      author: "Unknown",
      address: {
        uf: "SP",
        city: "Poá",
        neighborhood: "Jardim Bela Vista"
      },
      amountCollected: 300,
      totalGoal: 1000,
      finalDate: "2023-10-23"
    }

  ]
  return (
    <main className="flex flex-col items-center">
      <div className='mt-[56px]'>
        <h1 className='text-[56px] text-black font-extrabold text-center'>
          Escolha uma Ação para apoiar
        </h1>
      </div>
      <div className='flex flex-wrap gap-8 w-full max-w-[1400px] justify-center py-4'>
        {actions.map((action, index) =><ActionCard key={index} action={action}/>)}
      </div>
    </main>
  )
}
