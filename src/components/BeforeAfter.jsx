import { useState } from 'react'

// Usar somente se o Raniere enviar um par real de foto crua + editada.
function BeforeAfter({ before, after, alt }) {
  const [position, setPosition] = useState(50)

  return (
    <div className='relative overflow-hidden'>
      <img src={after} alt={alt + ' (depois da edição)'} loading='lazy' className='block h-auto w-full' />
      <img
        src={before}
        alt={alt + ' (antes da edição)'}
        loading='lazy'
        className='absolute inset-0 h-full w-full object-cover'
        style={{ clipPath: 'inset(0 ' + (100 - position) + '% 0 0)' }}
      />
      <div className='pointer-events-none absolute inset-y-0 w-px bg-white' style={{ left: position + '%' }} />
      <input
        type='range'
        min='0'
        max='100'
        value={position}
        aria-label='Comparar antes e depois'
        onChange={function (event) {
          setPosition(Number(event.target.value))
        }}
        className='absolute inset-0 h-full w-full cursor-ew-resize opacity-0'
      />
    </div>
  )
}

export default BeforeAfter
