import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionTitle from './SectionTitle.jsx'
import { FEEDBACKS_URL } from '../data/site.js'
import { testimonials } from '../data/testimonials.js'

function Carousel() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const item = testimonials[index]

  function move(step) {
    setIndex((index + step + total) % total)
  }

  return (
    <div className='mx-auto max-w-3xl text-center'>
      <AnimatePresence mode='wait'>
        <motion.figure
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
        >
          <blockquote className='font-serif text-2xl leading-snug md:text-3xl'>{item.text}</blockquote>
          <figcaption className='mt-6 text-xs uppercase tracking-[0.25em] text-accent'>{item.author}</figcaption>
        </motion.figure>
      </AnimatePresence>
      {total > 1 && (
        <div className='mt-8 flex justify-center gap-4'>
          <button
            type='button'
            aria-label='Depoimento anterior'
            className='cursor-pointer p-2'
            onClick={function () {
              move(-1)
            }}
          >
            <ChevronLeft size={24} strokeWidth={1.25} />
          </button>
          <button
            type='button'
            aria-label='Próximo depoimento'
            className='cursor-pointer p-2'
            onClick={function () {
              move(1)
            }}
          >
            <ChevronRight size={24} strokeWidth={1.25} />
          </button>
        </div>
      )}
    </div>
  )
}

function Testimonials() {
  return (
    <section id='depoimentos' className='scroll-mt-16 px-6 py-20 md:py-28'>
      <SectionTitle eyebrow='Depoimentos' title='Quem viveu essa experiência' />
      {testimonials.length > 0 ? (
        <Carousel />
      ) : (
        // TODO: preencher src/data/testimonials.js com os depoimentos reais; o carrossel aparece sozinho.
        <Reveal className='text-center'>
          <a
            href={FEEDBACKS_URL}
            target='_blank'
            rel='noreferrer'
            className='inline-block border border-ink px-8 py-4 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-ink hover:text-paper'
          >
            Ver feedbacks no Instagram
          </a>
        </Reveal>
      )}
    </section>
  )
}

export default Testimonials
