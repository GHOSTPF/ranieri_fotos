export const WHATSAPP_NUMBER = '5583986030233'
export const INSTAGRAM_URL = 'https://www.instagram.com/ranierealvesfotografia/'
export const INSTAGRAM_HANDLE = '@ranierealvesfotografia'
export const FEEDBACKS_URL = 'https://www.instagram.com/stories/highlights/18473969398065880/'

export function whatsappLink(message) {
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message)
}

export const DEFAULT_WHATSAPP_LINK = whatsappLink('Olá Raniere! Gostaria de solicitar um orçamento.')
