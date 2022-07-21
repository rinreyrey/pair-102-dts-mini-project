import * as React from 'react';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import { useGetMovieNowPlayingQuery } from '../services/TMDBAPI';
import { Typography } from '@mui/material';

import {  Swiper, SwiperSlide } from 'swiper/react';
import MainCarouselItemMobile from './MainCarouselItemMobile';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MainCarouselMobile() {
  const { data, error, isLoading } = useGetMovieNowPlayingQuery();
    return (
      <>
      { error ?  
        (<Typography variant='body2'>Oh no, there was an error</Typography>)
       : isLoading ? 
        ( <Typography variant='body2'>Loading...</Typography>)
       : data ? (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        slidesPerView={1.15}
        centeredSlides={true}
        navigation
        breakpoints={
            {
                320: {
                    slidesPerView: 1
                    
                  },
                  480: {
                    slidesPerView: 1,
                    
                  },
                  640: {
                    slidesPerView: 1.1
                  }
            }
        }
        // pagination={{ clickable: true }}
        
      >
         {data.results.slice(0, 10).map((item) => {
          let dataprop={
            title: item.original_title,
            language: item.original_language,
            overview: item.overview,
            genre: item.genre_ids,
            poster: item.backdrop_path
          };
        return <SwiperSlide key={item.id}><MainCarouselItemMobile dataprop={dataprop}/></SwiperSlide>
         })}
      </Swiper> )
       : null
    }
     </> 
      
    );
  };