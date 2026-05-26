import './MediaPlaceholder.css'

export default function MediaPlaceholder({
  type = 'image',
  label,
  aspectRatio = '16/9',
  className = '',
  tall = false,
}) {
  const icons = {
    image: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    video: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 9l6 3-6 3V9z" fill="currentColor" stroke="none" />
      </svg>
    ),
    gallery: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  }

  return (
    <div
      className={`media-placeholder ${tall ? 'media-placeholder--tall' : ''} ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label || `Miejsce na ${type === 'video' ? 'wideo' : 'grafikę'}`}
    >
      <div className="media-placeholder__inner">
        <span className="media-placeholder__icon">{icons[type] || icons.image}</span>
        <span className="media-placeholder__label">
          {label || (type === 'video' ? 'Wideo' : 'Multimedia')}
        </span>
        <span className="media-placeholder__hint">
          Podmień na &lt;img&gt; lub &lt;video&gt;
        </span>
      </div>
    </div>
  )
}
