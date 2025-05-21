import React from 'react'
import Image from 'next/image'

function Hero3() {
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl md:text-6xl text-primary'>Life of $tun</h1>
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 mx-10 lg:mx-32 xl:mx-48 2xl:mx-56 text-primary min-h-[600px]'>

                <div className='flex items-center justify-center text-center'>
                    <p className='text-3xl text-primary mb-6 max-w-xl'>
                        Deep in the enchanted forest, tun hides behind an old oak tree, her fluffy tail twitching with excitement as she plays hide-and-seek.</p>
                </div>


                <div className='flex items-center justify-center'>
                    <Image
                        src="/sq1.png"
                        alt="logo"
                        width={800}
                        height={800}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <Image
                        src="/sq2.png"
                        alt="logo"
                        width={800}
                        height={800}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className='flex items-center justify-center text-center'>
                    <p className='text-3xl text-primary mb-6 max-w-xl'>
                        tun is nestled deep in the forest, peacefully relaxing as the gentle wind weaves through the trees, carrying whispers of nature’s calm all around.
                    </p>
                </div>
                <div className='flex items-center justify-center'>

                    <p className='text-3xl text-primary mb-6 max-w-xl'>
                     tun patiently waits as the little nut slowly grows, full of hope and promise.
                    </p>
                </div>
                <div className='flex items-center justify-center text-center'>
                    <Image
                        src="/sq3.png"
                        alt="logo"
                        width={800}
                        height={800}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

        </div>
    )
}

export default Hero3
