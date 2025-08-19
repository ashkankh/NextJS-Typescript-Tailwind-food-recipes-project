import Link from 'next/link';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='container mx-auto lg:px-40'>
                <header className="flex flex-row justify-between py-2 items-center">
                    <Link href="/" className='font-extrabold text-xl text-green-500'>Food recipes</Link>
                    <div className='flex flex-row justify-around gap-4 text-gray-500'>
                        <Link href="/">Menu</Link>
                        <Link href="/">Categories</Link>
                    </div>
                </header>
            </div>

            <main className='container mx-auto lg:px-40 flex-grow'>
                {children}
            </main>

            <footer className='w-full bg-green-500 py-4'>
                <div className='container mx-auto lg:px-40'>
                    <p className='text-white text-center'>© 2023 Food Recipes</p>
                </div>
            </footer>
        </div>
    )
}
export default Layout