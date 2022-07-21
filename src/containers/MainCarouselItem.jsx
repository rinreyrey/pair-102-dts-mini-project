import * as React from 'react';
import { Box, Typography,Card } from '@mui/material';
// import Logom from '../assets/logom.svg';
import { useGetMovieGenreQuery } from '../services/TMDBAPI';

export default function MainCarouselItem({dataprop}) {
    const { data, error, isLoading } = useGetMovieGenreQuery();
    if(dataprop.overview.length>200){ var desc = `${dataprop.overview.slice(0, 200)}....`}
    else { desc = dataprop.overview}
    let j=0;
    return (
            <Card sx={{display: 'flex',padding: '1.5em',marginTop:'0.5em',justifyContent:'space-between',alignItems:'center',maxHeight:'169px'}}>
                <Box className='text-carousel' sx={{flexBasis:'45%'}}>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'0.2em'}}>
                        <Typography component="div" variant="h6">{dataprop.title}</Typography>
                        <div style={{display:'flex',gap:'0.5em'}}>
                            <Typography variant="body2">{dataprop.language}</Typography>
                            <Typography variant="body2">{error?'':isLoading?'':data?(data.genres.map((item)=>{
                                return dataprop.genre.map((dat)=>{
                                    let i=dataprop.genre.length;
                                    
                                    if(item.id===dat){
                                        j++
                                        if(j===i){
                                        return `${item.name}`
                                        }
                                        else {
                                            return `${item.name}, `
                                        }
                                    }
                                    return null;
                                })
                                
                            })):null}</Typography>    
                        </div>   
                        <Typography variant='body2'>{desc}</Typography>
                    </Box>
                </Box>
                <img className='img-carousel' style={{flexBasis:'30%'}} src={`https://image.tmdb.org/t/p/w300${dataprop.poster}`} alt="Poster"></img>
            </Card>
    )
}