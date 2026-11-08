import { MessageCircle } from 'lucide-react'
import { DEFAULT_WHATSAPP_LINK } from '../data/site.js'

function WhatsAppButton() {
  return (
    <a
      href={DEFAULT_WHATSAPP_LINK}
      target='_blank'
      rel='noreferrer'
      aria-label='Conversar no WhatsApp'
      className='fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f4d] text-white shadow-lg transition-transform hover:scale-105'
    >
      <MessageCircle size={26} strokeWidth={1.5} />
    </a>
  )
}

export default WhatsAppButton
