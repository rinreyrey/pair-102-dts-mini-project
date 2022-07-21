// di sini kita akan menggunakan state dan effect
import React, { useEffect } from 'react';
// supaya bisa menangkap parameter, gunakan useParams
import { useParams } from 'react-router-dom';
import { useGetVideoQuery,useGetMovieDetailQuery } from '../services/TMDBAPI';
import { useNavigate } from "react-router-dom";
import {
  auth
} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import PrimarySearchAppBar from './AppTop';
import PopularMovieCarousel from './PopularMovieCarousel';
import TopRatedMovieCarousel from './TopRatedMovieCarousel';
import UpcomingMovieCarousel from './UpcomingMovieCarousel';
import NowPlayingMovieCarousel from './NowPlayingMovieCarousel';
import Footer from './Footer';
import { Typography,Box } from '@mui/material';

export default function DetailMoviePlay() {
    const navigate = useNavigate();
    const [user,isLoading] = useAuthState(auth);
    
    // tangkap params di sini (bentuknya adalah object);
    let {id} = useParams();
    const { data, error, isLoading:Load } = useGetVideoQuery(id);
    const { data:d, error:err, isLoading:Ld } = useGetMovieDetailQuery(id);

    // Kita gunakan.... useEffect !
  useEffect(
    () => {
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }
      if (!user) {
        navigate("/home");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, navigate, isLoading]
  );

    return(
        
        <>
        <PrimarySearchAppBar email={user?.email}/>
        {error ?  
        (<Typography variant='body2'>Oh no, there was an error</Typography>)
       : Load ? 
        ( <Typography variant='body2'>Loading...</Typography>)
       : data ? (data.results[0] ?<div className="videoWrapper"> 
        <iframe width="80%" src={`https://www.youtube.com/embed/${data.results[0].key}`} title={data.results[0].name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>:<div className='no-video'><Typography variant="body1">No video available</Typography></div>) : null}
        {err ?  
        (<Typography variant='body2'>Oh no, there was an error</Typography>)
       : Ld ? 
        ( <Typography variant='body2'>Loading...</Typography>)
       : d ? (<Box className='main-carousel__item'>
       <Typography variant='h6'>Description :</Typography>
       <Typography variant='body1'>{d.overview}</Typography>
       </Box>) : null}
        <div className="main-carousel__item" id="popular">
            <Typography component='div' variant='h6' sx={{marginBottom:'0.3em'}}>Popular</Typography>
            <PopularMovieCarousel/>
        </div>
        <div className="main-carousel__item" id="nowplaying">
            <Typography component='div' variant='h6' sx={{marginBottom:'0.3em'}}>Now Playing</Typography>
            <NowPlayingMovieCarousel/>
        </div>
        <div className="main-carousel__item" id="toprated">
            <Typography component='div' variant='h6' sx={{marginBottom:'0.3em'}}>Top Rated</Typography>
            <TopRatedMovieCarousel />
        </div>
        <div className="main-carousel__item" id="upcoming">
            <Typography component='div' variant='h6' sx={{marginBottom:'0.3em'}}>Upcoming</Typography>
            <UpcomingMovieCarousel />
        </div>
        <Footer />
        </>
    );
}