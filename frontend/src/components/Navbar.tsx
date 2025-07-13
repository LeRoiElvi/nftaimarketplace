import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌐 NFT Market</div>
      <ul>
        <li>🏠 Home</li>
        <li>🛒 Marketplace</li>
        <li>📜 Docs</li>
        <li>👤 Profile</li>
      </ul>
    </nav>
  )
}
