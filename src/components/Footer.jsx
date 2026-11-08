import { Camera, MessageCircle } from 'lucide-react'
import { DEFAULT_WHATSAPP_LINK, INSTAGRAM_URL } from '../data/site.js'

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className='border-t border-paper/10 bg-ink px-6 pb-24 pt-10 text-paper/70 md:pb-10'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center text-sm md:flex-row md:text-left'>
        <div>
          <p className='font-serif text-xl text-paper'>Raniere Alves</p>
          <p className='mt-1'>João Pessoa – PB</p>
        </div>
        <div className='flex items-center gap-6'>
          <a href={INSTAGRAM_URL} target='_blank' rel='noreferrer' className='flex items-center gap-2 hover:text-paper'>
            <Camera size={16} strokeWidth={1.5} /> Instagram
          </a>
          <a href={DEFAULT_WHATSAPP_LINK} target='_blank' rel='noreferrer' className='flex items-center gap-2 hover:text-paper'>
            <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp
          </a>
        </div>
        <p>{'© ' + CURRENT_YEAR + ' Raniere Alves'}</p>
      </div>
    </footer>
  )
}

export default Footer
