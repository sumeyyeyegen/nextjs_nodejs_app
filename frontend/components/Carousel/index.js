import React, {useState} from 'react'
import styles from './styles.module.css'
import images from '../../images/index';
import Image from 'next/image';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const photos = [images.Image1]

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const arr = [{src: images.Image1.src}, {src: images.Image2.src}, {src: images.Image3.src}, {src: images.Image4.src}]

  return (
    <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
      <div className="relative w-full" onSelect={handleSelect}>
        <div className="carousel">
          {arr.map((item, i) => (
            <div className="w-full flex-shrink-0" key={i}>
              <Image src={item.src} alt='' className="w-full object-contain" width={1000} height={500} />
            </div>
          ))}

        </div>
      </div>
    </div>
      )
}

      export default CarouselComponent