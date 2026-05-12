import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl, metaForPath } from '../../lib/siteMeta'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const sel = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`
  let el = document.head.querySelector(sel) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function RouteHead() {
  const { pathname } = useLocation()
  const path = pathname || '/'
  const meta = metaForPath(path)
  const pageUrl = absoluteUrl(path)
  const ogImage = absoluteUrl('/og-image.svg')

  useEffect(() => {
    document.title = meta.title
    upsertMeta('name', 'description', meta.description)
    upsertLink('canonical', pageUrl)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', pageUrl)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '630')
    upsertMeta('property', 'og:site_name', 'DayZ Dons')
    upsertMeta('property', 'og:locale', 'en_GB')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', ogImage)
  }, [meta.title, meta.description, pageUrl, ogImage])

  return null
}
