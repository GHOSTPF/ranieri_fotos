import { motion } from 'framer-motion'
import HeroSlideshow from './HeroSlideshow.jsx'
import { heroPhotos } from '../data/photos.js'
import { DEFAULT_WHATSAPP_LINK } from '../data/site.js'

function Hero() {
  return (
    <section id='inicio'>
      <HeroSlideshow slides={heroPhotos}>
        <motion.div
          className='flex h-full flex-col items-center justify-center px-6 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          <h1 className='font-serif text-6xl leading-none md:text-8xl'>Raniere Alves</h1>
          <p className='mt-5 text-xs uppercase leading-relaxed tracking-[0.25em] md:text-sm'>
            Fotografia de Casamentos · João Pessoa – PB
          </p>
          <a
            href={DEFAULT_WHATSAPP_LINK}
            target='_blank'
            rel='noreferrer'
            className='mt-10 border border-white px-8 py-4 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-ink'
          >
            Solicitar orçamento
          </a>
        </motion.div>
      </HeroSlideshow>
    </section>
  )
}

export default Hero
