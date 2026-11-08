const ITEMS = ['Desde 2012', '+350 casamentos registrados', 'João Pessoa – PB']

function Numbers() {
  return (
    <section aria-label='Números' className='border-b border-ink/10'>
      <ul className='mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 px-6 py-8 text-center md:flex-row md:justify-between md:gap-8'>
        {ITEMS.map(function (item) {
          return (
            <li key={item} className='font-serif text-xl md:text-2xl'>
              {item}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Numbers
