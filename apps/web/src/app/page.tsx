import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="flex h-screen flex-1 items-center justify-center bg-gray-800">
        <section className='w-full md:w-1/2 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-500 to-red-500'>The bank</h1>
        </section>
        <section className='w-full md:w-1/2 flex flex-col justify-center items-center text-white'>
            <Image src='/profile.jpg' alt='Profile photo' width='100' height='100' className='rounded-full w-[100px] h-[100px]'/>
            <button>Go to dashboard</button>
        </section>
    </main>
  );
}
