import React, { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="back-to-top-btn"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 999,
        width: '42px',
        height: '42px',
        borderRadius: '4px',
        backgroundColor: '#dc2626',
        color: '#ffffff',
        border: 'none',
        boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.25s ease',
      }}
    >
      ↑
    </button>
  )
}
