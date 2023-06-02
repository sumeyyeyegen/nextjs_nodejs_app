import React, {useState} from 'react'
import styles from './styles.module.css'
import images from '../../images/index';
import Image from 'next/image';
import {Box} from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const photos = [images.Image1]

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const arr = [{src: images.Image1.src}, {src: images.Image2.src}, {src: images.Image3.src}, {src: images.Image4.src}]

  return (
    <Box className={styles.homePageCarouselBox}>
        <Carousel
          autoPlay="true"
          emulateTouch="true"
          infiniteLoop="true"
          showArrows="true"
          className={styles.homePageCarousel}
        >  
          {
            arr.map((item, i) => (
              <div key={i}>
                <Image src={item.src} alt='' className="" height={100} width={500} />
              </div>
            ))
          }
      </Carousel>
    </Box>
    // <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
    //   <div className="relative w-full" onSelect={handleSelect}>
    //     <div className="carousel">
    //       {arr.map((item, i) => (
    //         <div className="w-full flex-shrink-0" key={i}>
    //           <Image src={item.src} alt='' className="w-full object-contain" width={1000} height={500} />
    //         </div>
    //       ))}

    //     </div>
    //   </div>
    // </div>
      )
}

      export default CarouselComponent