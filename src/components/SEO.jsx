import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Reusable SEO Manager for Single Page Application
 * Updates document title, meta description, canonical tag, and structured JSON-LD schemas
 */
export default function SEO({
  title,
  description,
  schema = null,
  canonicalPath = null,
}) {
  const location = useLocation()
  const siteUrl = 'https://www.usestimatespro.com'
  const currentPath = canonicalPath || location.pathname
  const canonicalUrl = `${siteUrl}${currentPath === '/' ? '' : currentPath}`

  useEffect(() => {
    // 1. Title (Google standard: <= 60 characters)
    if (title) {
      document.title = title
    }

    // 2. Meta Description (<= 155 characters)
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)

      // Open Graph Description
      let ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', description)
      let twDesc = document.querySelector('meta[name="twitter:description"]')
      if (twDesc) twDesc.setAttribute('content', description)
    }

    // 3. Open Graph Title
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', title)
      let twTitle = document.querySelector('meta[name="twitter:title"]')
      if (twTitle) twTitle.setAttribute('content', title)
    }

    // 4. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

    // 5. Schema JSON-LD Injection
    let scriptTag = document.getElementById('page-jsonld-schema')
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = 'page-jsonld-schema'
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(schema)
    } else if (scriptTag) {
      scriptTag.remove()
    }

    return () => {
      // Clean up injected page-specific schema on unmount
      const existingScript = document.getElementById('page-jsonld-schema')
      if (existingScript) existingScript.remove()
    }
  }, [title, description, canonicalUrl, schema])

  return null
}
