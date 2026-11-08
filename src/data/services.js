import { servicePhotos } from './photos.js'
import { whatsappLink } from './site.js'

function service(id, title, messageSubject, photo) {
  return {
    id,
    title,
    photo: photo || null,
    link: whatsappLink('Olá Raniere! Gostaria de um orçamento para ' + messageSubject + '.'),
  }
}

// TODO: enviar uma foto real de cada categoria sem imagem (15 Anos, Partos, Infantil, Família).
export const services = [
  service('casamentos', 'Casamentos', 'Casamento', servicePhotos.casamentos),
  service('15-anos', '15 Anos', 'Festa de 15 Anos'),
  service('partos', 'Partos', 'Registro de Parto'),
  service('infantil', 'Infantil', 'Ensaio Infantil'),
  service('familia', 'Família', 'Ensaio de Família'),
]
