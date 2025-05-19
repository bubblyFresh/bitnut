import React from 'react'
import Header from '../_components/Header'

function Hero1() {
  return (
    <div 
      className="bg-cover bg-center h-[80vh]"
      style={{
        backgroundImage: "url('bg.png')",
      }}
    >
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">Your Headline Here</h1>
          <p className="text-2xl text-white mb-8">Your compelling subheading that explains your value proposition.</p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero1