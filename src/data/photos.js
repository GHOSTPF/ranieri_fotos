// TODO: substituir pela foto original do Raniere.
// Todas as fotos abaixo vieram de posts públicos do Instagram (1080px), como referência
// temporária de desenvolvimento. Antes de publicar, trocar pelos arquivos autorizados
// pelo Raniere e confirmar a autorização dos clientes que aparecem nas imagens.

function photo(category, file, alt, width, height) {
  return {
    id: file,
    category,
    alt,
    width: width || 1080,
    height: height || 1440,
    thumb: '/fotos/' + category + '/800/' + file + '.webp',
    large: '/fotos/' + category + '/2000/' + file + '.webp',
  }
}

// TODO: as categorias sem fotos mostram um link para o destaque do Instagram até recebermos
// os arquivos. Fotos de partos e infantil dependem de confirmação do Raniere.
export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'casamentos', label: 'Casamentos' },
  { id: '15-anos', label: '15 Anos', highlight: 'https://www.instagram.com/stories/highlights/17931048975268129/' },
  { id: 'partos', label: 'Partos', highlight: 'https://www.instagram.com/stories/highlights/17861660280660702/' },
  { id: 'infantil', label: 'Infantil', highlight: 'https://www.instagram.com/stories/highlights/18027582749578292/' },
  { id: 'familia', label: 'Família', highlight: 'https://www.instagram.com/stories/highlights/17994629902018079/' },
]

export const photos = [
  photo('casamentos', 'DZ-k444zSEc', 'Noivos caminhando até uma capela branca entre coqueiros em São Miguel dos Milagres, Alagoas'),
  photo('casamentos', 'DTvziGvEY0O', 'Casal correndo de mãos dadas à beira-mar com a luz dourada do fim de tarde'),
  photo('casamentos', 'DYlKrJWzYQg', 'Silhueta em preto e branco de noiva segurando o véu'),
  photo('casamentos', 'DaZM-cCTHlv', 'Casal dançando em um gramado diante de uma muralha de pedra'),
  photo('casamentos', 'DfItyyjzo4x', 'Noiva de vestido longo em um corredor amplo, em preto e branco'),
  photo('casamentos', 'DYqJlpMH_A0', 'Detalhes da noiva: sandálias, joias, terço e pequenas fotos de família'),
  photo('casamentos', 'DayztphFnhF', 'Casal diante de uma capela antiga coberta de vegetação no Engenho Triunfo, em Areia, Paraíba'),
  photo('casamentos', 'DZfiT11FmUR', 'Noivos de mãos dadas, de costas, olhando o mar'),
  photo('casamentos', 'Db6ABXtzxeS', 'Casal sorrindo rosto a rosto em ensaio pré-wedding em preto e branco'),
  photo('casamentos', 'DQCwEuYkX_j', 'Véu de noiva sobre uma poltrona com sandálias claras ao centro', 1064, 1418),
  photo('casamentos', 'Db81XGSTkge', 'Vista aérea de um casal em um cânion de terra vermelha', 1080, 1363),
  photo('casamentos', 'DZiDO_Bzbwz', 'Noivos se beijando à beira-mar, em preto e branco'),
  photo('casamentos', 'Db87pOfn3XL', 'Noivo de terno claro e óculos escuros caminhando em direção à câmera'),
  photo('casamentos', 'DZOZurbltmj', 'Mulher sorrindo sentada nos ombros do companheiro em um campo aberto', 1080, 1439),
  photo('casamentos', 'Da0JpNKTBap', 'Casal rosto a rosto em contraluz, em preto e branco'),
  photo('casamentos', 'DbdrG2oFtzz', 'Close do olhar de uma noiva com flores em primeiro plano'),
  photo('casamentos', 'Da0Fx0Ez35m', 'Casal abraçado em uma sacada branca diante de fundo escuro'),
  photo('casamentos', 'Deeka3PEZGH', 'Casal abraçado à beira da água, emoldurado por árvores, em preto e branco'),
  photo('casamentos', 'DZ-lcSnzvKm', 'Noivos lado a lado durante a cerimônia, noiva com vestido de renda'),
  photo('casamentos', 'Db8655yHxR_', 'Noiva sorrindo com véu junto à parede, em preto e branco'),
]

function findPhoto(id) {
  return photos.find(function (item) {
    return item.id === id
  })
}

export const heroPhotos = [
  { photo: findPhoto('DZ-k444zSEc'), position: 'center 90%' },
  { photo: findPhoto('DTvziGvEY0O'), position: 'center 22%' },
  { photo: findPhoto('DZfiT11FmUR'), position: 'center 80%' },
  { photo: findPhoto('DaZM-cCTHlv'), position: 'center 74%' },
  { photo: findPhoto('Deeka3PEZGH'), position: 'center 95%' },
]

export const parallaxColumns = [
  [findPhoto('DYlKrJWzYQg'), findPhoto('DZOZurbltmj'), findPhoto('Da0JpNKTBap')],
  [findPhoto('DYqJlpMH_A0'), findPhoto('DayztphFnhF'), findPhoto('Db87pOfn3XL')],
  [findPhoto('DbdrG2oFtzz'), findPhoto('Db81XGSTkge'), findPhoto('DZiDO_Bzbwz')],
]

export const servicePhotos = {
  casamentos: findPhoto('DZ-k444zSEc'),
}

// TODO: substituir pela foto original do Raniere (esta é um recorte de baixa resolução da foto de perfil).
export const portrait = {
  src: '/fotos/sobre/2000/raniere.webp',
  alt: 'Retrato de Raniere Alves, fotógrafo de casamentos em João Pessoa',
}
