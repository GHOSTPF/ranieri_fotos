import { useState } from 'react'
import CategoryFilter from './CategoryFilter.jsx'
import MasonryGallery from './MasonryGallery.jsx'
import SectionTitle from './SectionTitle.jsx'
import { categories, photos } from '../data/photos.js'

function Portfolio() {
  const [active, setActive] = useState('todos')

  const visible =
    active === 'todos'
      ? photos
      : photos.filter(function (photo) {
          return photo.category === active
        })

  const activeCategory = categories.find(function (category) {
    return category.id === active
  })

  return (
    <section id='portfolio' className='scroll-mt-16 px-2 py-20 md:px-4 md:py-28'>
      <SectionTitle eyebrow='Portfólio' title='Histórias registradas' />
      <div className='mb-10 px-4'>
        <CategoryFilter categories={categories} active={active} onChange={setActive} />
      </div>
      <div className='mx-auto max-w-7xl'>
        {visible.length > 0 ? (
          <MasonryGallery key={active} photos={visible} />
        ) : (
          // TODO: remover este estado vazio quando as fotos da categoria chegarem em public/fotos/.
          <p className='py-16 text-center text-sm leading-relaxed text-ink/70'>
            Veja os trabalhos de {activeCategory.label} no{' '}
            <a href={activeCategory.highlight} target='_blank' rel='noreferrer' className='underline underline-offset-4'>
              Instagram
            </a>
            .
          </p>
        )}
      </div>
    </section>
  )
}

export default Portfolio
