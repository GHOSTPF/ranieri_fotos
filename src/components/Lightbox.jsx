import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const SWIPE_DISTANCE = 60

function Lightbox({ photos, index, onChange, onClose }) {
  const closeRef = useRef(null)
  const total = photos.length
  const photo = photos[index]

  function previous() {
    onChange((index - 1 + total) % total)
  }

  function next() {
    onChange((index + 1) % total)
  }

  useEffect(
    function () {
      function handleKey(event) {
        if (event.key === 'Escape') onClose()
        if (event.key === 'ArrowLeft') onChange((index - 1 + total) % total)
        if (event.key === 'ArrowRight') onChange((index + 1) % total)
      }
      window.addEventListener('keydown', handleKey)
      return function () {
        window.removeEventListener('keydown', handleKey)
      }
    },
    [index, total, onChange, onClose],
  )

  useEffect(function () {
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current.focus()
    return function () {
      document.body.style.overflow = previousOverflow
      if (previousFocus) previousFocus.focus()
    }
  }, [])

  function handleDragEnd(event, info) {
    if (info.offset.x < -SWIPE_DISTANCE) next()
    if (info.offset.x > SWIPE_DISTANCE) previous()
  }

  const buttonClass = 'absolute z-10 cursor-pointer p-3 text-white/80 transition-colors hover:text-white'

  return createPortal(
    <motion.div
      role='dialog'
      aria-modal='true'
      aria-label='Visualização da foto'
      className='fixed inset-0 z-[60] flex items-center justify-center bg-black/95'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <button ref={closeRef} type='button' aria-label='Fechar' onClick={onClose} className={buttonClass + ' right-2 top-2'}>
        <X size={28} strokeWidth={1.25} />
      </button>

      <p className='absolute left-5 top-5 text-xs tracking-[0.2em] text-white/70' aria-live='polite'>
        {index + 1 + ' / ' + total}
      </p>

      <button
        type='button'
        aria-label='Foto anterior'
        onClick={function (event) {
          event.stopPropagation()
          previous()
        }}
        className={buttonClass + ' left-1 top-1/2 hidden -translate-y-1/2 md:block'}
      >
        <ChevronLeft size={36} strokeWidth={1} />
      </button>

      <AnimatePresence mode='wait' initial={false}>
        <motion.img
          key={photo.id}
          src={photo.large}
          alt={photo.alt}
          draggable={false}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
          onDragEnd={handleDragEnd}
          onClick={function (event) {
            event.stopPropagation()
          }}
          className='max-h-[88svh] max-w-[94vw] touch-pan-y object-contain md:max-w-[84vw]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>

      <button
        type='button'
        aria-label='Próxima foto'
        onClick={function (event) {
          event.stopPropagation()
          next()
        }}
        className={buttonClass + ' right-1 top-1/2 hidden -translate-y-1/2 md:block'}
      >
        <ChevronRight size={36} strokeWidth={1} />
      </button>
    </motion.div>,
    document.body,
  )
}

export default Lightbox
