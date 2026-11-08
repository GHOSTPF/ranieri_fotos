// Converte as fotos de public/fotos/<categoria>/ para WebP.
// Gera <categoria>/2000/<nome>.webp (lightbox e hero) e <categoria>/800/<nome>.webp (galeria).
// Uso: npm run otimizar

import { mkdir, readdir } from 'node:fs/promises'
import { extname, join, parse } from 'node:path'
import sharp from 'sharp'

const ROOT = join(process.cwd(), 'public', 'fotos')
const SIZES = [2000, 800]
const SOURCE_FORMATS = ['.jpg', '.jpeg', '.png', '.webp']

async function optimizeFile(categoryDir, fileName) {
  const name = parse(fileName).name
  for (const size of SIZES) {
    const outDir = join(categoryDir, String(size))
    await mkdir(outDir, { recursive: true })
    await sharp(join(categoryDir, fileName))
      .rotate()
      .resize({ width: size, height: size, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(join(outDir, name + '.webp'))
  }
}

async function main() {
  const entries = await readdir(ROOT, { withFileTypes: true })
  let total = 0
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const categoryDir = join(ROOT, entry.name)
    const files = await readdir(categoryDir, { withFileTypes: true })
    for (const file of files) {
      if (!file.isFile()) continue
      if (!SOURCE_FORMATS.includes(extname(file.name).toLowerCase())) continue
      await optimizeFile(categoryDir, file.name)
      total += 1
      console.log(entry.name + '/' + file.name)
    }
  }
  console.log(total + ' fotos otimizadas.')
}

main()
