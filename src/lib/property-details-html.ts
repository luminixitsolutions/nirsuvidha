import DOMPurify from 'isomorphic-dompurify'

const ALLOWED_TAGS = [
  'p',
  'br',
  'div',
  'span',
  'strong',
  'b',
  'em',
  'i',
  'u',
  'h2',
  'h3',
  'h4',
  'ul',
  'ol',
  'li',
  'a',
  'blockquote',
]

/** Safe HTML for admin-authored property details (CKEditor output + legacy plain text). */
export function propertyDetailsToSafeHtml(
  raw: string | null | undefined,
): string {
  if (raw == null || !String(raw).trim()) {
    return ''
  }
  const t = String(raw).trim()
  if (!t.includes('<')) {
    const escaped = t
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
    return `<p>${escaped.replace(/\n/g, '<br/>')}</p>`
  }

  return DOMPurify.sanitize(t, {
    ALLOWED_TAGS,
    ALLOWED_ATTR: ['href', 'title', 'target', 'rel', 'class'],
    ADD_ATTR: ['target'],
  })
}

/** CKEditor output for real-estate care cards — same allowlist as property details. */
export const careServiceDescriptionToSafeHtml = propertyDetailsToSafeHtml
