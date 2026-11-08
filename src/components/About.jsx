import Reveal from './Reveal.jsx'
import { portrait } from '../data/photos.js'

function About() {
  return (
    <section id='sobre' className='scroll-mt-16 bg-white px-6 py-20 md:py-28'>
      <Reveal className='mx-auto flex max-w-2xl flex-col items-center text-center'>
        <img src={portrait.src} alt={portrait.alt} width='176' height='176' loading='lazy' className='h-44 w-44 rounded-full object-cover' />
        <p className='mt-10 text-xs uppercase tracking-[0.3em] text-accent'>Sobre</p>
        <h2 className='mt-4 font-serif text-4xl leading-tight md:text-5xl'>Viver e contar histórias</h2>
        {/* TODO: substituir pelo texto mais longo que o Raniere vai escrever. */}
        <p className='mt-6 leading-relaxed text-ink/75'>
          Raniere Alves é fotógrafo de casamentos em João Pessoa – PB. Cristão, atua desde 2012 e já registrou mais de 350
          casamentos.
        </p>
      </Reveal>
    </section>
  )
}

export default About
