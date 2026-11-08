import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Column({ photos, y, className }) {
  return (
    <motion.div style={{ y }} className={'flex flex-col gap-2 md:gap-4 ' + (className || '')}>
      {photos.map(function (photo) {
        return (
          <img
            key={photo.id}
            src={photo.thumb}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading='lazy'
            className='h-auto w-full'
          />
        )
      })}
    </motion.div>
  )
}

function ParallaxColumns({ columns }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const up = useTransform(scrollYProgress, [0, 1], ['6%', '-14%'])
  const down = useTransform(scrollYProgress, [0, 1], ['-14%', '6%'])

  return (
    <div ref={ref} className='h-[75svh] overflow-hidden md:h-[110svh]'>
      <div className='grid grid-cols-2 gap-2 px-2 md:grid-cols-3 md:gap-4 md:px-4'>
        <Column photos={columns[0]} y={up} />
        <Column photos={columns[1]} y={down} />
        <Column photos={columns[2]} y={up} className='hidden md:flex' />
      </div>
    </div>
  )
}

export default ParallaxColumns
