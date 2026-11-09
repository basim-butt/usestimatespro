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
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        width: '46px',
        height: '46px',
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
