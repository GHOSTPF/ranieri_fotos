import { motion } from 'framer-motion'

function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className='flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-10' role='tablist' aria-label='Categorias do portfólio'>
      {categories.map(function (category) {
        const isActive = category.id === active
        return (
          <button
            key={category.id}
            type='button'
            role='tab'
            aria-selected={isActive}
            onClick={function () {
              onChange(category.id)
            }}
            className={
              'relative cursor-pointer py-2 text-xs uppercase tracking-[0.2em] transition-colors ' +
              (isActive ? 'text-ink' : 'text-ink/50 hover:text-ink')
            }
          >
            {category.label}
            {isActive && (
              <motion.span layoutId='category-underline' className='absolute inset-x-0 bottom-0 h-px bg-accent' />
            )}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
