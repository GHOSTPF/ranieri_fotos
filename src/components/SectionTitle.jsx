import Reveal from './Reveal.jsx'

function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal className='mb-12 text-center md:mb-16'>
      <p className='text-xs uppercase tracking-[0.3em] text-accent'>{eyebrow}</p>
      {title && <h2 className='mt-4 font-serif text-4xl leading-tight md:text-5xl'>{title}</h2>}
    </Reveal>
  )
}

export default SectionTitle
