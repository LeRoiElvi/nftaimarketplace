import Particles from 'react-tsparticles'
import React from 'react'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
  <Particles
    options={{
      fpsLimit: 60,
      particles: { number: { value: 50 }, color: { value: '#007aff' } }
    }}
  />
<h1>🚀 Welcome to Your Web3 NFT Marketplace</h1>
<p>Discover, collect, and trade unique digital assets with style! 🌐✨</p>
<div className="buttons">
        <button className="primary">Get Started</button>
        <button>Learn More</button>
      </div>
    </div>
  )
}