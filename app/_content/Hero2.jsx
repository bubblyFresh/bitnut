import React from 'react'

function Hero2() {
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl md:text-6xl text-primary'>How to Buy $Bitnut</h1>
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start mx-10 lg:mx-32 xl:mx-48 2xl:mx-56 text-primary'>
                <div className='flex flex-col items-center text-center'>
                    <h1 className='text-4xl'>Create a Wallet</h1>
                    <p className='text-2xl mt-4'>You need a Solana wallet to BUY $Bitnut</p>
                </div>

                <div className='flex flex-col items-center text-center'>
                    <h1 className='text-4xl'>Fund Some $SOL</h1>
                    <p className='text-2xl mt-4'>
                        You can purchase $SOL directly through Phantom, transfer it from another wallet,
                        or buy it on a centralized exchange (CEX) and send it to your wallet.
                    </p>
                </div>

                <div className='flex flex-col items-center text-center'>
                    <h1 className='text-4xl'>Buy $Bitnut</h1>
                    <p className='text-2xl mt-4'>Use your funded wallet to purchase $Bitnut on supported platforms.</p>
                </div>
            </div>

        </div>
    )
}

export default Hero2
