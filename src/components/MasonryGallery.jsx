import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox.jsx'

function MasonryGallery({ photos }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <div className='columns-2 gap-2 md:columns-3 md:gap-4'>
        {photos.map(function (photo, index) {
          return (
            <motion.button
              key={photo.id}
              type='button'
              aria-label={'Ampliar foto: ' + photo.alt}
              onClick={function () {
                setOpenIndex(index)
              }}
              className='mb-2 block w-full cursor-zoom-in break-inside-avoid overflow-hidden md:mb-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '100px' }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading='lazy'
                className='h-auto w-full transition-transform duration-700 hover:scale-[1.03]'
              />
            </motion.button>
          )
        })}
      </div>
      {openIndex !== null && (
        <Lightbox
          photos={photos}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={function () {
            setOpenIndex(null)
          }}
        />
      )}
    </>
  )
}

export default MasonryGallery
