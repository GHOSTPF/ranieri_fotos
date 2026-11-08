import Reveal from './Reveal.jsx'
import { DEFAULT_WHATSAPP_LINK, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/site.js'

function Contact() {
  return (
    <section id='contato' className='scroll-mt-16 bg-ink px-6 py-24 text-center text-paper md:py-36'>
      <Reveal>
        <p className='text-xs uppercase tracking-[0.3em] text-accent-soft'>Contato</p>
        <h2 className='mx-auto mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl'>
          Vamos registrar o seu grande dia?
        </h2>
        <a
          href={DEFAULT_WHATSAPP_LINK}
          target='_blank'
          rel='noreferrer'
          className='mt-10 inline-block bg-paper px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-opacity hover:opacity-85'
        >
          Falar no WhatsApp
        </a>
        <p className='mt-8'>
          <a href={INSTAGRAM_URL} target='_blank' rel='noreferrer' className='text-sm underline underline-offset-4 opacity-80 hover:opacity-100'>
            {INSTAGRAM_HANDLE}
          </a>
        </p>
      </Reveal>
    </section>
  )
}

export default Contact
