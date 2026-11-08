import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { DEFAULT_WHATSAPP_LINK } from '../data/site.js'

const LINKS = [
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(function () {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return function () {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const solid = scrolled || open

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ' +
        (solid ? 'bg-paper text-ink shadow-[0_1px_0_rgba(26,26,26,0.08)]' : 'bg-transparent text-white')
      }
    >
      <nav className='mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8' aria-label='Principal'>
        <a href='#inicio' className='font-serif text-2xl'>
          Raniere Alves
        </a>

        <div className='hidden items-center gap-8 lg:flex'>
          {LINKS.map(function (link) {
            return (
              <a key={link.href} href={link.href} className='text-xs uppercase tracking-[0.2em] opacity-80 transition-opacity hover:opacity-100'>
                {link.label}
              </a>
            )
          })}
          <a
            href={DEFAULT_WHATSAPP_LINK}
            target='_blank'
            rel='noreferrer'
            className='border border-current px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-70'
          >
            Orçamento
          </a>
        </div>

        <button
          type='button'
          className='-mr-2 cursor-pointer p-2 lg:hidden'
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={function () {
            setOpen(!open)
          }}
        >
          {open ? <X size={26} strokeWidth={1.25} /> : <Menu size={26} strokeWidth={1.25} />}
        </button>
      </nav>

      {open && (
        <div className='border-t border-ink/10 bg-paper px-5 pb-8 pt-4 lg:hidden'>
          {LINKS.map(function (link) {
            return (
              <a key={link.href} href={link.href} onClick={closeMenu} className='block py-3 text-sm uppercase tracking-[0.2em]'>
                {link.label}
              </a>
            )
          })}
          <a
            href={DEFAULT_WHATSAPP_LINK}
            target='_blank'
            rel='noreferrer'
            onClick={closeMenu}
            className='mt-4 block bg-ink py-4 text-center text-xs uppercase tracking-[0.2em] text-paper'
          >
            Orçamento
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
