// di sini kita akan menggunakan state dan effect
import React, { useEffect,useState } from 'react';
// supaya bisa menangkap parameter, gunakan useParams
import { useParams } from 'react-router-dom';
import { useGetMovieDetailQuery } from '../services/TMDBAPI';
import { useNavigate } from "react-router-dom";
import {
  auth
} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import PrimarySearchAppBar from './AppTop';
import DetailMovieContainer from './DetailMovieContainer';
import PopularMovieCarousel from './PopularMovieCarousel';
import TopRatedMovieCarousel from './TopRatedMovieCarousel';
import UpcomingMovieCarousel from './UpcomingMovieCarousel';
import NowPlayingMovieCarousel from './NowPlayingMovieCarousel';
import Footer from './Footer';
import { Typography } from '@mui/material';
import DetailMovieContainerMobile from './DetailMovieContainerMobile';

export default function DetailMovie() {
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
    // di sini kita akan menggunakan hooks useAuthState
     // useAuthState ini menerima 2 parameter:
    // parameter 1: auth (yang kita buat dan export dari firebase)
    // parameter 2 (optional): options (dalam bentuk object)
    //    digunakan apabila ingin menggunakan hooks dengan lebih detail (melihat perubahan user)
    //    (Pada pembelajaran ini tidak digunakan)

    // Mengembalikan 3 data (dalam array)
    // user: akan mengembalikan auth.User apabila ada yang log in, dan null bila tidak ada
    // loading: boolean yang digunakan sebagai indikator apakah firebasenya sedang menunggu login
    // error: bila ada error yang diberikan
    const [user,isLoading] = useAuthState(auth);
    
    // tangkap params di sini (bentuknya adalah object);
    let {id} = useParams();
    const { data, error, isLoading:Load } = useGetMovieDetailQuery(id);

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
      window.addEventListener("resize", handleResize, false);
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
       : data ? ( dimensions.width>=712?
        <DetailMovieContainer dataprop={{
            title: data.original_title,
            language: data.original_language,
            overview: data.overview,
            genre: data.genres[0].id,
            poster: data.backdrop_path }}/> : <DetailMovieContainerMobile dataprop={{
              title: data.original_title,
              language: data.original_language,
              overview: data.overview,
              genre: data.genres[0].id,
              poster: data.backdrop_path }}/>) : null}
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