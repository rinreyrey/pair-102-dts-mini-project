import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import Logom from '../assets/logom.svg';
import { useGetMovieGenreQuery } from '../services/TMDBAPI';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function DetailMovieContainer({dataprop}) {
    const { data, error, isLoading } = useGetMovieGenreQuery();
    if(dataprop.overview.length>200){ var desc = `${dataprop.overview.slice(0, 200)}....`}
    else {  desc = dataprop.overview}
    return (
        <>
            <Box sx={{display: 'flex',justifyContent:'space-between',alignItems:'center',height:'56.25vw',backgroundPosition: 'cover',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',backgroundImage:`url("https://image.tmdb.org/t/p/original${dataprop.poster}")`}}>
                <Box className='main-carousel__item' sx={{flexBasis:'45%',marginTop:0}}>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'0.2em'}}>
                        <Typography component="div" variant="h4">{dataprop.title}</Typography>
                        <div style={{display:'flex',gap:'0.5em'}}>
                            <Typography variant="body2">{dataprop.language}</Typography>
                            <Typography variant="body2">{error?'':isLoading?'':data?(data.genres.map((item)=>{
                                if(item.id===dataprop.genre){
                                    return item.name;
                                }
                                return null;
                            })):null}</Typography>    
                        </div>   
                        <Typography variant='body2'>{desc}</Typography>
                        <div style={{display:'flex',gap:'10px',marginTop:'10px'}}>
                            <Button variant="contained"><PlayArrowIcon style={{marginRight:'7px'}}></PlayArrowIcon>Play</Button>
                            <Button variant="contained"><InfoOutlinedIcon style={{marginRight:'7px'}}></InfoOutlinedIcon>More information</Button>
                        </div>
                    </Box>
                </Box>
            </Box>
            <Box className='main-carousel__item'>
            <Typography variant='h6'>Description :</Typography>
            <Typography variant='body1'>{dataprop.overview}</Typography>
            </Box>

        </>
    )
}