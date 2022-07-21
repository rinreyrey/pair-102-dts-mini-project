import React, { useEffect,useState } from 'react';
import PrimarySearchAppBar from './AppTop';
import MainCarousel from './MainCarousel';
import MainCarouselMobile from './MainCarouselMobile';
import PopularMovieCarousel from './PopularMovieCarousel';
import TopRatedMovieCarousel from './TopRatedMovieCarousel';
import UpcomingMovieCarousel from './UpcomingMovieCarousel';
import NowPlayingMovieCarousel from './NowPlayingMovieCarousel';
import Footer from './Footer';
import { Typography } from '@mui/material';
import {
    auth
  } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth
    });
    // console.log(dimensions);
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth
      });
    }
  
    const [user,isLoading] = useAuthState(auth);
    useEffect(
        () => {
          if (isLoading) {
            // Tampilkan loading screen (bila ada)
            return;
          }
          if (!user) {
            navigate("/home");
          }
          window.addEventListener("resize", handleResize, false);
          // console.log(dimensions);
        },
        // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
        [user, navigate, isLoading]
      );
    return(
        <>
        <PrimarySearchAppBar email={user?.email} />
        {dimensions?.width>=720? <MainCarousel /> : <MainCarouselMobile />}
        
        <div className="main-carousel__item" id='popular'>
            <Typography component='div' variant='h6' sx={{marginBottom:'0.3em'}}>Popular</Typography>
            <PopularMovieCarousel/>
        </div>
        <div className="main-carousel__item" id='nowplaying'>
            <Typography component='div' variant='h6' sx={{marginBottom:'0.3em'}}>Now Playing</Typography>
            <NowPlayingMovieCarousel/>
        </div>
        <div className="main-carousel__item" id='toprated'>
            <Typography component='div' variant='h6' sx={{marginBottom:'0.3em'}}>Top Rated</Typography>
            <TopRatedMovieCarousel />
        </div>
        <div className="main-carousel__item" id='upcoming'>
            <Typography component='div' variant='h6' sx={{marginBottom:'0.3em'}}>Upcoming</Typography>
            <UpcomingMovieCarousel />
        </div>
        <Footer />
        </>
    );
}