import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function HeroSlideshow({ slides, interval = 6000, children }) {
  const [current, setCurrent] = useState(0)

  useEffect(
    function () {
      const nextImage = new Image()
      nextImage.src = slides[(current + 1) % slides.length].photo.large

      const timer = setTimeout(function () {
        setCurrent((current + 1) % slides.length)
      }, interval)

      return function () {
        clearTimeout(timer)
      }
    },
    [current, interval, slides],
  )

  const slide = slides[current]

  return (
    <div className='relative h-svh w-full overflow-hidden bg-ink'>
      <AnimatePresence>
        <motion.img
          key={slide.photo.id}
          src={slide.photo.large}
          alt={slide.photo.alt}
          fetchPriority={current === 0 ? 'high' : 'auto'}
          className='absolute inset-0 h-full w-full object-cover'
          style={{ objectPosition: slide.position }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.6, ease: 'easeInOut' },
            scale: { duration: interval / 1000 + 1.6, ease: 'linear' },
          }}
        />
      </AnimatePresence>
      <div className='absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/60' />
      <div className='relative z-10 h-full'>{children}</div>
    </div>
  )
}

export default HeroSlideshow
