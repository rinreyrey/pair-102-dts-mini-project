import * as React from 'react';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import { useGetMovieUpcomingQuery } from '../services/TMDBAPI';
import { Link as Lin } from "react-router-dom";

import {  Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Typography } from '@mui/material';

export default function UpcomingMovieCarousel() {
    const { data, error, isLoading } = useGetMovieUpcomingQuery();
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
        spaceBetween={0}
        navigation
        breakpoints={
            {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 5
                  },
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 5
                  },
                  720 : {
                    slidesPerView: 5,
                    spaceBetween: 5
                  }
            }
        }
        
      >
        {
          data.results.slice(0, 10).map((item) => {
            return <SwiperSlide key={item.id}><Lin to={`../movie/${item.id}`}><img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} style={{width:'100%'}} alt="Poster"></img></Lin></SwiperSlide>
        })}
      </Swiper>
       )
       : null
    }
     </>   
        
      
    );
  };