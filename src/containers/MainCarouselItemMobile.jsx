import * as React from 'react';
// import { Card } from '@mui/material';
// import { useGetMovieGenreQuery } from '../services/TMDBAPI';

export default function MainCarouselItemMobile({dataprop}) {
    // const { data, error, isLoading } = useGetMovieGenreQuery();
    return (
            // <Card sx={{display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
                <img className='img-carousel' style={{width:'100%'}} src={`https://image.tmdb.org/t/p/w300${dataprop.poster}`} alt="Poster"></img>
            // </Card>
    )
}