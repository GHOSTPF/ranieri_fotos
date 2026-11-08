import Reveal from './Reveal.jsx'
import SectionTitle from './SectionTitle.jsx'
import { services } from '../data/services.js'

function ServiceCard({ service, featured }) {
  const hasPhoto = Boolean(service.photo)

  return (
    <article
      className={
        'relative flex flex-col items-center justify-end overflow-hidden p-6 text-center ' +
        (featured ? 'aspect-[4/5] md:aspect-[21/9] ' : 'aspect-[4/3] ') +
        (hasPhoto ? 'bg-ink text-white' : 'border border-ink/15 justify-center')
      }
    >
      {hasPhoto && (
        <>
          <img
            src={service.photo.large}
            alt={service.photo.alt}
            loading='lazy'
            className='absolute inset-0 h-full w-full object-cover'
            style={{ objectPosition: 'center 90%' }}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/65 to-transparent' />
        </>
      )}
      <div className='relative'>
        <h3 className='font-serif text-3xl md:text-4xl'>{service.title}</h3>
        <a
          href={service.link}
          target='_blank'
          rel='noreferrer'
          className='mt-4 inline-block border-b border-current pb-1 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-70'
        >
          Quero orçamento
        </a>
      </div>
    </article>
  )
}

function Services() {
  return (
    <section id='servicos' className='scroll-mt-16 px-5 py-20 md:px-8 md:py-28'>
      <SectionTitle eyebrow='Serviços' title='O que eu registro' />
      <div className='mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {services.map(function (service, index) {
          return (
            <Reveal key={service.id} delay={index * 0.05} className={index === 0 ? 'sm:col-span-2 lg:col-span-4' : ''}>
              <ServiceCard service={service} featured={index === 0} />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Services
